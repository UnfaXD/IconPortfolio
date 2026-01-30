import {
  siteUrl,
  buildPersonSchema,
  buildWebSiteSchema,
} from "@/lib/seo";

export function JsonLd() {
  const person = buildPersonSchema();
  const website = buildWebSiteSchema();

  // Give Person an @id so WebSite can reference it
  const personWithId = { ...person, "@id": `${siteUrl}/#person` };

  const combined = [personWithId, website];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combined) }}
    />
  );
}
