import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaGitAlt, FaDatabase, FaLinux, FaCode, FaNetworkWired, FaServer } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNextdotjs, SiExpress, SiTailwindcss, SiTypescript, SiPostman, SiFirebase, SiHtml5, SiCss3 } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <FaCode className="text-purple-500" />,
            skills: [
                { name: "Java", icon: <FaJava /> },
                { name: "Python", icon: <FaPython /> },
                { name: "C", icon: <span className="font-bold font-mono">C</span> },
                { name: "SQL", icon: <FaDatabase /> },
                { name: "JavaScript", icon: <span className="font-bold font-mono">JS</span> },
                { name: "TypeScript", icon: <SiTypescript /> }
            ]
        },
        {
            title: "Web & Frameworks",
            icon: <FaReact className="text-blue-400" />,
            skills: [
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "React.js", icon: <FaReact /> },
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: <SiCss3 /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> }
            ]
        },
        {
            title: "Databases",
            icon: <FaDatabase className="text-green-400" />,
            skills: [
                { name: "MySQL", icon: <SiMysql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Firebase", icon: <SiFirebase /> }
            ]
        },
        {
            title: "Tools & Cloud",
            icon: <FaAws className="text-orange-400" />,
            skills: [
                { name: "AWS (Basics)", icon: <FaAws /> },
                { name: "Git/GitHub", icon: <FaGitAlt /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "VS Code", icon: <FaCode /> },
                { name: "Linux", icon: <FaLinux /> }
            ]
        },
        {
            title: "Core Concepts",
            icon: <FaNetworkWired className="text-pink-400" />,
            skills: [
                { name: "OOP", icon: <span className="font-mono">{ }</span> },
                { name: "DSA", icon: <span className="font-mono">&lt;/&gt;</span> },
                { name: "System Design", icon: <FaServer /> },
                { name: "DBMS", icon: <FaDatabase /> },
                { name: "Computer Networks", icon: <FaNetworkWired /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
                        <span className="text-purple-500">03.</span> Skills & Stack
                    </h2>
                    <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-3xl p-3 bg-white/5 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white font-mono tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded-lg text-gray-300 text-sm border border-white/5 hover:text-white hover:border-white/20 transition-all cursor-default"
                                    >
                                        <span className="text-purple-400">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
