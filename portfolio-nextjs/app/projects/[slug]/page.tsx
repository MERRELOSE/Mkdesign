"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Lock, ChevronLeft, ChevronRight, Zap, Wrench, Eye } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";
import { TechIcons } from "@/components/TechIcons";
import { useState, useEffect, useCallback } from "react";
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
  "Python": "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  "MySQL": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "PostgreSQL": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "HTML5": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
  "CSS3": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "TypeScript": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  "PHP": "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  "Filament": "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  "Shopify API": "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  "LiveKit": "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
  "WebSocket": "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  "FFmpeg": "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  "Whisper AI": "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200",
  "Expo": "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200",
  "Docker": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const project = getProjectBySlug(params.slug as string);
  const [currentImage, setCurrentImage] = useState(0);

  const prev = useCallback(() => {
    if (!project) return;
    setCurrentImage((p) => (p - 1 + project.images.length) % project.images.length);
  }, [project]);

  const next = useCallback(() => {
    if (!project) return;
    setCurrentImage((p) => (p + 1) % project.images.length);
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link href="/#projects" className="text-primary-500 hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  // Find prev/next projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[currentIndex - 1] || null;
  const nextProject = projects[currentIndex + 1] || null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-16">
      {/* Hero image */}
      <div className="relative h-[45vh] sm:h-[55vh] md:h-[65vh] bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImage]}
              alt={`${project.title} - ${currentImage + 1}`}
              fill
              sizes="100vw"
              className="object-cover sm:object-contain"
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10"></div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white text-sm font-medium hover:bg-black/60 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          {project.badge && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
              project.badge === "In Development"
                ? "bg-amber-500/20 text-amber-200 border border-amber-400/30"
                : "bg-gray-500/20 text-gray-200 border border-gray-400/30"
            }`}>
              {project.badge === "Private" || project.badge === "Client Project" ? <Lock size={12} /> : null}
              {project.badge}
            </span>
          )}
        </div>

        {/* Image navigation */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentImage ? "bg-white w-8" : "bg-white/40 w-2 hover:bg-white/70"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main content — 2/3 */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About this project</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                {project.details}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap size={22} className="text-primary-500" />
                Key Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 rounded-xl p-3.5">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Wrench size={22} className="text-accent-500" />
                Technical Challenges
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                {project.challenges}
              </p>
            </motion.div>

            {/* Screenshots */}
            {project.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Eye size={22} className="text-primary-500" />
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentImage(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all hover:shadow-lg ${
                        i === currentImage
                          ? "border-primary-500 ring-2 ring-primary-500/30"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar — 1/3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Tech stack */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => {
                  const IconComponent = TechIcons[tag as TechKey];
                  return (
                    <div
                      key={tag}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium ${
                        techColors[tag] || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      <span>{tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="glass rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Links</h3>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-primary-500 hover:text-primary-500 transition-colors text-sm"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              ) : null}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:shadow-lg transition-all text-sm"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              ) : null}

              {!project.github && !project.live && (
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium rounded-xl text-sm">
                  <Lock size={16} />
                  {project.badge === "In Development" ? "Coming Soon" : "Private Project"}
                </div>
              )}
            </div>

            {/* Project nav */}
            <div className="glass rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Other Projects</h3>
              {projects.filter((p) => p.slug !== project.slug).map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      sizes="40px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="font-medium line-clamp-1">{p.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Prev/Next navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500">Previous</div>
                <div className="font-semibold text-sm">{prevProject.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500">Next</div>
                <div className="font-semibold text-sm">{nextProject.title}</div>
              </div>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
