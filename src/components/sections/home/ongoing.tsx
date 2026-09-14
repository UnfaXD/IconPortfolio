import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";

const ongoingProjects = ProjectData.filter(
  (p) => p.content.status === "ongoing",
);

export function Ongoing() {
  if (ongoingProjects.length === 0) return null;

  return (
    <section
      id="Ongoing"
      className="relative w-full overflow-hidden py-16 md:py-24 bg-neutral-50 dark:bg-[#0a0a0a]"
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <header className="mb-10 md:mb-14 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse"
              aria-hidden
            />
            Ongoing
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white font-sans tracking-tight scroll-mt-24">
            Building in public
          </h2>
          <p className="mt-3 text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            Live products I&apos;m actively shipping—each one standalone. More
            soon.
          </p>
        </header>

        <ul className="grid gap-10 md:gap-12 md:grid-cols-2 list-none p-0 m-0">
          {ongoingProjects.map((project, index) => {
            const { content } = project;
            const caseStudyHref = `/project/${slugify(project.title)}`;
            const liveHref = content.projectLink ?? caseStudyHref;
            const isExternal = Boolean(content.projectLink);
            const cover =
              content.coverImage ?? content.ProjectArray[0]?.image ?? "";

            return (
              <li key={project.id} className="group flex flex-col">
                {/* Preview — browser frame, no badge over the screenshot */}
                <a
                  href={liveHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="relative block overflow-hidden rounded-xl bg-neutral-200/80 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 transition-[ring-color,transform] duration-300 group-hover:ring-neutral-300 dark:group-hover:ring-neutral-700"
                  aria-label={`Open ${project.title} live site`}
                >
                  <div
                    className="flex items-center gap-1.5 border-b border-neutral-200/80 dark:border-neutral-800 px-3 py-2"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="ml-2 truncate text-[10px] font-medium tracking-wide text-neutral-400 dark:text-neutral-500">
                      {content.projectLink
                        ?.replace(/^https?:\/\//, "")
                        .replace(/\/$/, "") ?? project.title}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                    {cover && (
                      <Image
                        src={cover}
                        alt={
                          content.ProjectArray[0]?.imageAlt ?? project.title
                        }
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                    )}
                    <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm">
                        Open site
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Meta + copy — light, no boxed card body */}
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    <span className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-200">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-lime-400"
                        aria-hidden
                      />
                      Live
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-700" aria-hidden>
                      /
                    </span>
                    <span>{content.category ?? "Product"}</span>
                  </div>

                  <h3 className="mt-2 text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    <Link
                      href={caseStudyHref}
                      className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-md">
                    {content.title}
                  </p>

                  <div className="mt-5 flex items-center gap-5">
                    {content.projectLink && (
                      <a
                        href={content.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 dark:text-white underline-offset-4 hover:underline"
                      >
                        Visit live
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                    )}
                    <Link
                      href={caseStudyHref}
                      className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
                    >
                      Case study
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
