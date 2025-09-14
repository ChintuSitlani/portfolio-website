import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BannerArrow() {
    const [showArrow, setShowArrow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const interval = setInterval(() => {
            setShowArrow(true);
            // hide arrow after 4s of visibility
            setTimeout(() => setShowArrow(false), 2000);
        }, 5000); // every 5s

        return () => {
            window.removeEventListener("resize", checkMobile);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {showArrow && (
                <motion.div
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={isMobile ? "280" : "376"}
                        height={isMobile ? "83" : "111"}
                        viewBox="0 0 376 111"
                        fill="rgba(44,44,44,0.2)"
                        // 👇 Move whole arrow downward + fade
                        animate={{
                            y: isMobile ? [10, 80] : [20, 150],
                            opacity: [1, 0.8, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        {/* Left Side (builds in) */}
                        <motion.path
                            d="M1 1V39.9286L188 110V70.6822L1 1Z"
                            stroke="#2C2C2C"
                            strokeWidth="2"
                            initial={{ strokeDasharray: 477.505, strokeDashoffset: 477 }}
                            animate={{ strokeDashoffset: 0, opacity: [0, 1] }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                        />
                        {/* Right Side (builds in with delay) */}
                        <motion.path
                            d="M375 1V39.9286L188 110V70.6822L375 1Z"
                            stroke="#2C2C2C"
                            strokeWidth="2"
                            initial={{ strokeDasharray: 477.505, strokeDashoffset: 477 }}
                            animate={{ strokeDashoffset: 0, opacity: [0, 1] }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                delay: 0.1, // slight stagger
                            }}
                        />
                    </motion.svg>
                </motion.div>
            )}
        </>
    );
}