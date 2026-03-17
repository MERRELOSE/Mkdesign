"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/translations";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navigation = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const nextLanguage: Language = language === "en" ? "fr" : "en";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              KM
            </button>
          </div>

          {/* Desktop Navigation - center */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme toggle */}
            <div className="relative group">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition-colors"
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {mounted ? (
                  isDark ? (
                    <Sun className="w-[18px] h-[18px] text-yellow-400" />
                  ) : (
                    <Moon className="w-[18px] h-[18px]" />
                  )
                ) : (
                  <div className="w-[18px] h-[18px]" />
                )}
              </button>
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2.5 py-1 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            </div>

            {/* Language switcher */}
            <div className="relative group">
              <button
                onClick={() => setLanguage(nextLanguage)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition-colors"
                aria-label={language === "en" ? "Passer en Français" : "Switch to English"}
              >
                {mounted ? (
                  <Image
                    src={language === "en" ? "https://flagcdn.com/w20/gb.png" : "https://flagcdn.com/w20/fr.png"}
                    alt=""
                    width={20}
                    height={15}
                    className="rounded-sm"
                    unoptimized
                  />
                ) : (
                  <div className="w-5 h-[15px]" />
                )}
                <span className="uppercase hidden sm:inline">{language}</span>
              </button>
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2.5 py-1 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                {language === "en" ? "Passer en Français" : "Switch to English"}
              </span>
            </div>

            {/* Hire Me - Desktop only */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="hidden md:inline-flex magnetic-btn bg-gradient-to-r from-primary-500 to-accent-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all ml-1"
            >
              {t.nav.hireMe}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass border-t border-gray-200/20 dark:border-gray-700/30 px-4 pt-3 pb-4 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-3 rounded-lg text-base font-medium mt-2"
          >
            {t.nav.hireMe}
          </button>
        </div>
      </div>
    </nav>
  );
}
