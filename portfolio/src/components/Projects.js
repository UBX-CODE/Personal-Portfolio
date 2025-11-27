import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const containerRef = useRef(null);
    const projectsRef = useRef([]);

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
            image: require('../assets/ss.png')
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            projectsRef.current.forEach((project, index) => {
                const image = project.querySelector('.project-image');
                const content = project.querySelector('.project-content');

                if (image) {
                    gsap.fromTo(image,
                        { y: -50, scale: 1.1 },
                        {
                            y: 50,
                            scale: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: project,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }

                if (content) {
                    gsap.from(content, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: project,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: 1
                        }
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !projectsRef.current.includes(el)) {
            projectsRef.current.push(el);
        }
    };

    return (
        <section id="projects" ref={containerRef} className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-32 text-center">
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 font-mono tracking-tighter">
                        Selected Works
                    </h2>
                </div>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}
                        >
                            {/* Project Image Card */}
                            <div className="lg:w-3/5 w-full relative group perspective-1000">
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-[500px] w-full bg-black/50 backdrop-blur-sm">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image w-full h-[120%] object-cover -mt-[10%]"
                                    />

                                    {/* Tech Stack Overlay on Image (Mobile) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 lg:hidden">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-mono bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/90 border border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info (Desktop) */}
                            <div className="lg:w-2/5 w-full project-content hidden lg:block">
                                <span className="text-purple-400 font-mono text-sm mb-4 block tracking-wider">0{index + 1} / Featured Project</span>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                    {project.title}
                                </h3>

                                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl mb-8 hover:bg-white/10 transition-colors duration-300 relative z-20">
                                    <p className="text-gray-300 leading-relaxed text-lg font-light">
                                        {project.desc}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-3 mb-10 text-sm font-mono text-gray-400">
                                    {project.tech.map((t, i) => (
                                        <li key={i} className="bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-purple-500/50 transition-colors">
                                            {t}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex gap-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-all group"
                                    >
                                        <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                                        <span className="font-mono text-sm">Source</span>
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-all group"
                                    >
                                        <FaExternalLinkAlt className="text-xl group-hover:scale-110 transition-transform" />
                                        <span className="font-mono text-sm">Live Demo</span>
                                    </a>
                                </div>
                            </div>

                            {/* Mobile Content (Description & Links) */}
                            <div className="w-full lg:hidden project-content">
                                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-xl mb-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                                <div className="flex gap-6 justify-center">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
                                        <FaGithub className="text-2xl" />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
                                        <FaExternalLinkAlt className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
