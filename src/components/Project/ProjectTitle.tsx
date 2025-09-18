import { useState } from "react";
import { motion } from "framer-motion";
import OpenLinkIcon from "./OpenLinkSVG";

export default function ProjectTitle({ project }: { project: any }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Name with hover animation */}
            <motion.div
                className="relative text-5xl font-['Anton'] text-gray-300 overflow-hidden inline-block"
                whileHover={{
                    "--gradient-size": "100%",
                    transition: { duration: 0.5, ease: "linear" },
                }}
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
            {/* Open link icon (only animates on hover) */}
            <OpenLinkIcon isHovered={isHovered} />
        </div>
    );
}
