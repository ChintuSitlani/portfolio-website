import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { containerVariants, fadeSlideUp } from "../../utils/animation";

type HeroStatsProps = {
    layout?: "col" | "row";
};

const stats = [
    { number: "1+", label: "Years of Experience" },
    { number: "4+", label: "Completed Projects" },
];

export default function HeroStats({ layout = "col" }: HeroStatsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: false });

    const setRefs = (el: HTMLDivElement) => {
        if (containerRef.current !== el) {
            containerRef.current = el;
            inViewRef(el);
        }
    };

    // Desktop scroll-based transforms
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 300], [0, -50]);
    const ySpring = useSpring(yTransform, { stiffness: 100, damping: 30 });

    const statOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const statY = useTransform(scrollY, [0, 250], [0, -45]);

    const isRow = layout === "row";

    return (
        <section
            ref={setRefs}
            className={`flex ${isRow ? "flex-row justify-center gap-8" : "flex-col justify-end items-end"} 
        w-full`}
        >
            <motion.div
                style={!isRow ? { y: ySpring } : {}}
                className={`relative w-full ${!isRow ? "mb-14" : ""}`}
            >
                <motion.div
                    key="content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className={`flex ${isRow ? "flex-row gap-6 justify-center" : "flex-col gap-6 text-right"}`}
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            style={!isRow ? { opacity: statOpacity, y: statY } : {}}
                            variants={fadeSlideUp}
                            className={`flex flex-col ${isRow ? "items-center text-center" : "items-end"}`}
                        >
                            <h1
                                className="font-['Anton'] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-500"
                            >
                                {stat.number}
                            </h1>
                            <p
                                className="text-sm sm:text-base md:text-lg text-gray-300 whitespace-normal leading-snug"
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
