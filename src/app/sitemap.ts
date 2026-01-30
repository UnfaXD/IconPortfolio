import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { ExperienceData } from "@/Content/Experience";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");

  const routes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...ExperienceData.map((e) => ({
      url: `${base}/experience/${e.companySlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...ProjectData.map((p) => ({
      url: `${base}/project/${slugify(p.title)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
