import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarFieldBackground from './components/StarFieldBackground';
import LoadingScreen from './components/LoadingScreen';

import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 0 },
        ease: "power4.inOut"
      });
    }
  };

  // Handle scroll to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-black text-white selection:bg-purple-500 selection:text-white font-sans">
      <LoadingScreen />
      <StarFieldBackground />

      <Navbar
        activeSection={activeSection}
        smoothScrollTo={smoothScrollTo}
      />

      <main className="relative z-10">
        <Hero smoothScrollTo={smoothScrollTo} />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}