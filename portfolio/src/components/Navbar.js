import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ activeSection, smoothScrollTo, theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
                <div className={`pointer-events-auto transition-all duration-300 ${isScrolled ? 'bg-black/50 dark:bg-black/50 bg-white/50 backdrop-blur-xl border border-white/10 shadow-lg rounded-full px-6 py-3' : 'bg-transparent px-0 py-4'}`}>
                    <div className="flex items-center gap-8">
                        <a
                            href="#home"
                            className={`text-xl font-bold font-mono tracking-tighter transition-colors ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white/90'}`}
                        >
                            UB.
                        </a>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => smoothScrollTo(item.toLowerCase())}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeSection === item.toLowerCase()
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                    >
                                        {activeSection === item.toLowerCase() && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden md:block pointer-events-auto">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-4 md:hidden">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-900 dark:text-white focus:outline-none p-2"
                            >
                                <div className="w-5 h-5 flex flex-col justify-center space-y-1.5">
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 bg-white/90 dark:bg-black/60 md:hidden flex items-center justify-center"
                    >
                        <motion.ul
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="flex flex-col space-y-6 text-center"
                        >
                            {navItems.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            smoothScrollTo(item.toLowerCase());
                                        }}
                                        className={`text-3xl font-bold transition-colors ${activeSection === item.toLowerCase() ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
