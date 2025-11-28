import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                        <span className="text-gray-500">06.</span> Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 p-8 rounded-2xl backdrop-blur-2xl shadow-lg dark:shadow-none">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-mono">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-mono">Email</p>
                                        <a href="mailto:ujjwalsharma1910@gmail.com" className="text-lg font-medium">ujjwalsharma1910@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-mono">Location</p>
                                        <p className="text-lg font-medium">Saharanpur, Uttar Pradesh</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/ujjawal-bhardwaj-643625372"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-900 dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/UBX-CODE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-900 dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full bg-white/20 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500/50 transition-colors resize-none placeholder:text-gray-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
