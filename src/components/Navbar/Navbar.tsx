import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            {/* Hamburger Button */}
            <div className="fixed top-4 right-4 z-50">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="p-2 rounded-lg bg-[#000000] text-white focus:outline-none flex items-center justify-center"
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "#000000",
                        boxShadow: "0 0 8px rgba(0, 0, 0, 0.9)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        {/* Top Line */}
                        <motion.span
                            initial={false}
                            animate={
                                isOpen
                                    ? { rotate: 45, y: 0 }
                                    : isHovered
                                        ? { rotate: 12, x: 0 }
                                        : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute block w-8 h-0.5 bg-white rounded"
                        />

                        {/* Bottom Line */}
                        <motion.span
                            initial={false}
                            animate={
                                isOpen
                                    ? { rotate: -45, y: 0 }
                                    : isHovered
                                        ? { rotate: -12, x: 0 }
                                        : { rotate: 0, y: 10 }
                            }
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute block w-8 h-0.5 bg-white rounded"
                        />
                    </div>
                </motion.button>
            </div>

            {/* Side Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[36%] bg-[#141414] text-white shadow-lg  z-40"
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* SOCIAL + MENU in one row for desktop */}
                            <div className="flex flex-col md:flex-row md:justify-between md:gap-10 md:p-14">
                                {/* SOCIAL */}
                                <div className="mb-8 md:mb-0">
                                    <h3 className="text-sm md:text-lg text-gray-300 mb-6">SOCIAL</h3>
                                    <ul className="space-y-3">
                                        <li><a href="#" className="hover:text-green-400">Github</a></li>
                                        <li><a href="#" className="hover:text-green-400">Linkedin</a></li>
                                        <li><a href="#" className="hover:text-green-400">Facebook</a></li>
                                        <li><a href="#" className="hover:text-green-400">Old Version</a></li>
                                    </ul>
                                </div>

                                {/* MENU */}
                                <div>
                                    <h3 className="text-sm md:text-lg text-gray-300 mb-6">MENU</h3>
                                    <ul className="space-y-3">
                                        <li><a href="#" className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> Home</a></li>
                                        <li><a href="#" className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span> About Me</a></li>
                                        <li><a href="#" className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400"></span> Experience</a></li>
                                        <li><a href="#" className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Projects</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="text-sm md:text-lg mt-auto md:p-14">
                                <p className="text-gray-300 mb-1">GET IN TOUCH</p>
                                <p className="">chintusitlani09@gmail.com</p>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
