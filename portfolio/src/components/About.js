import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);

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
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
                        <span className="text-gray-500">02.</span> About Me
                    </h2>
                    <div className="h-1 w-20 bg-white"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column: Image/Visual */}
                    <div className="lg:w-1/3">
                        <div className="relative group">
                            <div className="absolute inset-0 border-2 border-white translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="relative rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                <img
                                    src={require('../assets/2.jpg')}
                                    alt="Ujjawal Bhardwaj"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-purple-500/20 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text */}
                    <div className="lg:w-2/3 about-text">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                Hello! I'm <span className="text-white font-medium">Ujjawal Bhardwaj</span>, a results-driven Computer Science Engineering student based in Saharanpur, Uttar Pradesh. My interest in software development started when I decided to automate simple tasks, which spiraled into a passion for building scalable solutions.
                            </p>
                            <p>
                                I specialize in <span className="text-white font-medium">Full Stack Development</span> and have a growing interest in <span className="text-white font-medium">MLOps</span>. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for aesthetics to create beautiful products.
                            </p>
                            <p>
                                Currently, I'm focused on building accessible, human-centered products and deepening my understanding of cloud-based architectures and system design.
                            </p>

                            <div className="pt-8 flex gap-8 font-mono text-sm text-gray-400">
                                <div>
                                    <span className="block text-white text-3xl font-bold mb-1">3+</span>
                                    Major Projects
                                </div>
                                <div>
                                    <span className="block text-white text-3xl font-bold mb-1">6+</span>
                                    Certifications
                                </div>
                                <div>
                                    <span className="block text-white text-3xl font-bold mb-1">2027</span>
                                    Graduation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
