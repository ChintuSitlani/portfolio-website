import { motion } from "framer-motion";

export default function OpenLinkIcon({ isHovered }: { isHovered: boolean }) {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Box */}
            <motion.path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Arrow line */}
            <motion.path
                d="M10 14 21 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: isHovered ? 0.5 : 0 }}
            />

            {/* Arrow curb */}
            <motion.path
                d="M15 3h6v6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: isHovered ? 1 : 0 }}
            />
        </motion.svg>
    );
}
