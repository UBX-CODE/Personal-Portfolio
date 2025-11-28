import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ smoothScrollTo }) => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-purple-400 font-mono mb-4 text-lg"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                    >
                        Ujjawal Bhardwaj.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-400 mb-8 tracking-tight"
                    >
                        I build things for the web.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto"
                    >
                        Full-stack developer crafting agentic AI agents that think, act, and ship value on their own
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <button
                            onClick={() => smoothScrollTo('projects')}
                            className="px-8 py-4 border border-purple-500 text-purple-500 font-mono rounded hover:bg-purple-500/10 transition-all duration-300 mb-10"
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
