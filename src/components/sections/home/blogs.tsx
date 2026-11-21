"use client";
import React from "react";
import { Card, Carousel } from "@/components/ui/blog-carousel";
import { ProjectData } from "@/Content/Project";

interface FigmaContentProps {
  figma?: string;
  prototype?: string;
}

const FigmaContent = ({ figma, prototype }: FigmaContentProps) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 p-2 md:p-4">
      {figma && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Design
          </p>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 shadow-sm">
            <iframe
              className="w-full min-h-[320px] md:min-h-[420px] border-0"
              style={{ aspectRatio: "16/10" }}
              src={figma}
              loading="lazy"
              referrerPolicy="no-referrer"
              allowFullScreen
              title="Figma design"
            />
          </div>
        </div>
      )}
      {prototype && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Prototype
          </p>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 shadow-sm">
            <iframe
              className="w-full min-h-[320px] md:min-h-[420px] border-0"
              style={{ aspectRatio: "16/10" }}
              src={prototype}
              loading="lazy"
              referrerPolicy="no-referrer"
              allowFullScreen
              title="Figma prototype"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export function Blogs() {
  const cards = ProjectData.filter(
    (p) => p.content.coverImage && p.content.status !== "ongoing",
  ).map(
    (project, index) => (
      <Card
        key={project.id}
        index={index}
        layout={true}
        card={{
          category: project.content.category ?? "Project",
          title: project.title,
          src: project.content.coverImage!,
          content: (
            <FigmaContent
              figma={project.content.figmaEmbedUrl}
              prototype={project.content.prototypeEmbedUrl}
            />
          ),
        }}
      />
    ),
  );

  return (
    <section
      id="Projects"
      className="relative w-full overflow-x-clip py-8 md:py-12 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-[#0a0a0a] dark:to-[#0a0a0a]"
    >
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
        linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />


      <Carousel
        items={cards}
        header={
          <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <header className="mb-2 md:mb-4">
              <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                Portfolio
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white font-sans tracking-tight max-w-3xl scroll-mt-24">
                Software Engineer & UI/UX Projects
              </h2>
              <p className="mt-3 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl [@media(max-height:700px)]:hidden">
                Web apps, SaaS, and design systems—from full-stack builds to Figma
                prototypes across education, health, and product.
              </p>
            </header>
          </div>
        }
      />
    </section>
  );
}
