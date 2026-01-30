"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronRight } from "lucide-react";

export type ExperienceProjectItem = {
  id: string;
  title: string;
  description: string;
  /** Full case study page path e.g. /project/icon-v1 */
  caseStudyHref?: string;
  /** If set, show full case study (Problem, Solution, Conclusion) when expanded */
  caseStudy?: {
    problem: string;
    solution: string;
    conclusion: string;
    projectLink?: string;
    image?: string;
    imageAlt?: string;
  };
};

export function ExperienceProjectCards({
  projects,
}: {
  projects: ExperienceProjectItem[];
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (projects.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
        Projects I worked on
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 max-w-xl">
        Click a project to reveal the case study.
      </p>

      <ul className="space-y-3">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <li
              key={project.id}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 overflow-hidden shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Clickable summary — always visible */}
              <button
                type="button"
                onClick={() =>
                  setExpandedId(isExpanded ? null : project.id)
                }
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 group"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:underline decoration-2 underline-offset-2">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <span
                  className={`flex-shrink-0 p-1 rounded-full text-neutral-500 dark:text-neutral-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>

              {/* Expanded details — revealed on click */}
              {isExpanded && (
                <div className="border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                  {project.caseStudy ? (
                    <div className="p-4 md:p-5 space-y-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          Problem
                        </span>
                        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {project.caseStudy.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          Solution
                        </span>
                        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {project.caseStudy.solution}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          Outcome
                        </span>
                        <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {project.caseStudy.conclusion}
                        </p>
                      </div>
                      {project.caseStudy.image && (
                        <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={project.caseStudy.image}
                            alt={project.caseStudy.imageAlt ?? project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 672px) 100vw, 672px"
                          />
                        </div>
                      )}
                      {/* CTAs inside expanded area */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.caseStudyHref && (
                          <Link
                            href={project.caseStudyHref}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                          >
                            View {project.title} case study
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        )}
                        {project.caseStudy.projectLink && (
                          <a
                            href={project.caseStudy.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                          >
                            Visit site
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 md:p-5">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                        Case study coming soon.
                      </p>
                      <Link
                        href={project.caseStudyHref ?? "/#Projects"}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        View portfolio
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
