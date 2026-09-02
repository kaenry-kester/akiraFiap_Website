import { useEffect, useRef } from "react";
import createCursorTrail from "../../utils/CursorTrails";

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        return createCursorTrail(canvas);
    }, []);

    return <canvas ref={canvasRef} className="cursor-trail" />;
}