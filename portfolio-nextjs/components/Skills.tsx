"use client";

import { motion } from "framer-motion";
import { TechIcons } from "./TechIcons";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const skillCategories = [
  {
    key: "backend" as const,
    skills: ["Laravel", "PHP", "Python", "NodeJS", "REST API", "Microservices"],
  },
  {
    key: "frontend" as const,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    key: "database" as const,
    skills: ["MySQL", "PostgreSQL", "Docker", "Git", "CI/CD", "AWS Basics"],
  },
  {
    key: "design" as const,
    skills: ["Figma", "UI/UX Principles", "Responsive Design", "Agile/Scrum", "VS Code"],
  },
];

const techStack = [
  { name: "HTML5", icon: "HTML5" },
  { name: "CSS3", icon: "CSS3" },
  { name: "Laravel", icon: "Laravel" },
  { name: "React", icon: "React" },
  { name: "Next.js", icon: "NextJS" },
  { name: "Tailwind", icon: "Tailwind" },
  { name: "Python", icon: "Python" },
  { name: "MySQL", icon: "MySQL" },
  { name: "Git", icon: "Git" },
  { name: "Docker", icon: "Docker" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-14 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            {t.skills.title} <span className="text-primary-600 dark:text-primary-400">{t.skills.expertise}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const categoryTranslation = t.skills.categories[category.key];
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                    {categoryTranslation.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {categoryTranslation.description}
                  </p>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-100 dark:border-primary-800 transition-colors hover:bg-primary-100 dark:hover:bg-primary-900/50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {t.skills.techPlatforms}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = TechIcons[tech.icon as keyof typeof TechIcons];
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group flex flex-col items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-4 glass rounded-xl cursor-pointer hover:shadow-lg smooth-transition"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-full h-full" />}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
