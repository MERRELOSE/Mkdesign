"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard Platform",
    description: "Enterprise-grade SaaS dashboard built with Laravel backend and modern admin panel. Features include real-time analytics, user management, and comprehensive reporting.",
    tags: ["Laravel", "MySQL", "Chart.js", "Bootstrap"],
    image: "/projects/saas-dashboard.jpg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Tourism Booking Application",
    description: "Full-stack web application for booking tourist site visits and cultural events. React frontend with Laravel API, featuring payment integration and booking management.",
    tags: ["React", "Laravel", "MySQL", "Stripe"],
    image: "/projects/tourism-app.jpg",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with product catalog, cart management, payment processing, and order tracking. Built for scalability and performance.",
    tags: ["Next.js", "Laravel", "PostgreSQL", "Tailwind"],
    image: "/projects/ecommerce.jpg",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with real-time messaging, file sharing, and user presence indicators. Supports group chats and direct messages.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    image: "/projects/chat-app.jpg",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with kanban boards, team collaboration features, and project tracking. Perfect for agile teams.",
    tags: ["React", "Python", "FastAPI", "PostgreSQL"],
    image: "/projects/task-manager.jpg",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio CMS",
    description: "Custom content management system for portfolio websites with drag-and-drop builder, SEO optimization, and analytics integration.",
    tags: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    image: "/projects/cms.jpg",
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative glass rounded-2xl p-6 hover:shadow-2xl smooth-transition cursor-pointer overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 smooth-transition"></div>

              <div className="relative z-10">
                {/* Project Image Placeholder */}
                <div className={`w-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center ${
                  project.featured ? "h-64" : "h-48"
                }`}>
                  <span className="text-white text-4xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
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
