import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaDownload } from 'react-icons/fa';

const About = () => {
    const containerRef = useRef(null);

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

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-text', {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono tracking-tight">
                        About Me
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto about-text">
                    <div className="space-y-8 text-gray-300 text-xl leading-loose font-light text-center mb-24">
                        <p>
                            Hello! I'm <span className="text-white font-medium">Ujjawal Bhardwaj</span>, a results-driven Computer Science Engineering student based in Saharanpur, Uttar Pradesh. My interest in software development started when I decided to automate simple tasks, which spiraled into a passion for building scalable solutions.
                        </p>
                        <p>
                            I specialize in <span className="text-white font-medium">Full Stack Development</span> and have a growing interest in <span className="text-white font-medium">MLOps</span>. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for aesthetics to create beautiful products.
                        </p>
                        <p>
                            Currently, I'm focused on building accessible, human-centered products and deepening my understanding of cloud-based architectures and system design.
                        </p>

                        <div className="pt-8 flex justify-center gap-12 font-mono text-sm text-gray-400">
                            <div className="text-center">
                                <span className="block text-white text-4xl font-bold mb-2">3+</span>
                                Major Projects
                            </div>
                            <div className="text-center">
                                <span className="block text-white text-4xl font-bold mb-2">6+</span>
                                Certifications
                            </div>
                            <div className="text-center">
                                <span className="block text-white text-4xl font-bold mb-2">2027</span>
                                Graduation
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <a
                                href={require("../assets/UJJAWAL_RESUME.pdf")}
                                download="Ujjawal_Bhardwaj_Resume.pdf"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                            >
                                <FaDownload />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="mt-20">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center font-mono">Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certs.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="relative group bg-white/5 border border-white/10 p-6 rounded-xl overflow-hidden hover:bg-white/10 transition-all backdrop-blur-sm"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <div className="text-6xl text-white">{cert.icon}</div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-2xl text-white mb-4 border border-white/10">
                                            {cert.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                                            {cert.title}
                                        </h3>
                                        <div className="flex justify-between items-center text-sm text-gray-400 font-mono">
                                            <span>{cert.issuer}</span>
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
