import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, smoothScrollTo }) => {
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
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4'
                        : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a
                        href="#home"
                        className="text-2xl font-bold font-mono tracking-tighter border-2 border-white px-2 py-1 hover:bg-white hover:text-black transition-all"
                    >
                        UB.
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        smoothScrollTo(item.toLowerCase());
                                    }}
                                    className={`text-sm font-mono transition-colors duration-300 ${activeSection === item.toLowerCase()
                                            ? 'text-white border-b border-white'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <span className="text-purple-500 mr-1">0{index + 1}.</span> {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none z-50"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black transition-all duration-500 md:hidden flex items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col space-y-8 text-center">
                    {navItems.map((item, index) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    smoothScrollTo(item.toLowerCase());
                                }}
                                className={`text-2xl font-mono font-bold transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                <span className="text-purple-500 text-sm block mb-1">0{index + 1}.</span>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
