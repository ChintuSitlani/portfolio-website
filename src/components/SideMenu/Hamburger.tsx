import  { useState } from "react";
import { motion } from "framer-motion";

interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export default function HamburgerButton({ isOpen, setIsOpen }: HamburgerButtonProps){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed top-4 right-4 z-50">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="p-2 rounded-lg bg-[#000000] text-white focus:outline-none flex items-center justify-center"
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000000",
                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.9)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <motion.span
                        initial={false}
                        animate={
                            isOpen
                                ? { rotate: 45, y: 0 }
                                : isHovered
                                    ? { rotate: 20, x: 2 }
                                    : { rotate: 0, y: 0 }
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute block w-6 h-0.5 bg-white rounded"
                    />
                    <motion.span
                        initial={false}
                        animate={
                            isOpen
                                ? { rotate: -45, y: 0 }
                                : isHovered
                                    ? { rotate: -20, x: 2 }
                                    : { rotate: 0, y: 10 }
                        }
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute block w-6 h-0.5 bg-white rounded"
                    />
                </div>
            </motion.button>
        </div>
    );
}


