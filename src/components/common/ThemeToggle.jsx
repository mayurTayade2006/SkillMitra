import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = "", variant = "icon", showLabel = false }) {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === "pill") {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-[#0B1C33]/80 border border-white/[0.14] text-[#F5F7FA] hover:bg-[#122B4D] hover:border-cyan-400/40 shadow-sm'
            : 'bg-white/90 border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-sky-300 shadow-sm'
        } ${className}`}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-[#38BDF8]"
              >
                <Moon className="w-3.5 h-3.5 fill-[#38BDF8]/20" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-amber-500"
              >
                <Sun className="w-3.5 h-3.5 fill-amber-500/30" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="text-xs font-semibold tracking-tight">
          {isDark ? 'Dark' : 'Light'}
        </span>

        {/* Ambient Glow */}
        <span
          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            isDark ? 'bg-cyan-500/10 blur-sm' : 'bg-amber-400/15 blur-sm'
          }`}
        />
      </button>
    );
  }

  // Default: Compact Circular/Rounded Icon Button with Framer Motion Spring
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-lg transition-all duration-300 flex items-center justify-center group overflow-hidden ${
        isDark
          ? 'border border-white/[0.14] bg-[#0B1C33]/80 hover:bg-[#122B4D] text-[#38BDF8] hover:border-[#38BDF8]/40 shadow-sm'
          : 'border border-slate-200/90 bg-white/90 hover:bg-slate-100 text-amber-600 hover:border-amber-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-icon"
            initial={{ rotate: -45, y: -4, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            exit={{ rotate: 45, y: 4, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-12 fill-[#38BDF8]/20" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={{ rotate: 45, y: 4, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            exit={{ rotate: -45, y: -4, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45 fill-amber-500/25" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Micro indicator dot */}
      <span
        className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]'
            : 'bg-amber-500 shadow-[0_0_6px_#F59E0B]'
        }`}
      />
    </motion.button>
  );
}
