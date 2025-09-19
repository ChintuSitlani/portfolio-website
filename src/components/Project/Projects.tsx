import HeadingWithSpinningSVG from "../Heading/HeadingWithSpinningSVG";
import FadeLine from "../Line/FadedLine";
import { motion, AnimatePresence } from "framer-motion";
import { fadeSlideUp } from "../../utils/animation";
import { useInViewFade } from "../../utils/useInViewFade";
import ProjectTitle from "./ProjectTitle";
import { useState } from "react";

export default function Project() {
    const projects = [
        {
            name: "E-commerce",
            tech: ["Angular", "ExpressJS", "MongoDB"],
            link: "https://e-commerce-six-ecru-38.vercel.app/buyer-home",
            images: [
                "public/e-commerceapp/E-commerce_buyer-home.webp",
                "public/e-commerceapp/E-commerce_product-detail-page.webp",
                "public/e-commerceapp/E-commerce_search-page.webp"
            ]
        },
        {
            name: "Task Board",
            tech: ["NextJS", "Tailwind", "JWT Auth"],
            link: "https://taskboard-app-five.vercel.app",
            images: [
                "public/taskboardapp/taskboard-dashboard.webp",
                "public/taskboardapp/taskboard-board.webp"
            ]
        },
        {
            name: "Paytm Clone",
            tech: ["React", "Tailwind", "Render"],
            link: "https://github/chintu-sitlani/paytm-clone",
            images: [""]

        },
    ];

    return (
        <div className="m-4 md:m-8">
            {/* Heading */}
            <div className="mb-10">
                <HeadingWithSpinningSVG headingName="PROJECTS" />
            </div>

            {/* Projects */}
            {projects.map((project, projectIndex) => {
                const { ref, inView } = useInViewFade(0.3);
                const [isHovered, setIsHovered] = useState(false);

                return (
                    <div key={projectIndex}>
                        <motion.div
                            key={projectIndex}
                            ref={ref}
                            variants={fadeSlideUp} //animate 
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className="flex flex-col md:gap-10"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div className="flex gap-2 md:gap-5 text-gray-300">
                                    {/* Serial Number */}
                                    <div className="text-sm md:text-lg font-['Anton'] text-gray-400">
                                        _0{projectIndex + 1}.
                                    </div>

                                    {/* Project Details */}
                                    <div>
                                        {/* Name */}
                                        <ProjectTitle project={project} isHovered={isHovered} />
                                        {/* Preview Image (desktop only) */}
                                        <AnimatePresence>
                                            {isHovered && project.images && project.images.length > 0 && (
                                                <motion.img
                                                    key="preview"
                                                    src={project.images[0]} // show only the first image
                                                    alt={project.name}
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 50 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="hidden md:block fixed right-10 top-1/5 w-96 rounded-lg shadow-lg z-50"
                                                />
                                            )}
                                        </AnimatePresence>
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-3 mt-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <div
                                                    key={techIndex}
                                                    className="flex text-gray-400 gap-2 items-center text-xs"
                                                >
                                                    <span>{tech}</span>
                                                    {techIndex < project.tech.length - 1 && (
                                                        <span className="inline-block size-2 rounded-full bg-gray-900"></span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        <FadeLine opacity={0.11} thickness="1.2px" />
                    </div>
                );
            })}
        </div>
    );
}
