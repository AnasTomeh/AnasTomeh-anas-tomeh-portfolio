"use client"

import { BsMoonFill, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="fixed top-20 right-10 bg-white w-12 h-12 border border-white shadow-2xl rounded-full flex items-center justify-center
                 hover:scale-[1.15] transition-all text-xl dark:bg-gray-950 z-[999]"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <BsSun /> : <BsMoonFill />}
            <span className="sr-only">
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </span>
        </button>
    );
};

export default ThemeSwitch;
