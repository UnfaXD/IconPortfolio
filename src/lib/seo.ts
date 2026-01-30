/**
 * Central SEO config. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reconfort.vercel.app";

export const defaultSeo = {
  title: "Reconfort Daniel — Software Engineer & UI/UX Designer",
  shortTitle: "Reconfort Daniel",
  description:
    "Software Engineer and UI/UX Designer building user-friendly, efficient products. Experience in full-stack development, design systems, and product leadership. Based in Kigali, Rwanda.",
  keywords: [
    "Software Engineer",
    "UI/UX Designer",
    "Full Stack Developer",
    "React",
    "Angular",
    "Next.js",
    "NestJS",
    "Product Designer",
    "Blockchain Developer",
    "Microservices",
    "Smart Contracts",
    "Blockchain",
    "Blockchain Solutions",
    "Blockchain Technology",
    "Blockchain Development",
    "Blockchain Solutions",
    "Blockchain Technology",
    "Kigali",
    "Rwanda",
    "Web Development",
    "Frontend",
  ],
  author: "Reconfort Daniel",
  locale: "en_US",
  imagePath: "/team/me.jpeg",
  imageAlt: "Reconfort Daniel - Software Engineer & UI/UX Designer",
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
    jobTitle: "Software Engineer & UI/UX Designer",
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
