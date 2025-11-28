import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
    const containerRef = useRef(null);

    const projects = [
        {
            title: 'Unirank',
            desc: 'A full-stack web app that ranks college students based on their coding and professional achievements by fetching real-time data from platforms like LeetCode using GraphQL.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'GraphQL'],
            link: 'https://github.com/UBX-CODE',
            github: 'https://github.com/UBX-CODE',
            icon: <FaDatabase className="text-4xl text-purple-400" />,
            color: "from-purple-500/20 to-blue-500/20"
        },
        {
            title: 'Student Database',
            desc: 'Designed and implemented a student database system in C using core data structures for efficient data management and retrieval. Optimized for performance and scalability.',
            tech: ['C', 'Data Structures', 'File Handling'],
            link: 'https://github.com/UBX-CODE',
            github: 'https://github.com/UBX-CODE',
            icon: <FaLayerGroup className="text-4xl text-emerald-400" />,
            color: "from-emerald-500/20 to-teal-500/20"
        },
        {
            title: 'Portfolio Website',
            desc: 'Developed an animated, responsive portfolio website using React, Tailwind CSS, and GSAP — blending modern aesthetics with engaging motion effects.',
            tech: ['React', 'Tailwind CSS', 'GSAP'],
            link: 'https://ubxportfolio.netlify.app/#about',
            github: 'https://github.com/UBX-CODE',
            icon: <FaCode className="text-4xl text-pink-400" />,
            color: "from-pink-500/20 to-rose-500/20"
        }
    ];

    return (
        <section id="projects" ref={containerRef} className="py-32 relative z-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-mono tracking-tighter">
                        Selected Works
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A collection of projects that showcase my passion for building scalable, user-centric solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative h-full bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 flex flex-col group-hover:-translate-y-2 shadow-lg dark:shadow-none">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <FaGithub className="text-xl" />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                            <FaExternalLinkAlt className="text-lg" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono bg-white/20 dark:bg-white/5 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-white/10 dark:border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
