"use client";

import { motion } from "framer-motion";
import { Code2, Database, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building robust web applications with Laravel, React, Next.js, and modern technologies.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Designing scalable APIs and database structures with Laravel, Python, and MySQL.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, SEO, and exceptional user experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect, responsive interfaces with attention to detail.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Full-Stack Developer crafting exceptional web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Full-Stack Developer with a Designer's Eye
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                With over <strong className="text-gray-900 dark:text-white">5 years of experience</strong>, I specialize in building
                robust, scalable web applications that solve real business problems. My expertise spans across the entire
                development stack, from database design to intuitive user interfaces.
              </p>
              <p>
                I've successfully delivered projects for <strong className="text-gray-900 dark:text-white">3+ enterprise clients</strong> on
                Upwork, earning over <strong className="text-gray-900 dark:text-white">$2000+</strong> through quality work and client satisfaction.
                My projects range from SaaS dashboards to tourism booking platforms, each built with attention to performance and user experience.
              </p>
              <p>
                While my primary focus is <strong className="text-gray-900 dark:text-white">full-stack development</strong>, my background
                in design gives me a unique advantage—I understand both the technical implementation and the visual impact,
                ensuring every project is not just functional, but also beautiful and user-friendly.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">📍 Cotonou, Benin</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">✅ Available for Freelance</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">⭐ Upwork Verified</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Services grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass hover:shadow-xl smooth-transition cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
