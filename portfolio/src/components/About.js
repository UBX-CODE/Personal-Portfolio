import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaCode, FaLaptopCode, FaEye } from 'react-icons/fa';
import resumePdf from '../assets/UJJAWAL_RESUME.pdf';
import mlCert from '../assets/Coursera Machine Learning with Python.pdf';
import genAiCert from '../assets/Introduction to Generative AI Learning Path.pdf';
import uxCert from '../assets/Google UX Design.pdf';
import oracleCert from '../assets/ProfessionalCertificationDigitalCredentials20250629-28-mj4tbw.pdf';
import awsCert from '../assets/infosis aws .pdf';
import redHatCert from '../assets/eCertificate.pdf';

const About = () => {
    const containerRef = useRef(null);

    const stats = [
        {
            label: "Projects",
            value: "10+",
            icon: <FaCode />,
            color: "text-purple-600 dark:text-purple-400"
        },
        {
            label: "Certificates",
            value: "6+",
            icon: <FaCertificate />,
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            label: "Experience",
            value: "2+ Yrs",
            icon: <FaLaptopCode />,
            color: "text-pink-600 dark:text-pink-400"
        }
    ];

    const certs = [
        {
            title: "Machine Learning with Python",
            issuer: "IBM",
            date: "2024",
            icon: <FaAward />,
            link: mlCert
        },
        {
            title: "Certified Generative AI Professional",
            issuer: "Oracle",
            date: "2024",
            icon: <FaCertificate />,
            link: oracleCert
        },
        {
            title: "UX Design",
            issuer: "Google",
            date: "2023",
            icon: <FaAward />,
            link: uxCert
        },
        {
            title: "Red Hat Certified System Administrator",
            issuer: "Red Hat",
            date: "2023",
            icon: <FaCertificate />,
            link: redHatCert
        },
        {
            title: "Generative AI Learning Path",
            issuer: "Google Cloud",
            date: "2024",
            icon: <FaAward />,
            link: genAiCert
        },
        {
            title: "AWS Certified Developer",
            issuer: "Infosys",
            date: "2024",
            icon: <FaCertificate />,
            link: awsCert
        }
    ];

    return (
        <section id="about" ref={containerRef} className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 relative z-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-tight text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-black/20 dark:bg-white/20 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content - Clean & Centered */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-8"
                    >
                        <div className="space-y-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                            <p>
                                Hello! I'm <span className="text-gray-900 dark:text-white font-medium">Ujjawal Bhardwaj</span>, a results-driven <span className="text-gray-900 dark:text-white font-medium">Computer Science Engineering student</span> passionate about building high-quality, scalable software solutions.
                            </p>
                            <p>
                                I specialize in <span className="text-gray-900 dark:text-white font-mono">Full Stack Development</span>, leveraging modern technologies like
                                <span className="text-gray-900 dark:text-white"> Python, JavaScript, React.js, Node.js, and MongoDB</span>.
                                My journey in tech is fueled by a curiosity to understand how things work and a drive to create impactful digital experiences.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                                    <div className={`text-3xl mb-3 flex justify-center ${stat.color}`}>{stat.icon}</div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 pb-16">
                            <a
                                href={resumePdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-all hover:scale-105"
                            >
                                <FaEye /> <span>View Resume</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Section */}
                <div className="mt-16 border-t border-black/10 dark:border-white/10 pt-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center font-mono"
                    >
                        Certifications & Awards
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certs.map((cert, idx) => (
                            <motion.a
                                key={idx}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 rounded-2xl overflow-hidden hover:bg-black/10 dark:hover:bg-white/10 transition-all backdrop-blur-sm block cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                                    <div className="text-8xl text-gray-900 dark:text-white">{cert.icon}</div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center text-2xl text-gray-900 dark:text-white mb-6 border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                                        {cert.title}
                                    </h3>
                                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 font-mono border-t border-black/5 dark:border-white/5 pt-4 mt-4">
                                        <span className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-black/50 dark:bg-white/50"></span>
                                            {cert.issuer}
                                        </span>
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
