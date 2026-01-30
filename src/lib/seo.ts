/**
 * Central SEO config. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reconfort.vercel.app";

export const defaultSeo = {
  title:
    "Reconfort Daniel — Senior Software Engineer & UI/UX Designer | Full-Stack Developer Portfolio",
  shortTitle: "Reconfort Daniel",
  description:
    "Senior Software Engineer & UI/UX Designer. Full-stack developer building scalable web apps, SaaS, and startup products. React, Next.js, Angular, system design. Hire for startups & tech teams. Based in Kigali, Rwanda.",
  keywords: [
    "Software Engineer Portfolio",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "UI/UX Engineer",
    "Startup Founder Portfolio",
    "SaaS Developer",
    "Tech Consultant",
    "System Design Expert",
    "Scalable Web Applications",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "UI/UX Designer",
    "Product Designer",
    "Blockchain Developer",
    "Microservices",
    "Smart Contracts",
    "Web Development",
    "Kigali Rwanda Developer",
  ],
  author: "Reconfort Daniel",
  locale: "en_US",
  imagePath: "/team/me.jpeg",
  imageAlt: "Reconfort Daniel - Senior Software Engineer & UI/UX Designer",
  twitterHandle: "@Reconfort_",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** JSON-LD Person schema for the portfolio owner */
export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: defaultSeo.author,
    jobTitle: "Senior Software Engineer & UI/UX Designer",
    description: defaultSeo.description,
    url: siteUrl,
    image: absoluteUrl(defaultSeo.imagePath),
    sameAs: [
      "https://www.linkedin.com/in/reconfort-daniel/",
      "https://github.com/Reconfort",
      "https://dribbble.com/Netfort",
      "https://x.com/Reconfort_",
      "https://www.instagram.com/reconfortdaniel/",
      "https://www.behance.net/reconfortdaniel",
    ],
    knowsAbout: defaultSeo.keywords,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
  };
}

/** JSON-LD WebSite schema with SearchAction for sitelinks */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultSeo.shortTitle,
    description: defaultSeo.description,
    url: siteUrl,
    author: { "@id": `${siteUrl}/#person` },
    inLanguage: defaultSeo.locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** JSON-LD CreativeWork schema for a single project (use on project/[slug] page) */
export function buildProjectSchema(project: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: project.url,
    ...(project.image && { image: project.image }),
    ...(project.datePublished && { datePublished: project.datePublished }),
    author: { "@id": `${siteUrl}/#person` },
  };
}

/** JSON-LD ItemList for portfolio projects (use on homepage) */
export function buildPortfolioItemListSchema(
  projects: { title: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    description: "Software engineering and UI/UX projects by Reconfort Daniel",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        url: p.url,
      },
    })),
  };
}
