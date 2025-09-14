import { useRef, useEffect } from "react";

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameId = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        type Star = {
            x: number;
            y: number;
            radius: number;
            speed: number;
            alpha: number;
            alphaChange: number;
        };

        let stars: Star[] = [];

        // Regular function instead of useCallback
        const createStars = () => {
            const numStars = Math.min(Math.floor(window.innerWidth / 20), 120);
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.2 + 0.3,
                    speed: Math.random() * 0.4 + 0.2,
                    alpha: Math.random(),
                    alphaChange: (Math.random() * 0.02) - 0.01,
                });
            }
        };

        // Regular function instead of useCallback
        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createStars();
        };

        // Debounce resize to avoid too many recalculations
        let resizeTimeout: number;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(resizeCanvas, 150);
        };

        resizeCanvas();

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                // twinkle
                star.alpha += star.alphaChange;
                if (star.alpha <= 0 || star.alpha >= 1) {
                    star.alphaChange *= -1;
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                // move
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                    star.radius = Math.random() * 1.2 + 0.3;
                    star.alpha = Math.random();
                }
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
        />
    );
};

export default Background;