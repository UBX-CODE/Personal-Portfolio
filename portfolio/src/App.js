import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ReactLenis } from '@studio-freight/react-lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { BackgroundGradientAnimation } from './components/ui/BackgroundGradientAnimation';

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

  // Handle scroll to update active nav link using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ReactLenis root>
      <div className="min-h-screen relative bg-black text-white selection:bg-purple-500 selection:text-white font-sans">
        <LoadingScreen />

        <BackgroundGradientAnimation containerClassName="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 z-0"></div>
        </BackgroundGradientAnimation>

        <div className="relative z-10">
          <Navbar
            activeSection={activeSection}
            smoothScrollTo={smoothScrollTo}
          />

          <main>
            <Hero smoothScrollTo={smoothScrollTo} />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}