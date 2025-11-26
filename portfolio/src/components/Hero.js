import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ smoothScrollTo }) => {
    const containerRef = useRef(null);

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            <div className="container mx-auto px-6 z-10">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-purple-400 font-mono mb-5 ml-1"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight"
                    >
                        Ujjawal Bhardwaj.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-4xl md:text-7xl font-bold text-gray-400 mb-8 tracking-tight"
                    >
                        I build things for the web.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
                    >
                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <button
                            onClick={() => smoothScrollTo('projects')}
                            className="px-8 py-4 border border-purple-500 text-purple-500 font-mono rounded hover:bg-purple-500/10 transition-all duration-300"
                        >
                            Check out my work!
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
