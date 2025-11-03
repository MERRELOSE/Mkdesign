"use client";

import { motion } from "framer-motion";
import { TechIcons } from "./TechIcons";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Laravel", level: 95, color: "from-red-500 to-orange-500" },
      { name: "PHP", level: 90, color: "from-indigo-500 to-purple-500" },
      { name: "Python", level: 85, color: "from-blue-500 to-cyan-500" },
      { name: "NodeJS", level: 80, color: "from-green-500 to-emerald-500" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 98, color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "NextJS", level: 88, color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
      { name: "Tailwind", level: 95, color: "from-teal-500 to-cyan-500" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "PostgreSQL", level: 80, color: "from-blue-400 to-indigo-500" },
      { name: "Git", level: 92, color: "from-orange-500 to-red-500" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
    ],
  },
  {
    title: "Additional Skills",
    skills: [
      { name: "REST API", level: 93, color: "from-green-500 to-teal-500" },
      { name: "UI/UX Design", level: 85, color: "from-pink-500 to-purple-500" },
      { name: "Responsive Design", level: 95, color: "from-purple-500 to-indigo-500" },
      { name: "Performance Optimization", level: 88, color: "from-yellow-500 to-orange-500" },
    ],
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
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
