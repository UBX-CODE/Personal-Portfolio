import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Increased slightly to show off the animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Background with smoky/cloudy effect */}
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center z-10">
            <StyledWrapper>
              <div className="loader" />
            </StyledWrapper>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white/50 font-mono text-sm tracking-[0.2em] uppercase"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: block;
    --height-of-loader: 4px;
    --loader-color: #a855f7;
    width: 200px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: rgba(255,255,255,0.1);
    position: relative;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
  }

  .loader::before {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, #a855f7, #3b82f6, #a855f7);
    background-size: 200% 100%;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 2s ease-in-out infinite, glowing 2s linear infinite;
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
  }

  @keyframes moving {
    0% {
      width: 0;
      left: 0;
      right: unset;
    }
    50% {
      width: 100%;
      left: 0;
      right: 0;
    }
    100% {
      width: 0;
      right: 0;
      left: unset;
      margin-left: auto;
    }
  }

  @keyframes glowing {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default LoadingScreen;
