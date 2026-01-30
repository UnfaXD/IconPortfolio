import {
  siteUrl,
  buildPersonSchema,
  buildWebSiteSchema,
  buildPortfolioItemListSchema,
  absoluteUrl,
} from "@/lib/seo";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";

export function JsonLd() {
  const person = buildPersonSchema();
  const website = buildWebSiteSchema();

  // Give Person an @id so WebSite can reference it
  const personWithId = { ...person, "@id": `${siteUrl}/#person` };

  const portfolioList = buildPortfolioItemListSchema(
    ProjectData.map((p) => ({
      title: p.title,
      url: absoluteUrl(`/project/${slugify(p.title)}`),
    }))
  );

  const combined = [personWithId, website, portfolioList];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combined) }}
    />
  );
}
