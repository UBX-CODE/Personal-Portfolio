import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaDownload, FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
    const containerRef = useRef(null);

    const stats = [
        {
            label: "Major Projects",
            value: "3+",
            icon: <FaCode className="text-purple-400" />,
            desc: "Full-stack applications"
        },
        {
            label: "Certifications",
            value: "6+",
            icon: <FaCertificate className="text-blue-400" />,
            desc: "Industry recognized"
        },
        {
            label: "Graduation",
            value: "2027",
            icon: <FaGraduationCap className="text-pink-400" />,
            desc: "B.Tech CSE, Arya College Of Engineeering and IT"
        }
    ];

    const certs = [
        {
            title: "Machine Learning with Python",
            issuer: "IBM",
            date: "2024",
            icon: <FaAward />
        },
        {
            title: "Certified Generative AI Professional",
            issuer: "Oracle",
            date: "2024",
            icon: <FaCertificate />
        },
        {
            title: "UX Design",
            issuer: "Google",
            date: "2023",
            icon: <FaAward />
        },
        {
            title: "Red Hat Certified System Administrator",
            issuer: "Red Hat",
            date: "2023",
            icon: <FaCertificate />
        },
        {
            title: "Generative AI Learning Path",
            issuer: "Google Cloud",
            date: "2024",
            icon: <FaAward />
        },
        {
            title: "AWS Certified Developer",
            issuer: "Infosys",
            date: "2024",
            icon: <FaCertificate />
        }
    ];

    return (
        <section id="about" ref={containerRef} className="py-32 relative z-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-mono tracking-tighter">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-light leading-relaxed tracking-wide"
                    >
                        <p className="first-letter:font-bold first-letter:text-purple-600 dark:first-letter:text-purple-400 first-letter:float-left">
                            Hello! I'm <span className="text-gray-900 dark:text-white font-semibold">Ujjawal Bhardwaj</span>, Results-driven Computer Science Engineering student passionate about building high-quality, scalable software solutions. Skilled in developing full-stack applications using Python, JavaScript, React.js, Node.js and MongoDB. Recognized for problem-solving abilities, innovation, and a strong foundation in object-oriented programming and cloud-based architectures.
                        </p>
                        <div className="pt-6">
                            <a
                                href={require("../assets/UJJAWAL_RESUME.pdf")}
                                download="Ujjawal_Bhardwaj_Resume.pdf"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 dark:bg-white/5 hover:bg-white/30 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 hover:border-purple-500/50 text-gray-900 dark:text-white rounded-full font-medium transition-all hover:scale-105 group"
                            >
                                <FaDownload className="group-hover:animate-bounce" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/50 dark:hover:bg-white/10 transition-colors group shadow-lg dark:shadow-none">
                                <div className="p-4 bg-white/5 rounded-xl text-3xl group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                    <div className="text-gray-700 dark:text-white font-medium mb-1">{stat.label}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">{stat.desc}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Certifications Grid */}
                <div className="mt-32">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center font-mono"
                    >
                        Certifications & Awards
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl overflow-hidden hover:bg-white/50 dark:hover:bg-white/10 transition-all backdrop-blur-2xl shadow-lg dark:shadow-none"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                                    <div className="text-8xl text-white">{cert.icon}</div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-2xl text-white mb-6 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 font-mono border-t border-white/10 dark:border-white/5 pt-4 mt-4">
                                        <span className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                            {cert.issuer}
                                        </span>
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
