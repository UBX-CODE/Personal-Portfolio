import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
        const fontSize = 14;
        let columns;
        let drops = [];

        const init = () => {
            columns = width / fontSize;
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));

                // Varying opacity for depth
                const opacity = Math.random();
                ctx.fillStyle = `rgba(0, 255, 70, ${opacity})`;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        window.addEventListener('resize', resize);
        resize();
        init();

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 bg-black pointer-events-none opacity-20"
        />
    );
};

export default MatrixBackground;
