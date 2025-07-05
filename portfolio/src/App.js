import React, { useState, useEffect, useRef } from 'react';
// import myPhoto from './assets/2.jpg';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);
  
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroNameRef = useRef(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [lightTheme, setLightTheme] = useState(false);
  const [showFullStack, setShowFullStack] = useState(true);
  
  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
  };

  // Handle scroll to animate sections and update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY < window.innerHeight) setActiveSection('home');
      else if (currentScrollY < window.innerHeight * 2) setActiveSection('about');
      else if (currentScrollY < window.innerHeight * 3) setActiveSection('projects');
      else setActiveSection('contact');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple animation hook
  const fadeInUp = (offset = 100) => ({
    style: {
      opacity: scrollY > offset ? 1 : 0,
      transform: `translateY(${scrollY > offset ? '0' : '40px'})`,
      transition: 'all 0.6s ease-out',
    },
  });



  // Mouse move handler for About section
  const handleAboutMouseMove = (e) => {
    const about = document.getElementById('about');
    if (about) {
      const rect = about.getBoundingClientRect();
      setEyePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Generate stars only once
  const starsRef = React.useRef(null);
  if (!starsRef.current) {
    starsRef.current = Array.from({ length: 120 }, () => ({
      moveX: (Math.random() - 0.5) * 20,
      moveY: (Math.random() - 0.5) * 20,
      baseDuration: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      twinkle: Math.random() * 2 + 1,
    }));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullStack((prev) => !prev);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={
      (lightTheme
        ? 'bg-[#F3F0EB] text-gray-900'
        : 'bg-gradient-to-b from-slate-900 via-gray-800 to-zinc-900 text-white')
      + ' min-h-screen relative'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${lightTheme ? 'bg-white/80' : 'bg-black/30'}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MyPortfolio
          </a>
          <div className="flex items-center ml-auto">
            <ul className="hidden md:flex space-x-8 mr-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={e => {
                      e.preventDefault();
                      smoothScrollTo(item.toLowerCase());
                    }}
                    className={`text-sm uppercase tracking-wider hover:text-purple-400 transition-colors duration-300 ${
                      activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        <div className={`${isMenuOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out bg-black/50 md:hidden`}>
          <ul className="flex flex-col space-y-4 px-6 pb-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={e => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    smoothScrollTo(item.toLowerCase());
                  }}
                  className={`block text-lg hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className={
          (lightTheme
            ? 'min-h-screen flex items-stretch pt-20 relative overflow-hidden text-gray-900 bg-[#F3F0EB]'
            : 'min-h-screen flex items-stretch pt-20 relative overflow-hidden bg-slate-900 text-white')
        }
      >
        {/* Left: Original Hero Text */}
        <div className="flex-1 flex flex-col justify-center pl-10 pr-4 z-10" style={{ marginBottom: '5vh' }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                <span className="block">Hello, I'm</span>
                <span
                  ref={heroNameRef}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  Ujjawal Bhardwaj
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 relative h-12 flex items-center gap-2">
                <span className="font-bold" style={{ color: lightTheme ? '#222' : '#e5e7eb' }}>I'm</span>
                <span className="relative inline-block align-middle" style={{ minWidth: 220, height: '1.5em', display: 'flex', alignItems: 'center' }}>
                  <span
                    className={`absolute left-0 top-0 w-full transition-opacity duration-700 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 ${showFullStack ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}
                    style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', lineHeight: '1.5em' }}
                  >
                    MLOps Enthusiast.
                  </span>
                  <span
                    className={`absolute left-0 top-0 w-full transition-opacity duration-700 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 ${showFullStack ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', lineHeight: '1.5em' }}
                  >
                    Full Stack Web Developer.
                  </span>
                </span>
              </p>
              <div className="flex space-x-4 mt-4 mb-8">
                <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  View Projects
                </a>
                <a href="/resume.pdf" download className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  Download CV
                </a>
              </div>
              
              {/* Social Media Buttons */}
              <div className="flex justify-start items-center mt-8 w-full">
                <ul className="flex items-center space-x-4 list-none p-0 m-0">
                  <li className="icon-content">
                    <a href="https://www.linkedin.com/in/ujjawal-bhardwaj-643625372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" data-social="linkedin" target="_blank" rel="noopener noreferrer">
                      <div className="filled" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" xmlSpace="preserve">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
                      </svg>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                  </li>
                  <li className="icon-content">
                    <a href="https://github.com/UBX-CODE" aria-label="GitHub" data-social="github" target="_blank" rel="noopener noreferrer">
                      <div className="filled" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" xmlSpace="preserve">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
                      </svg>
                    </a>
                    <div className="tooltip">GitHub</div>
                  </li>
                  <li className="icon-content">
                    <a href="https://www.instagram.com/" aria-label="Instagram" data-social="instagram" target="_blank" rel="noopener noreferrer">
                      <div className="filled" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" xmlSpace="preserve">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" fill="currentColor" />
                      </svg>
                    </a>
                    <div className="tooltip">Instagram</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Image with diagonal clip */}
        <div className="relative flex-1 flex items-stretch justify-end min-w-[350px] min-h-screen h-full">
          <img
            src={require('./assets/2.jpg')}
            alt="Profile"
            className="absolute right-0 top-0 w-full h-full object-cover min-w-0 min-h-0 max-h-full max-w-full floating-photo"
            style={{
              clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)',
              WebkitClipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)',
              filter: lightTheme ? 'grayscale(0)' : 'grayscale(0.1)',
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={
          (lightTheme
            ? 'py-20 bg-[#F3F0EB] text-gray-900'
            : 'py-20 bg-gradient-to-b from-black to-gray-900 text-white')
          + ' relative overflow-hidden'
        }
        onMouseMove={handleAboutMouseMove}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={
              (lightTheme ? 'text-[#785338]' : '') +
              ' text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'
            }>
              About Me
              <span className="hidden md:inline-block align-middle">
                <svg width="60" height="36" viewBox="0 0 100 60">
                  <ellipse cx="30" cy="30" rx="18" ry="22" fill="#fff" stroke="#bbb" strokeWidth="2" />
                  <ellipse cx="70" cy="30" rx="18" ry="22" fill="#fff" stroke="#bbb" strokeWidth="2" />
                  <circle
                    cx={30 + 7 * Math.max(-1, Math.min(1, (eyePos.x-30)/40))}
                    cy={30 + 7 * Math.max(-1, Math.min(1, (eyePos.y-30)/30))}
                    r="6" fill="#222" />
                  <circle
                    cx={70 + 7 * Math.max(-1, Math.min(1, (eyePos.x-70)/40))}
                    cy={30 + 7 * Math.max(-1, Math.min(1, (eyePos.y-30)/30))}
                    r="6" fill="#222" />
                </svg>
              </span>
            </h2>
            {/* Personal Introduction Paragraph */}
            <p className={lightTheme ? 'text-gray-700 text-lg mb-10 leading-relaxed' : 'text-gray-300 text-lg mb-10 leading-relaxed'}>
              I am a passionate <span className="font-semibold text-purple-400">Full Stack Developer</span> with a keen interest in <span className="font-semibold text-pink-400">Machine Learning Operations (MLOps)</span>. My journey in technology has been driven by a desire to build robust, scalable applications that solve real-world problems. I thrive on exploring new technologies and continuously improving my skills.
            </p>
            <div className="flex flex-col md:flex-row gap-12 relative">
              <div className="md:w-full">
                <div {...fadeInUp(300)}>
                  <h3 className={
                    (lightTheme ? 'text-[#785338]' : '') +
                    ' text-2xl font-bold mb-3'
                  }>My Approach</h3>
                  <p className={lightTheme ? 'text-gray-700 leading-relaxed mb-4' : 'text-gray-300 leading-relaxed mb-4'}>
                    I believe that great design is about more than just aesthetics—it's about creating meaningful experiences that solve problems and delight users.
                  </p>
                  <p className={lightTheme ? 'text-gray-700 leading-relaxed' : 'text-gray-300 leading-relaxed'}>
                    My process combines user-centered thinking with technical expertise to deliver intuitive interfaces that not only look beautiful but also perform exceptionally well.
                  </p>
                </div>
              </div>
            </div>
            {/* Skills Cards Combined Here */}
            <h2 className="text-4xl font-bold text-center mb-12 mt-16" style={{ color: lightTheme ? '#785338' : undefined, fontFamily: 'Pacifico, cursive' }}>Skills</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 flex-wrap">
              <SkillCard lightTheme={lightTheme}>
                <div className="content">
                  <div className="card-title">Frontend</div>
                  <div className="skills-list">
                    <span title="HTML5" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{width:50}}/></span>
                    <span title="CSS3" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style={{width:50}}/></span>
                    <span title="JavaScript" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width:50}}/></span>
                    <span title="React" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{width:50}}/></span>
                    <span title="Bootstrap" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" style={{width:50}}/></span>
                  </div>
                </div>
              </SkillCard>
              <SkillCard lightTheme={lightTheme}>
                <div className="content">
                  <div className="card-title">Backend</div>
                  <div className="skills-list">
                    <span title="Node.js" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{width:50}}/></span>
                    <span title="Express.js" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" style={{width:50}}/></span>
                    <span title="Python" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{width:50}}/></span>
                    <span title="Django" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" style={{width:50}}/></span>
                    <span title="Java" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width:50}}/></span>
                    <span title="Spring" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" style={{width:50}}/></span>
                  </div>
                </div>
              </SkillCard>
              <SkillCard lightTheme={lightTheme}>
                <div className="content">
                  <div className="card-title">Frameworks</div>
                  <div className="skills-list">
                    <span title="React" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{width:50}}/></span>
                    <span title="Vue.js" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" style={{width:50}}/></span>
                    <span title="Angular" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" style={{width:50}}/></span>
                    <span title="Next.js" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style={{width:50}}/></span>
                    <span title="Redux" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" style={{width:50}}/></span>
                    <span title="Vite" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" style={{width:50}}/></span>
                  </div>
                </div>
              </SkillCard>
              <SkillCard lightTheme={lightTheme}>
                <div className="content">
                  <div className="card-title">Languages</div>
                  <div className="skills-list">
                    <span title="C++" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" style={{width:50}}/></span>
                    <span title="C" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" style={{width:50}}/></span>
                    <span title="Python" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{width:50}}/></span>
                    <span title="Java" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width:50}}/></span>
                    <span title="JavaScript" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width:50}}/></span>
                  </div>
                </div>
              </SkillCard>
              <SkillCard lightTheme={lightTheme}>
                <div className="content">
                  <div className="card-title">Tools</div>
                  <div className="skills-list">
                    <span title="Git" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{width:50}}/></span>
                    <span title="VS Code" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{width:50}}/></span>
                    <span title="GitHub" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width:50}}/></span>
                    <span title="NPM" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" style={{width:50}}/></span>
                    <span title="Docker" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" style={{width:50}}/></span>
                    <span title="Kubernetes" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" style={{width:50}}/></span>
                    <span title="AWS" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" style={{width:50}}/></span>
                    <span title="MongoDB" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width:50}}/></span>
                    <span title="PostgreSQL" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" style={{width:50}}/></span>
                    <span title="MySQL" className="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{width:50}}/></span>
                  </div>
                </div>
              </SkillCard>
            </div>

            {/* End Skills Cards Combined */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={
          (lightTheme
            ? 'py-20 bg-[#F3F0EB] text-gray-900'
            : 'py-20 bg-gradient-to-b from-gray-900 to-black text-white')
          + ' relative overflow-hidden'
        }
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className={
              (lightTheme ? 'text-[#785338]' : '') +
              ' text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'
            }>
              Featured Projects
            </h2>
            {/* Timeline Style Projects */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 h-full -translate-x-1/2 z-0 opacity-40"></div>
              <div className="flex flex-col gap-16 relative z-10">
                {/* Netflix Clone */}
                <div
                  {...fadeInUp(100)}
                  className={
                    (lightTheme
                      ? 'group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200'
                      : 'group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 hover:border-purple-500/50')
                    + ' flex items-center relative'
                  }
                  style={{ minHeight: 180 }}
                >
                  <div className="flex-1 flex justify-end pr-12"> 
                    <div className="w-full max-w-lg p-6">
                      <div className="relative overflow-hidden h-40 rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                          alt="Netflix Clone" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <span className="inline-block px-3 py-1 bg-red-600/70 rounded-full text-xs font-medium mb-2">
                              Full-Stack Development
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className={
                        (lightTheme ? 'text-[#785338]' : '') +
                        ' text-xl font-bold mb-2'
                      }>Netflix Clone</h3>
                      <p className={lightTheme ? 'text-gray-700 line-clamp-2' : 'text-gray-300 line-clamp-2'}>
                        A full-stack Netflix clone featuring movie browsing, user authentication, personalized recommendations, and video streaming capabilities.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        React • Node.js • MongoDB
                      </div>
                      <a 
                        href="https://github.com/UBX-CODE/netflix-clone" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Twitter Clone */}
                <div
                  {...fadeInUp(200)}
                  className={
                    (lightTheme
                      ? 'group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200'
                      : 'group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 hover:border-purple-500/50')
                    + ' flex items-center relative'
                  }
                  style={{ minHeight: 180 }}
                >
                  <div className="flex-1 flex justify-start pl-12"> 
                    <div className="w-full max-w-lg p-6">
                      <div className="relative overflow-hidden h-40 rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                          alt="Twitter Clone" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <span className="inline-block px-3 py-1 bg-blue-500/70 rounded-full text-xs font-medium mb-2">
                              Social Media Platform
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className={
                        (lightTheme ? 'text-[#785338]' : '') +
                        ' text-xl font-bold mb-2'
                      }>Twitter Clone</h3>
                      <p className={lightTheme ? 'text-gray-700 line-clamp-2' : 'text-gray-300 line-clamp-2'}>
                        A social media platform clone with real-time tweet posting, following system, notifications, and direct messaging features.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        React • Express • Socket.io
                      </div>
                      <a 
                        href="https://github.com/UBX-CODE/twitter-clone" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Uber Clone */}
                <div
                  {...fadeInUp(300)}
                  className={
                    (lightTheme
                      ? 'group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200'
                      : 'group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 hover:border-purple-500/50')
                    + ' flex items-center relative'
                  }
                  style={{ minHeight: 180 }}
                >
                  <div className="flex-1 flex justify-end pr-12"> 
                    <div className="w-full max-w-lg p-6">
                      <div className="relative overflow-hidden h-40 rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Uber Clone" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <span className="inline-block px-3 py-1 bg-yellow-600/70 rounded-full text-xs font-medium mb-2">
                              Mobile App Development
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className={
                        (lightTheme ? 'text-[#785338]' : '') +
                        ' text-xl font-bold mb-2'
                      }>Uber Clone</h3>
                      <p className={lightTheme ? 'text-gray-700 line-clamp-2' : 'text-gray-300 line-clamp-2'}>
                        A ride-sharing application with real-time location tracking, driver-rider matching, payment integration, and route optimization.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        React Native • Node.js • PostgreSQL
                      </div>
                      <a 
                        href="https://github.com/UBX-CODE/uber-clone" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Facebook Clone */}
                <div
                  {...fadeInUp(400)}
                  className={
                    (lightTheme
                      ? 'group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200'
                      : 'group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 hover:border-purple-500/50')
                    + ' flex items-center relative'
                  }
                  style={{ minHeight: 180 }}
                >
                  <div className="flex-1 flex justify-start pl-12"> 
                    <div className="w-full max-w-lg p-6">
                      <div className="relative overflow-hidden h-40 rounded-lg mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                          alt="Facebook Clone" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <span className="inline-block px-3 py-1 bg-blue-600/70 rounded-full text-xs font-medium mb-2">
                              Social Networking Platform
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className={
                        (lightTheme ? 'text-[#785338]' : '') +
                        ' text-xl font-bold mb-2'
                      }>Facebook Clone</h3>
                      <p className={lightTheme ? 'text-gray-700 line-clamp-2' : 'text-gray-300 line-clamp-2'}>
                        A comprehensive social networking platform with user profiles, friend requests, news feed, photo sharing, and group functionality.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        React • Django • PostgreSQL
                      </div>
                      <a 
                        href="https://github.com/UBX-CODE/facebook-clone" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={
          (lightTheme
            ? 'py-20 bg-[#F3F0EB] text-gray-900'
            : 'py-20 bg-gradient-to-b from-black to-gray-900 text-white')
          + ' relative overflow-hidden'
        }
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={
              (lightTheme ? 'text-[#785338]' : '') +
              ' text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'
            }>
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div {...fadeInUp(100)}>
                <h3 className={
                  (lightTheme ? 'text-[#785338]' : '') +
                  ' text-2xl font-bold mb-4'
                }>Contact Information</h3>
                <p className={lightTheme ? 'text-gray-700 mb-6' : 'text-gray-300 mb-6'}>
                  Have a question or want to work together? Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 mr-3 text-purple-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className={lightTheme ? 'text-gray-800' : 'text-gray-400'}>Jaipur, INDIA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 mr-3 text-purple-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className={lightTheme ? 'text-gray-800' : 'text-gray-400'}>Ujjwalsharma1910@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 mr-3 text-purple-400">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className={lightTheme ? 'text-gray-800' : 'text-gray-400'}>8218301131</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div {...fadeInUp(200)} className="flex flex-col items-center gap-8">
                <form className="space-y-6 w-full max-w-md p-8 rounded-2xl shadow-xl bg-gradient-to-br from-gray-900/80 to-purple-900/80 border border-purple-700/40 backdrop-blur">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-purple-300 tracking-wide">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-5 py-3 bg-gray-800/80 border border-purple-700/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 shadow-inner transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-purple-300 tracking-wide">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-3 bg-gray-800/80 border border-purple-700/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 shadow-inner transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-purple-300 tracking-wide">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-5 py-3 bg-gray-800/80 border border-purple-700/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 shadow-inner transition-all duration-200 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg shadow-lg hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 tracking-wide border border-purple-400/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={
        (lightTheme
          ? 'py-8 border-t border-gray-300 bg-[#F3F0EB] text-gray-700'
          : 'py-8 border-t border-gray-800 bg-transparent text-gray-400')
      }>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4 md:mb-0 cursor-pointer"
            >
              Ujjawal Bhardwaj
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Ujjawal Bhardwaj. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Add custom animations for blobs */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Social Media Button Styles */}
      <style>{`
        .icon-content {
          margin: 0;
          position: relative;
        }
        .icon-content .tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 6px 10px;
          border-radius: 5px;
          opacity: 0;
          visibility: hidden;
          font-size: 14px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .icon-content:hover .tooltip {
          opacity: 1;
          visibility: visible;
          top: -50px;
        }
        .icon-content a {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #4d4d4d;
          background-color: #fff;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }
        .icon-content a:hover {
          box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
        }
        .icon-content a svg {
          position: relative;
          z-index: 1;
          width: 24px;
          height: 24px;
        }
        .icon-content a:hover {
          color: white;
        }
        .icon-content a .filled {
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: #000;
          transition: all 0.3s ease-in-out;
        }
        .icon-content a:hover .filled {
          height: 100%;
        }

        .icon-content a[data-social="linkedin"] .filled,
        .icon-content a[data-social="linkedin"] ~ .tooltip {
          background-color: #0274b3;
        }

        .icon-content a[data-social="github"] .filled,
        .icon-content a[data-social="github"] ~ .tooltip {
          background-color: #24262a;
        }
        .icon-content a[data-social="instagram"] .filled,
        .icon-content a[data-social="instagram"] ~ .tooltip {
          background: linear-gradient(
            45deg,
            #405de6,
            #5b51db,
            #b33ab4,
            #c135b4,
            #e1306c,
            #fd1f1f
          );
        }
      `}</style>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; filter: blur(0.5px) brightness(1.2); }
          50% { opacity: 1; filter: blur(1.5px) brightness(2); }
        }
        @keyframes moveStar {
          0% { transform: translate(0, 0); }
          100% { transform: translate(var(--move-x, 0px), var(--move-y, 0px)); }
        }
        @keyframes floatPhoto {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .floating-photo {
          animation: floatPhoto 3.5s ease-in-out infinite;
        }
      `}</style>
      {/* Twinkling and Moving Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {starsRef.current.map((star, i) => {
          const moveDuration = star.baseDuration;
          return (
            <div
              key={i}
              className={
                `absolute rounded-full shadow-lg ` + (lightTheme ? 'bg-[#0F172A]' : 'bg-white')
              }
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: 0.7,
                filter: 'blur(0.5px) brightness(1.2) drop-shadow(0 0 6px #fff)',
                animation: `twinkle ${star.twinkle}s infinite alternate, moveStar ${moveDuration}s ease-in-out infinite alternate`,
                '--move-x': `${star.moveX}px`,
                '--move-y': `${star.moveY}px`,
              }}
            />
          );
        })}
      </div>

      {/* Theme Toggle Button */}
      <button
        className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full shadow-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/30 backdrop-blur border border-white/40 hover:bg-white/50"
        style={{
          background: 'rgba(255,255,255,0.3)',
          color: lightTheme ? '#7c3aed' : '#fff',
          border: '1px solid rgba(255,255,255,0.4)',
        }}
        onClick={() => setLightTheme((v) => !v)}
      >
        {lightTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

const SkillCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'lightTheme'
})`
  width: 400px;
  height: 280px;
  background: ${props => props.lightTheme ? 'rgba(248, 249, 250, 0.1)' : 'rgba(22, 22, 29, 0.1)'};
  border: 2px solid ${props => props.lightTheme ? 'rgba(108, 117, 125, 0.3)' : 'rgba(85, 85, 85, 0.3)'};
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform .5s;
  cursor: pointer;

  .border {
    display: none;
  }

  .bottom-text {
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: transform .5s;
  }

  .skills-list {
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 24px;
    transition: transform .5s;
  }

  .card-title {
    color: ${props => props.lightTheme ? '#495057' : '#fff'};
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    font-family: monospace;
    text-shadow: ${props => props.lightTheme ? 'none' : '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'};
    transition: transform .5s;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform .5s;
    cursor: pointer;
    border-radius: 8px;
    background: transparent;
    padding: 8px;
    border: none;
  }

  &:hover {
    transform: translateZ(20px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &:hover .content {
    transform: translateZ(30px);
  }

  &:hover .card-title {
    transform: translateZ(40px);
  }

  &:hover .skills-list {
    transform: translateZ(25px);
  }

  .skill-icon:hover {
    transform: translateZ(15px) rotateX(25deg) rotateY(25deg);
  }
`;