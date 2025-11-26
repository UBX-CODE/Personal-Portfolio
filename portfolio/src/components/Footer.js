import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10 relative z-10">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex gap-6 mb-6">
                    <a
                        href="https://github.com/UBX-CODE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 hover:-translate-y-1 transition-all"
                    >
                        <FaGithub className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ujjawal-bhardwaj-643625372"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 hover:-translate-y-1 transition-all"
                    >
                        <FaLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 hover:-translate-y-1 transition-all"
                    >
                        <FaInstagram className="text-xl" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 hover:-translate-y-1 transition-all"
                    >
                        <FaTwitter className="text-xl" />
                    </a>
                </div>
                <p className="text-gray-500 text-sm font-mono hover:text-purple-500 transition-colors cursor-default">
                    Designed & Built by Ujjawal Bhardwaj
                </p>
            </div>
        </footer>
    );
};

export default Footer;
