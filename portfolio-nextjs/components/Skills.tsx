"use client";

import { motion } from "framer-motion";
import { TechIcons } from "./TechIcons";
import { CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    description: "Robust & Scalable server-side solutions",
    skills: ["Laravel", "PHP", "Python", "NodeJS", "REST API", "Microservices"],
  },
  {
    title: "Frontend Development",
    description: "Responsive & Interactive user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Database & DevOps",
    description: "Data management & Deployment",
    skills: ["MySQL", "PostgreSQL", "Docker", "Git", "CI/CD", "AWS Basics"],
  },
  {
    title: "Design & Tools",
    description: "Workflow & Creative tools",
    skills: ["Figma", "UI/UX Principles", "Responsive Design", "Agile/Scrum", "VS Code"],
  },
];

const techStack = [
  { name: "HTML5", icon: "HTML5" },
  { name: "CSS3", icon: "CSS3" },
  { name: "Laravel", icon: "Laravel" },
  { name: "React", icon: "React" },
  { name: "Next.js", icon: "NextJS" },
  { name: "Python", icon: "Python" },
  { name: "MySQL", icon: "MySQL" },
  { name: "TypeScript", icon: "TypeScript" },
  { name: "Tailwind", icon: "Tailwind" },
  { name: "Git", icon: "Git" },
  { name: "Docker", icon: "Docker" },
  { name: "Figma", icon: "Figma" },
  { name: "Upwork", icon: "Upwork" },
];

// Animation simple pour le conteneur des tags
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Effet cascade
    }
  }
};

// Animation pour chaque petit tag
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical foundation and the tools I use to build digital products.
          </p>
        </motion.div>

        {/* Skills Grid (Animé) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>

              {/* Les tags s'animent ici */}
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
                    className="cursor-default inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800 transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Logos (CODE ORIGINAL RESTAURÉ - SANS MODIFICATION D'ANIMATION) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Technologies & Platforms I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
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
                  className="group flex flex-col items-center gap-3 px-6 py-4 glass rounded-xl cursor-pointer hover:shadow-lg smooth-transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
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
