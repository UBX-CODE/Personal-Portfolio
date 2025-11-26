import React, { useEffect, useRef } from 'react';

const StarFieldBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let stars = [];

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * width;
                this.size = 0.5;
            }

            update() {
                this.z -= 2; // Speed of stars
                if (this.z <= 0) {
                    this.z = width;
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                }
            }

            draw() {
                const x = (this.x - width / 2) * (width / this.z);
                const y = (this.y - height / 2) * (width / this.z);
                const s = this.size * (width / this.z);

                const screenX = x + width / 2;
                const screenY = y + height / 2;

                if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z / width})`;
                    ctx.arc(screenX, screenY, s, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        const init = () => {
            stars = [];
            for (let i = 0; i < 800; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Trail effect
            ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 bg-black pointer-events-none"
        />
    );
};

export default StarFieldBackground;
