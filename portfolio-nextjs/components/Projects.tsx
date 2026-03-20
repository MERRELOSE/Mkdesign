"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Lock, Eye } from "lucide-react";
import { TechIcons } from "./TechIcons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

type TechKey = keyof typeof TechIcons;

const techColors: Record<string, string> = {
  "Laravel": "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  "React": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "React Native": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "Next.js": "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200",
  "Vue.js": "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  "Node.js": "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  "MySQL": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "Filament": "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  "Shopify API": "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  "LiveKit": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
  "WebSocket": "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  "FFmpeg": "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  "Whisper AI": "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200",
  "Expo": "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200",
  "Docker": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "HTML5": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
  "CSS3": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
};

function CardCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-44 sm:h-56 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} - ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-14 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.projects}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative glass rounded-2xl overflow-hidden hover:shadow-2xl smooth-transition transform hover:-translate-y-2"
              >
                <CardCarousel images={project.images} title={project.title} />

                {project.badge && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                      project.badge === "In Development"
                        ? "bg-amber-500/20 text-amber-200 border border-amber-400/30"
                        : "bg-gray-500/20 text-gray-200 border border-gray-400/30"
                    }`}>
                      {project.badge === "Private" || project.badge === "Client Project" ? <Lock size={10} /> : null}
                      {project.badge}
                    </span>
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => {
                      const IconComponent = TechIcons[tag as TechKey];
                      return (
                        <div
                          key={tag}
                          className={`flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium ${
                            techColors[tag] || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                          <span>{tag}</span>
                        </div>
                      );
                    })}
                    {project.tags.length > 3 && (
                      <div className="flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        +{project.tags.length - 3}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-lg group-hover:shadow-lg smooth-transition">
                      <Eye size={16} />
                      View Details
                    </span>

                    {project.github && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github!, "_blank");
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-primary-500 hover:text-primary-500 smooth-transition"
                      >
                        <Github size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://github.com/MERRELOSE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 magnetic-btn glass px-8 py-4 rounded-full font-semibold border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white smooth-transition"
          >
            <Github size={20} />
            {t.projects.viewMore}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
