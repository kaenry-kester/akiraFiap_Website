async function loadComponent(id, file) {
    const element = document.getElementById(id);
    const response = await fetch(file);
    element.innerHTML = await response.text();
}

const scriptDirectory = new URL(".", document.currentScript.src);

loadComponent("header", new URL("../components/header.html", scriptDirectory));
loadComponent("footer", new URL("../components/footer.html", scriptDirectory));

const canvas = document.getElementById("c");
const context = canvas.getContext("2d");
const trail = [];

function resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
    const events = event.getCoalescedEvents ? event.getCoalescedEvents() : [event];
    const bounds = canvas.getBoundingClientRect();
    const scaleX = window.innerWidth / bounds.width;
    const scaleY = window.innerHeight / bounds.height;

    events.forEach((pointEvent) => {
        const nextPointer = {
            x: (pointEvent.clientX - bounds.left) * scaleX,
            y: (pointEvent.clientY - bounds.top) * scaleY,
        };
        trail.push({ ...nextPointer, life: 1 });
    });

    if (trail.length > 130) trail.splice(0, trail.length - 130);
});

function drawTrail() {
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

    while (trail.length && trail[0].life < 0.03) trail.shift();
    requestAnimationFrame(drawTrail);
}

resizeCanvas();
drawTrail();