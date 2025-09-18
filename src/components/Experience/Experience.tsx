import HeadingWithSpinningSVG from "../Heading/HeadingWithSpinningSVG";
import { motion } from "framer-motion";
import { useInViewFade } from "../../utils/useInViewFade";
import { fadeSlideUp } from "../../utils/animation";

export default function Experience() {
    const experiences = [
        {
            company: "Itos Pvt. Ltd.",
            position: "Software Developer",
            from: "June, 2022",
            to: "Nov, 2023"
        }
    ];

    // calculate duration
    const calculateDuration = (from: string, to: string) => {
        const parseDate = (dateStr: string) => {
            if (dateStr.toLowerCase() === "present") {
                return new Date(); // today's date
            }
            const [month, year] = dateStr.replace(",", "").split(" ");
            return new Date(`${month} 1, ${year}`);
        };

        const start = parseDate(from);
        const end = parseDate(to);

        const months =
            (end.getFullYear() - start.getFullYear()) * 12 +
            (end.getMonth() - start.getMonth());

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        let result = "";
        if (years > 0) result += `${years} year${years > 1 ? "s" : ""} `;
        if (remainingMonths > 0)
            result += `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
        return result.trim() || "Less than a month";
    };

    return (
        <div className="m-4 md:m-8">
            {/* heading */}
            <div>
                <HeadingWithSpinningSVG headingName="MY EXPERIENCE" />
            </div>

            {/* experience : position and companies */}
            {experiences.map((exp, expIndex) => {
                const { ref, inView } = useInViewFade(0.3);
                return (
                    <motion.div
                        key={expIndex}
                        ref={ref}
                        variants={fadeSlideUp} //animate 
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="grid gap-10 mt-12"
                    >
                        <div>
                            <p className="text-base md:text-xl text-gray-400">{exp.company}</p>

                            <h1 className="font-['Anton'] text-grey-300 text-3xl md:text-5xl mt-3.5 mb-2.5">
                                {exp.position}
                            </h1>

                            <p className="text-base md:text-lg text-gray-400">

                                <span>{exp.from} </span> - <span>{exp.to}</span>{" "}
                                <span className="italic text-sm text-gray-400">
                                    ({calculateDuration(exp.from, exp.to)})
                                </span>

                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
