"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { StatsIcons } from "./TechIcons";

interface Testimonial {
  rating: number;
  text: string;
  clientLabel: string;
  projectType: string;
  date: string;
  source: "upwork" | "direct";
}

const testimonials: Testimonial[] = [
  {
    rating: 4.5,
    text: "Good job. Thanks for your cooperation for design integration.",
    clientLabel: "Upwork Client",
    projectType: "Web Development \u2014 PHP, MySQL, Laravel",
    date: "March 2026",
    source: "upwork",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => {
          const filled = i <= Math.floor(rating);
          const halfFilled = !filled && i - 0.5 <= rating;
          return (
            <div key={i} className="relative w-5 h-5">
              <Star className="absolute inset-0 w-5 h-5 text-gray-300 dark:text-gray-600 fill-gray-300 dark:fill-gray-600" />
              {filled && (
                <Star className="absolute inset-0 w-5 h-5 text-amber-400 fill-amber-400" />
              )}
              {halfFilled && (
                <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-14 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.testimonials.title} <span className="gradient-text">{t.testimonials.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className={`grid gap-6 ${testimonials.length === 1 ? "max-w-2xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative glass rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative quote */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary-500" />
              </div>

              {/* Rating */}
              <div className="mb-5">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className="relative text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-5"></div>

              {/* Client info */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t.testimonials.upworkClient}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.projectType}
                  </div>
                </div>
                {testimonial.source === "upwork" && (
                  <a
                    href="https://www.upwork.com/freelancers/~01fd4e5b112fcd6443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                  >
                    <StatsIcons.Upwork className="w-4 h-4" />
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                      {t.testimonials.verified}
                    </span>
                  </a>
                )}
              </div>

              {/* Date */}
              <div className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                {testimonial.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to view more on Upwork */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.upwork.com/freelancers/~01fd4e5b112fcd6443"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            <StatsIcons.Upwork className="w-5 h-5" />
            {t.testimonials.viewMore}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
