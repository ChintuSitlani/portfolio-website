import { motion } from "framer-motion";
import { containerVariants, fadeSlideUp } from "../../utils/animation";
import { useInViewFade } from "../../utils/useInViewFade";
import { useMemo } from "react";

const StarIcon = () => {
    const star = useMemo(() => (
        <svg width="16" height="16" viewBox="0 0 100 100" className="inline-block">
            <polygon
                points="50,0 61.8,35 98.7,35 68.2,55.3 79.4,90 50,68 20.6,90 31.8,55.3 1.3,35 38.2,35"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="3"
            />
        </svg>
    ), []);

    return star;
};


export default function GetInTouch() {
    const { ref, inView } = useInViewFade(0.3);

    return (
        <div className="m-4 md:m-8">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="text-center mt-10 text-sm md:text-lg"
            >
                {/* Heading */}
                <motion.p variants={fadeSlideUp} className="text-gray-300 mb-6 mt-6 md:mt-8 text-lg md:text-xl">
                    Open to Ideas · Let’s Connect
                </motion.p>

                {/* Email */}
                <motion.a
                    variants={fadeSlideUp}
                    href="mailto:chintusitlani09@gmail.com"
                    className="block font-['Anton'] text-2xl md:text-4xl text-gray-300 mb-6 
                     hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                    chintusitlani09@gmail.com
                </motion.a>

                {/* GitHub */}
                <motion.p variants={fadeSlideUp} className="text-base text-gray-300 mt-12">
                    <a
                        href="https://github.com/ChintuSitlani/portfolio-website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group hover:text-white hover:underline underline-offset-4 transition-colors inline-flex items-center gap-2"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-1">
                            <span>If you like my work,</span>
                            <span className="inline-flex items-center gap-1">
                                give me a star <StarIcon /> on GitHub
                            </span>
                        </div>
                    </a>
                </motion.p>
            </motion.div>
        </div>
    );
}
