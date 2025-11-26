import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                >
                    <div className="flex flex-col items-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                                borderRadius: ["20%", "50%", "20%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.5, 1],
                                repeat: Infinity
                            }}
                            className="w-16 h-16 border-4 border-purple-500 mb-8"
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-white text-2xl font-mono tracking-widest"
                        >
                            INITIALIZING...
                        </motion.h2>
                        <motion.div
                            className="w-48 h-1 bg-gray-800 mt-4 rounded-full overflow-hidden"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.3, ease: "easeInOut" }}
                                className="h-full bg-purple-500"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
