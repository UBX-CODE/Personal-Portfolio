import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
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

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Apply theme class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

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

  const gradientProps = theme === 'dark' ? {
    gradientBackgroundStart: "rgb(0, 0, 0)",
    gradientBackgroundEnd: "rgb(10, 10, 10)",
    firstColor: "50, 50, 50",
    secondColor: "80, 80, 80",
    thirdColor: "30, 30, 30",
    fourthColor: "100, 100, 100",
    fifthColor: "60, 60, 60",
    pointerColor: "140, 100, 255"
  } : {
    gradientBackgroundStart: "rgb(255, 255, 255)",
    gradientBackgroundEnd: "rgb(240, 240, 255)",
    firstColor: "100, 180, 255",
    secondColor: "255, 180, 255",
    thirdColor: "180, 255, 255",
    fourthColor: "255, 200, 200",
    fifthColor: "255, 255, 180",
    pointerColor: "100, 150, 255"
  };

  return (
    <ReactLenis root>
      <div className={`min-h-screen relative transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'} selection:bg-purple-500 selection:text-white font-sans`}>
        <LoadingScreen />

        <BackgroundGradientAnimation
          containerClassName="fixed inset-0 z-0 pointer-events-none"
          {...gradientProps}
        >
          <div className="absolute inset-0 z-0"></div>
        </BackgroundGradientAnimation>

        <div className="relative z-10">
          <Navbar
            activeSection={activeSection}
            smoothScrollTo={smoothScrollTo}
            theme={theme}
            toggleTheme={toggleTheme}
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