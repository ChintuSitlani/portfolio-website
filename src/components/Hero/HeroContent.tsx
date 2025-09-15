import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import { containerVariants, fadeSlideUp } from "../../utils/animation";


export default function HeroContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 300], [0, -50]);
    const ySpring = useSpring(yTransform, { stiffness: 100, damping: 30 });

    // Fade out later (before screen edge)
    const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const titleY = useTransform(scrollY, [0, 150], [0, -45]);
    const paragraphOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const paragraphY = useTransform(scrollY, [0, 250], [0, -45]);
    const buttonOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const buttonY = useTransform(scrollY, [0, 300], [0, -45]);

    const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: false });

    const setRefs = (el: HTMLDivElement) => {
        if (containerRef.current !== el) {
            containerRef.current = el;
            inViewRef(el);
        }
    };

    return (
        <section
            ref={setRefs}
            className="flex flex-col justify-center items-start 
  max-w-[544px] lg:max-w-[600px] xl:max-w-[700px]
  px-2 sm:px-4 md:px-6 lg:px-8 min-h-[70vh] md:min-h-screen pt-10 md:pt-0"
        >
            <motion.div style={{ y: isMobile ? 0 : ySpring }} className="relative w-full">
                <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                >
                    {/* Title */}
                    <motion.div style={{ opacity: titleOpacity, y: titleY }}>
                        <motion.h1
                            variants={fadeSlideUp}
                            className="font-['Anton'] text-4xl sm:text-5xl lg:text-7xl leading-[1] mb-6"
                        >
                            <span className="text-green-500 block">SOFTWARE</span>
                            <span className="ml-0 sm:ml-1 md:ml-2 lg:ml-4 text-white block">DEVELOPER</span>
                        </motion.h1>
                    </motion.div>

                    {/* Paragraph */}
                    <motion.div style={{ opacity: paragraphOpacity, y: paragraphY }}>
                        <motion.p
                            variants={fadeSlideUp}
                            className="text-base sm:text-lg md:text-lg lg:text-lg
                mb-6 text-gray-300 max-w-[90%] sm:max-w-[80%] md:max-w-none"
                        >
                            Hi! I'm <span className="font-semibold text-green-400">Chandra Prakash Sitlani</span>.
                            A creative Full-Stack Developer with 1.5+ years of experience in building
                            high-performance, scalable, and responsive web solutions.
                        </motion.p>
                    </motion.div>

                    {/* Button */}
                    <motion.div style={{ opacity: buttonOpacity, y: buttonY }} variants={fadeSlideUp}>
                        <motion.button
                            className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg
                hover:bg-green-600 transition-colors text-sm md:text-base
                shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
