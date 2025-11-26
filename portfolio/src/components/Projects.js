import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: 'Unirank',
            desc: 'A full-stack web app that ranks college students based on their coding and professional achievements by fetching real-time data from platforms like LeetCode using GraphQL.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'GraphQL'],
            link: 'https://github.com/UBX-CODE',
            github: 'https://github.com/UBX-CODE',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
        },
        {
            title: 'Student Database',
            desc: 'Designed and implemented a student database system in C using core data structures for efficient data management and retrieval. Optimized for performance and scalability.',
            tech: ['C', 'Data Structures', 'File Handling'],
            link: 'https://github.com/UBX-CODE',
            github: 'https://github.com/UBX-CODE',
            image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
        },
        {
            title: 'Portfolio Website',
            desc: 'Developed an animated, responsive portfolio website using React, Tailwind CSS, and GSAP — blending modern aesthetics with engaging motion effects.',
            tech: ['React', 'Tailwind CSS', 'GSAP'],
            link: 'https://ubxportfolio.netlify.app/#about',
            github: 'https://github.com/UBX-CODE',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80'
        }
    ];

    return (
        <section id="projects" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 font-mono tracking-tighter">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Works</span>
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
                </motion.div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Project Image */}
                            <div className="lg:w-3/5 w-full relative group perspective-1000">
                                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl group-hover:bg-purple-600/30 transition-all duration-500"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="lg:w-2/5 w-full relative z-20">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                                    <span className="text-purple-400 font-mono text-sm mb-2 tracking-wider">Featured Project</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-purple-400 transition-colors cursor-pointer">
                                        {project.title}
                                    </h3>

                                    <div className={`bg-[#112240] p-6 rounded-xl shadow-xl border border-white/5 mb-6 hover:border-purple-500/30 transition-all duration-300 ${index % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} relative z-30`}>
                                        <p className="text-gray-300 leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <ul className={`flex flex-wrap gap-4 mb-8 text-sm font-mono text-gray-400 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                        {project.tech.map((t, i) => (
                                            <li key={i} className="hover:text-purple-400 transition-colors">{t}</li>
                                        ))}
                                    </ul>

                                    <div className="flex gap-6 text-white">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
                                            <FaGithub className="text-2xl" />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 hover:-translate-y-1 transition-all duration-300">
                                            <FaExternalLinkAlt className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 text-center"
                >
                    <a
                        href="https://github.com/UBX-CODE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-purple-500 text-purple-500 font-mono rounded hover:bg-purple-500/10 transition-all duration-300 group"
                    >
                        View Full Project Archive
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
