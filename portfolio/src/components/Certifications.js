import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
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
        <section id="certifications" className="py-24 relative z-10 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
                        <span className="text-gray-500">04.</span> Certifications
                    </h2>
                    <div className="h-1 w-20 bg-white"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative group bg-white/5 border border-white/10 p-6 rounded-xl overflow-hidden hover:bg-white/10 transition-all"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="text-6xl text-white">{cert.icon}</div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-2xl text-white mb-4 border border-white/10">
                                    {cert.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
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
        </section>
    );
};

export default Certifications;
