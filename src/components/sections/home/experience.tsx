"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExperienceData } from "@/Content/Experience";

const RESUME_URL = "#";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      id="Experience"
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Experience
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-xl">
          Companies I’ve worked for and what I did there.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {ExperienceData.map((entry, index) => (
          <div
            key={entry.id}
            className="flex justify-start pt-8 md:pt-12 gap-6 md:gap-10 mb-4"
          >
            {/* Left: date range */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full shrink-0">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center z-10">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <p className="text-sm md:text-base font-medium text-neutral-500 dark:text-neutral-400 pl-20 md:pl-20 w-full">
                {entry.dateRange}
              </p>
            </div>

            {/* Right: job details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20 pr-4 md:pl-4 w-full min-w-0 group"
            >
              <div className="relative p-6 md:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/20 border border-neutral-200 dark:border-neutral-800/20 hover:border-neutral-300 dark:hover:border-neutral-700/50 transition-all duration-300 space-y-4">
                {/* Mobile date */}
                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base md:hidden font-medium">
                  {entry.dateRange}
                </p>

                {/* Title and Company */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-tight">
                      {entry.title}
                      {entry.company ? (
                        <>
                          <span className="text-neutral-400 dark:text-neutral-500 font-normal mx-1.5">
                            ·
                          </span>
                          {entry.companyUrl && entry.companyUrl !== "#" ? (
                            <a
                              href={entry.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors duration-200 group/link"
                            >
                              {entry.company}
                              <ExternalLink className="h-4 w-4 shrink-0 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
                            </a>
                          ) : (
                            <span className="font-bold text-neutral-900 dark:text-white">
                              {entry.company}
                            </span>
                          )}
                        </>
                      ) : null}
                    </h3>
                  </div>

                  {/* Sub-roles */}
                  {entry.subRoles && entry.subRoles.length > 0 && (
                    <div className="flex flex-col gap-1 pt-1">
                      {entry.subRoles.map((role, i) => (
                        <p
                          key={i}
                          className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium"
                        >
                          {role}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed max-w-3xl">
                  {entry.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {entry.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Projects Link */}
                {entry.projectsHref && (
                  <Link
                    href={entry.projectsHref}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-semibold text-neutral-700 dark:text-neutral-700 bg-neutral-100 dark:bg-lime-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 group/link"
                  >
                    <span>View {entry.company} Experience</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-slate-500 via-lime-800 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20">
        <motion.a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 group"
        >
          <span>View Full Résumé</span>
          <ExternalLink className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </motion.a>
      </div> */}
    </section>
  );
}
