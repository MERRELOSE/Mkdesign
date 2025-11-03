"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Only render after component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="fixed top-4 left-4 z-[100] p-3 w-[44px] h-[44px] bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-[100] p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </motion.button>
  );
}
