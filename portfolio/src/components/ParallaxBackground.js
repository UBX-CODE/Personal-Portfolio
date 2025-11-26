import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
    const bgRef = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);
    const blobsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax for stars
            gsap.to(layer1Ref.current, {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to(layer2Ref.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.to(layer3Ref.current, {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Blob animation
            gsap.to(blobsRef.current, {
                rotation: 360,
                ease: 'none',
                duration: 50,
                repeat: -1,
            });
        }, bgRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={bgRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
            {/* Gradient Blobs */}
            <div ref={blobsRef} className="absolute inset-0 opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-900 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            {/* Stars Layers */}
            <div ref={layer1Ref} className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div ref={layer2Ref} className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(1.5px 1.5px at 25px 25px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '80px 80px' }}></div>
            <div ref={layer3Ref} className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(2px 2px at 50px 50px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '120px 120px' }}></div>

            {/* Noise Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};

export default ParallaxBackground;
