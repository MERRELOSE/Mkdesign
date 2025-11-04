"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Language = 'en' | 'fr';

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  useEffect(() => {
    setMounted(true);
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setCurrentLanguage(savedLanguage);
      // Update i18next if available
      if (typeof window !== 'undefined' && (window as any).i18next) {
        (window as any).i18next.changeLanguage(savedLanguage);
      }
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);

    // Update i18next if available
    if (typeof window !== 'undefined' && (window as any).i18next) {
      (window as any).i18next.changeLanguage(lang);
      // Trigger a custom event to notify other components
      window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    }
  };

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-[100] bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 w-[104px] h-[56px]" />
    );
  }

  return (
    <div className="fixed top-4 right-4 z-[100] bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleLanguageChange('en')}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
          currentLanguage === 'en' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-transparent hover:border-gray-300'
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
        onClick={() => handleLanguageChange('fr')}
        className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
          currentLanguage === 'fr' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-transparent hover:border-gray-300'
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
