interface TrailPoint {
  x: number;
  y: number;
  life: number;
}

export default function createCursorTrails(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");

  if (!context) return () => {};

  const trail: TrailPoint[] = [];
  let animationFrame = 0;

  const resizeCanvas = () => {
    const pixelRatio = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const addPointerPosition = (clientX: number, clientY: number) => {
    const bounds = canvas.getBoundingClientRect();
    const scaleX = window.innerWidth / bounds.width;
    const scaleY = window.innerHeight / bounds.height;

    const nextPointer = {
      x: (clientX - bounds.left) * scaleX,
      y: (clientY - bounds.top) * scaleY,
      life: 1,
    };

    trail.push(nextPointer);

    if (trail.length > 130) {
      trail.splice(0, trail.length - 130);
    }
  };

  const handlePointerMove = (event: PointerEvent) => {
    const points = event.getCoalescedEvents ? event.getCoalescedEvents() : [event];

    points.forEach((point) => addPointerPosition(point.clientX, point.clientY));
  };

  const drawTrail = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let index = 1; index < trail.length; index += 1) {
      const previous = trail[index - 1];
      const current = trail[index];
      const directionX = current.x - previous.x;
      const directionY = current.y - previous.y;
      const distance = Math.hypot(directionX, directionY);

      if (distance < 0.5) continue;

      current.life *= 0.82;

      const normalX = -directionY / distance;
      const normalY = directionX / distance;
      const progress = index / (trail.length - 1 || 1);
      const previousProgress = (index - 1) / (trail.length - 1 || 1);
      const profile = Math.sin(progress * Math.PI);
      const previousProfile = Math.sin(previousProgress * Math.PI);
      const width = profile * 3.5;
      const previousWidth = previousProfile * 3.5;
      const opacity = profile * current.life;

      context.beginPath();
      context.moveTo(previous.x + normalX * previousWidth, previous.y + normalY * previousWidth);
      context.lineTo(current.x + normalX * width, current.y + normalY * width);
      context.lineTo(current.x - normalX * width, current.y - normalY * width);
      context.lineTo(previous.x - normalX * previousWidth, previous.y - normalY * previousWidth);
      context.closePath();
      context.fillStyle = `rgba(255, 255, 255, ${Math.min(1, opacity * 1.3)})`;
      context.fill();
    }

    while (trail.length && trail[0].life < 0.03) {
      trail.shift();
    }

    animationFrame = window.requestAnimationFrame(drawTrail);
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", handlePointerMove);
  animationFrame = window.requestAnimationFrame(drawTrail);

  return () => {
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("pointermove", handlePointerMove);
    window.cancelAnimationFrame(animationFrame);
  };
}