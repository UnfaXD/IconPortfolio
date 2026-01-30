import { IntroScroll } from "@/components/sections/caseStudy/introScroll";
import { Details } from "@/components/sections/caseStudy/details";
import { Testimonials } from "@/components/sections/home/testimonials";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";
import { Metadata } from "next";
import {
  absoluteUrl,
  defaultSeo,
  buildProjectSchema,
} from "@/lib/seo";

/** Always render project case study from current ProjectData (dynamic, not static snapshot) */
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ProjectData.find((p) => slugify(p.title) === slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  const title = project.title;
  const description =
    typeof project.content.title === "string"
      ? project.content.title
      : "Case study and project details.";
  const url = absoluteUrl(`/project/${slug}`);
  const rawImage = project.content.ProjectArray?.[0]?.image;
  const imageUrl =
    rawImage && rawImage.startsWith("http")
      ? rawImage
      : absoluteUrl(rawImage ?? defaultSeo.imagePath);
  const keywords = [
    project.title,
    "Software Engineer Portfolio",
    "UI/UX Case Study",
    "Web Development",
    "Full-Stack Project",
    ...(project.content.Problem?.split(" ").slice(0, 5) ?? []),
  ].filter(Boolean);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        { url: imageUrl, width: 1200, height: 630, alt: project.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = ProjectData.find((p) => slugify(p.title) === slug);

  if (!project) {
    return (
      <h1 className="text-center w-full h-full flex-center font-bold">
        Project not found
      </h1>
    );
  }

  const projectUrl = absoluteUrl(`/project/${slug}`);
  const description =
    typeof project.content.title === "string"
      ? project.content.title
      : project.content.Problem ?? project.title;
  const rawImage = project.content.ProjectArray?.[0]?.image;
  const imageUrl =
    rawImage && rawImage.startsWith("http")
      ? rawImage
      : absoluteUrl(rawImage ?? defaultSeo.imagePath);
  const projectSchema = buildProjectSchema({
    title: project.title,
    description,
    url: projectUrl,
    image: imageUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <section className="bg-neutral-200 dark:bg-neutral-950 p-6">
        <IntroScroll
          title={project.title}
          image={project.content.ProjectArray[0].image}
          subTitle={project.content.title}
        />
        <Details
          problem={project.content.Problem}
          solution={project.content.Solution}
          conclusion={project.content.Conclusion}
          gallery={project.content.ProjectArray}
        />
        <Testimonials />
      </section>
    </>
  );
}