"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TechIcons } from "./TechIcons";

// Type pour les clés de TechIcons
type TechKey = keyof typeof TechIcons;

// Map des couleurs pour chaque technologie
const techColors: Record<string, string> = {
  "Laravel": "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  "React": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "Next.js": "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200",
  "Vue.js": "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  "Node.js": "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  "Python": "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  "MySQL": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "PostgreSQL": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "HTML5": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
  "CSS3": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "TypeScript": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "PHP": "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  "FastAPI": "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
};

const projects = [
  {
    title: "SaaS Dashboard Platform",
    description: "Enterprise-grade SaaS dashboard built with Laravel backend and modern admin panel. Features include real-time analytics, user management, and comprehensive reporting.",
    tags: ["Laravel", "MySQL", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Tourism Booking Application",
    description: "Full-stack web application for booking tourist site visits and cultural events. React frontend with Laravel API, featuring payment integration and booking management.",
    tags: ["React", "Laravel", "MySQL", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with product catalog, cart management, payment processing, and order tracking. Built for scalability and performance.",
    tags: ["Next.js", "Laravel", "PostgreSQL", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with real-time messaging, file sharing, and user presence indicators. Supports group chats and direct messages.",
    tags: ["Node.js", "React", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with kanban boards, team collaboration features, and project tracking. Perfect for agile teams.",
    tags: ["React", "Python", "FastAPI", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Custom content management system for portfolio websites with drag-and-drop builder, SEO optimization, and analytics integration.",
    tags: ["Laravel", "Vue.js", "MySQL", "HTML5", "CSS3"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const getTechIcon = (techName: string) => {
    const IconComponent = TechIcons[techName as TechKey];
    return IconComponent;
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects I've built for clients and personal learning
          </p>
        </motion.div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass rounded-2xl overflow-hidden hover:shadow-2xl smooth-transition transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 smooth-transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => {
                    const IconComponent = getTechIcon(tag);
                    return (
                      <div
                        key={tag}
                        className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium ${
                          techColors[tag] || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                        <span>{tag}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg smooth-transition"
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-blue-500 hover:text-blue-500 smooth-transition"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 magnetic-btn glass px-8 py-4 rounded-full font-semibold border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white smooth-transition"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
