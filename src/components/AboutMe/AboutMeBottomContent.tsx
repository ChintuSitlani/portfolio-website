import { motion } from "framer-motion";
import { containerVariants, fadeSlideUp } from "../../utils/animation";
import { useInViewFade } from "../../utils/useInViewFade";
import FadeLine from "../Line/FadedLine";

export default function AboutMeBottomContent() {
    const { ref, inView } = useInViewFade(0.3);

    const paragraphLines = [
        "I am a software developer committed to transforming ideas into efficient and reliable solutions.",
        "My approach emphasizes code quality, maintainability, and best practices, ensuring solutions are robust, secure, and adaptable.",
        "By focusing on performance, usability, and reliability, I aim to deliver software that not only meets requirements but also drives meaningful results."
    ];

    return (
        <section className="m-4 md:m-8">
            <div className="p-2">
                This is me.
            </div>
            <FadeLine opacity={0.2} thickness="2px"  />
            {/* <hr className="my-4 border-gray-200 border-opacity-1" /> */}

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid md:grid-cols-14 gap-4 mt-8"
            >
                {/* Title */}
                <motion.div variants={fadeSlideUp} className="md:col-span-5">
                    <h2 className="text-3xl md:text-5xl">Hi, I'm Chandra Prakash.</h2>
                </motion.div>

                {/* Paragraph (lines animated separately) */}
                <motion.div
                    className="md:col-span-7 text-sm md:text-lg flex flex-col gap-2"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.2 } } // stagger paragraph lines
                    }}
                >
                    {paragraphLines.map((line, index) => (
                        <motion.p key={index} variants={fadeSlideUp}>
                            {line}
                        </motion.p>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
