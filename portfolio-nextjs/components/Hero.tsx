"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { StatsIcons } from "./TechIcons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50/40 to-accent-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium">{t.hero.available}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              {t.hero.greeting}{" "}
              <span className="gradient-text">Kennedy MERRELOSE</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-10 sm:h-12"
            >
              <motion.span
                key={`${currentRole}-${t.hero.roles[currentRole]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-gray-700 dark:text-gray-300"
              >
                {t.hero.roles[currentRole]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {t.hero.description}
              {" "}
              {t.hero.descriptionLine2}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <a
                href="#projects"
                className="magnetic-btn bg-gradient-to-r from-primary-500 to-accent-500 text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-2xl hover:shadow-primary-500/25 flex items-center gap-2"
              >
                {t.hero.viewWork}
                <ExternalLink size={18} />
              </a>
              <a
                href="#contact"
                className="magnetic-btn glass px-7 py-3.5 rounded-full text-base font-semibold border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white transition-all"
              >
                {t.hero.contactMe}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-5"
            >
              <a
                href="https://github.com/MERRELOSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/kennedy-merrelose-165092283"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:kennedymerrelose@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center order-1 lg:order-2"
          >
            {/* Profile Photo */}
            <div className="relative mb-6 sm:mb-10">
              <div className="w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-primary-500/30 shadow-2xl shadow-primary-500/10">
                <Image
                  src="/profile.jpg"
                  alt="Kennedy MERRELOSE"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-500/20 animate-[spin_25s_linear_infinite]"></div>
              {/* Gradient glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full -z-10 blur-2xl"></div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-8 lg:gap-10">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                    <StatsIcons.Upwork className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">$3000+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.hero.earnedUpwork}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-2.5 bg-accent-50 dark:bg-accent-900/20 rounded-full">
                    <StatsIcons.Clients className="w-7 h-7 text-accent-600 dark:text-accent-400" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.hero.enterpriseClients}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                    <StatsIcons.Experience className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">4+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t.hero.yearsExperience}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
