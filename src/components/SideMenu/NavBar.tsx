import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "./Hamburger";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button */}
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Side Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[36%] bg-[#3b3b3b] text-white shadow-lg z-40 md:pt-20 md:px-16"
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* SOCIAL + MENU */}
                            <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
                                {/* SOCIAL */}
                                <div className="mb-8 md:mb-0">
                                    <h3 className="text-lg text-gray-300 mb-2">SOCIAL</h3>
                                    <ul className="space-y-3 md:pt-4 md:text-lg">
                                        <li><a href="https://github.com/ChintuSitlani" className="hover:text-green-400">Github</a></li>
                                        <li><a href="https://www.linkedin.com/in/chandra-prakash-sitlani-b9a11536a/" className="hover:text-green-400">Linkedin</a></li>
                                        <li>
                                            <a
                                                href="https://wa.me/918770276958"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-green-400"
                                            >
                                                WhatsApp
                                            </a>
                                        </li>

                                        {/* <li><a href="#" className="hover:text-green-400">Old Version</a></li> */}
                                    </ul>
                                </div>

                                {/* MENU */}
                                <div>
                                    <h3 className="text-lg text-gray-300 mb-2">MENU</h3>
                                    <ul className="space-y-3 md:pt-4 md:text-lg">
                                        <li>
                                            <a
                                                href="#home"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#about"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-blue-400"></span> About Me
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#experience"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-cyan-400"></span> Experience
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#projects"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-purple-400"></span> Projects
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="mt-auto text-sm md:text-lg">
                                <p className="text-gray-300 mb-1">GET IN TOUCH</p>
                                <a
                                    href="mailto:chintusitlani09@gmail.com"
                                    className="md:mb-4"
                                >
                                    chintusitlani09@gmail.com
                                </a>
                            </div>

                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
