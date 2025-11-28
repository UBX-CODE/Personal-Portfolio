import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-white"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-purple-400" />}
        </button>
    );
};

export default ThemeToggle;
