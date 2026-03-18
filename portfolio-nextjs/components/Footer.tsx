"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">KM</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MERRELOSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kennedy-merrelose-165092283"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/MerreloseK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:kennedymerrelose@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 smooth-transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.footer.getInTouch}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:kennedymerrelose@gmail.com" className="hover:text-primary-500 dark:hover:text-primary-400 smooth-transition">
                  kennedymerrelose@gmail.com
                </a>
              </li>
              <li>Cotonou, Benin</li>
              <li className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                {t.footer.available}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
