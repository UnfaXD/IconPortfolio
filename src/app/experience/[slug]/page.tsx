import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceData } from "@/Content/Experience";
import { Metadata } from "next";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Testimonials } from "@/components/sections/home/testimonials";
import { IntroScroll } from "@/components/sections/caseStudy/introScroll";

/** Dummy projects for "Projects I worked on" — replace with real projectIds/ProjectData when ready */
const DUMMY_PROJECTS = [
  {
    id: "d1",
    title: "Platform Redesign",
    description:
      "End-to-end redesign of the core product experience and design system.",
    href: "/#Products",
  },
  {
    id: "d2",
    title: "Internal Dashboard",
    description: "Analytics and operations dashboard for internal teams.",
    href: "/#Products",
  },
  {
    id: "d3",
    title: "Mobile App V2",
    description:
      "Native mobile app with offline support and push notifications.",
    href: "/#Products",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = ExperienceData.find((e) => e.companySlug === slug);
  return {
    title: entry ? `${entry.company} — Experience` : "Company Not Found",
    description: entry?.companyDescription,
  };
}

export default async function CompanyExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = ExperienceData.find((e) => e.companySlug === slug);

  if (!entry) {
    notFound();
  }

  const projects = DUMMY_PROJECTS;

  return (
    <>
      <section className="bg-neutral-200 dark:bg-neutral-950 p-6">
        <IntroScroll
          title={entry.company}
          subTitle={`${entry.dateRange} · ${entry.title}`}
          image={entry.companyImage ?? "/assets/linear1.webp"}
        />

        {entry.companyDescription && (
          <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 pb-12">
            <Link
              href="/#Experience"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Experience
            </Link>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {entry.companyDescription}
            </p>
          </div>
        )}

        {/* Main content with TracingBeam — like project Details */}
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative pb-10">
            {/* Links */}
            {entry.companyLinks?.length ||
            (entry.companyUrl && entry.companyUrl !== "#") ? (
              <div className="mb-10">
                <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                  Links
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {entry.companyLinks?.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                  {entry.companyUrl &&
                    entry.companyUrl !== "#" &&
                    !entry.companyLinks?.some(
                      (l) => l.url === entry.companyUrl,
                    ) && (
                      <li>
                        <a
                          href={entry.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                          Website
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    )}
                </ul>
              </div>
            ) : null}

            {/* What I did there */}
            <div className="mb-10">
              <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                What I did there
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 prose prose-sm dark:prose-invert max-w-2xl">
                {entry.description}
              </p>
              {entry.tags && entry.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-200 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Projects I worked on — dummy list */}
            <div className="mb-10">
              <h2 className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                Projects I worked on
              </h2>
              <ul className="space-y-4">
                {projects.map((project) => (
                  <li key={project.id}>
                    <Link
                      href={project.href}
                      className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-4 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:underline">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                            {project.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TracingBeam>
      </section>

      <Testimonials />
    </>
  );
}
