import HeadingWithSpinningSVG from "../Heading/HeadingWithSpinningSVG";
import FadeLine from "../Line/FadedLine";
import { motion } from "framer-motion";
import { fadeSlideUp } from "../../utils/animation";
import { useInViewFade } from "../../utils/useInViewFade";
import ProjectTitle from "./ProjectTitle";

export default function Project() {
    const projects = [
        {
            name: "E-commerce Website",
            tech: ["Angular 19", "ExpressJS", "MongoDB"],
            link: "https://e-commerce-six-ecru-38.vercel.app/buyer-home",
            images: ["public/e-commerceapp/E-commerce_buyer-home.png", "public/e-commerceapp/E-commerce_product-detail-page.png", "public/e-commerceapp/E-commerce_search-page.png"]
        },
        {
            name: "Task Board App",
            tech: ["NextJS", "Tailwind", "JWT Auth"],
            link: "https://taskboard-app-five.vercel.app",
            image: ["public/taskboardapp/taskboard-dashboard.png", "public/taskboardapp/taskboard-board.png"]
        },
        {
            name: "Paytm Clone App",
            tech: ["React", "Tailwind", "Render"],
            link: "https://github/chintu-sitlani/paytm-clone",
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
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex gap-2 md:gap-5 text-gray-300">
                                    {/* Serial Number */}
                                    <div className="text-lg font-['Anton'] text-gray-400">
                                        _0{projectIndex + 1}.
                                    </div>

                                    {/* Project Details */}
                                    <div>
                                        {/* Name */}
                                    <ProjectTitle project={project}/>
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
