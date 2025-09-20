import { motion } from "framer-motion";
import OpenLinkIcon from "./OpenLinkSVG";

type projectTitleProps = {
    project: {
        name: string;
        images: string[];
        link: string;
        tech: string[];
    };
    isHovered: boolean;
};

export default function ProjectTitle({ project, isHovered }: projectTitleProps) {
    return (
        <div className="flex items-center gap-2 relative">
            {/* Project Name with sliding color animation */}
            <motion.div
                className="relative text-4xl md:text-5xl font-['Anton'] text-gray-300 overflow-hidden inline-block"
                animate={{
                    "--gradient-size": isHovered ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, ease: "linear" }}
                style={{ "--gradient-size": "0%" } as React.CSSProperties}
            >
                {project.name}
                {/* Green overlay clipped to text */}
                <span
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-green-500 bg-no-repeat bg-clip-text text-transparent pointer-events-none inline-block whitespace-nowrap"
                    style={{
                        backgroundSize: "var(--gradient-size) 100%",
                        backgroundPosition: "left",
                    }}
                >
                    {project.name}
                </span>
            </motion.div>

            {/* Open link icon */}
            <OpenLinkIcon isHovered={isHovered} />
        </div>
    );
}
