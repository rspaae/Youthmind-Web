"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 sm:p-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 group cursor-pointer ${
        isDark
          ? "bg-[#194447] text-amber-300 border border-[#4BA0A4]/40 hover:border-[#4BA0A4] shadow-md shadow-black/20"
          : "bg-teal-50 text-teal-700 border border-teal-200 hover:border-teal-400 shadow-md shadow-teal-500/10"
      } ${className}`}
      aria-label={isDark ? "Aktifkan Mode Terang (Light Mode)" : "Aktifkan Mode Gelap (Dark Mode)"}
      title={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-300 stroke-[2.2] group-hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon className="w-4 h-4 text-teal-700 stroke-[2.2] group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-bold leading-none select-none pr-1">
          {isDark ? "Mode Terang" : "Mode Gelap"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
