"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">KM</div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-Stack Developer building exceptional web experiences with modern technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:kennedymerrelose@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:kennedymerrelose@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 smooth-transition">
                  kennedymerrelose@gmail.com
                </a>
              </li>
              <li>Cotonou, Benin</li>
              <li className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Freelance
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} Kennedy MERRELOSE. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
