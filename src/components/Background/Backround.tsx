import { useRef, useEffect } from "react";

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

        const createStars = () => {
            const numStars = Math.min(Math.floor(window.innerWidth / 20), 120); // cap at 120
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.2 + 0.3,
                    speed: Math.random() * 0.4 + 0.2, // keep speed same
                    alpha: Math.random(),
                    alphaChange: (Math.random() * 0.02) - 0.01,
                });
            }
        };

        const resizeCanvas = () => {
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
                    star.radius = Math.random() * 1.2 + 0.3; // new random size
                    star.alpha = Math.random(); // reset brightness
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
        />
    );
};

export default Background;
