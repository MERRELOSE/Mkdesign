"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
          language === 'en' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-transparent hover:border-gray-300'
        }`}
        title="English"
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="English"
          className="w-full h-full object-cover"
        />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('fr')}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
          language === 'fr' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-transparent hover:border-gray-300'
        }`}
        title="Français"
      >
        <img
          src="https://flagcdn.com/w40/fr.png"
          alt="Français"
          className="w-full h-full object-cover"
        />
      </motion.button>
    </div>
  );
}
