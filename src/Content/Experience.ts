import { ProjectData } from "./Project";
import { slugify } from "@/lib/slugify";

export type ExperienceEntry = {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  /** URL-safe slug for /experience/[slug] */
  companySlug: string;
  companyUrl?: string;
  /** Short blurb about the company (for company page) */
  companyDescription?: string;
  /** Image path for IntroScroll hero (e.g. /assets/company.webp) */
  companyImage?: string;
  /** Links to show on company page (e.g. Website, Careers, LinkedIn) */
  companyLinks?: { label: string; url: string }[];
  subRoles?: string[];
  description: string;
  tags: string[];
  /** Project IDs from ProjectData that were done at this company */
  projectIds?: string[];
};

/** Resolved project for display on experience page (from ProjectData via projectIds) */
export type ExperienceProjectDisplay = {
  id: string;
  title: string;
  description: string;
  caseStudyHref?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    conclusion: string;
    projectLink?: string;
    image?: string;
    imageAlt?: string;
  };
};

/** Resolve projects for an experience entry from ProjectData. Returns empty array when projectIds is empty. */
export function getProjectsForEntry(
  entry: ExperienceEntry
): ExperienceProjectDisplay[] {
  const projectIds = entry.projectIds ?? [];
  if (projectIds.length === 0) return [];
  const items: ExperienceProjectDisplay[] = [];
  for (const id of projectIds) {
    const p = ProjectData.find((proj) => proj.id === id);
    if (!p) continue;
    const projectSlug = slugify(p.title);
    const description =
      typeof p.content.title === "string"
        ? p.content.title
        : (p.content.Problem?.slice(0, 120) ?? "") +
          (p.content.Problem && p.content.Problem.length > 120 ? "…" : "");
    items.push({
      id: p.id,
      title: p.title,
      description,
      caseStudyHref: `/project/${projectSlug}`,
      caseStudy: {
        problem: p.content.Problem ?? "",
        solution: p.content.Solution ?? "",
        conclusion: p.content.Conclusion ?? "",
        projectLink: p.content.projectLink,
        image: p.content.ProjectArray?.[0]?.image,
        imageAlt: p.content.ProjectArray?.[0]?.imageAlt,
      },
    });
  }
  return items;
}

export const ExperienceData: ExperienceEntry[] = [
  {
    id: "2",
    dateRange: "Mar 2024 — Present",
    title: "Founder & Lead Engineer",
    company: "Unfazed (formerly Icon)",
    companySlug: "unfazed-xd",
    companyDescription:
      "Unfazed is a digital product studio in Kigali, founded by Reconfort Daniel. It designs and builds web and mobile products for startups and brands, and runs products of its own.",
    description:
      "Founded Unfazed (formerly Icon). I lead engineering, from architecture and code standards to deployment, and own product strategy and client work. The studio has delivered 10+ client projects while building its own products: Estatify (property management SaaS), PesaPulse (personal finance app), e-Piggy (family savings wallet), ServerOS (native macOS server control) and ChapChap Lending.",
    tags: ["Founder", "Lead Engineer", "Full Stack", "Product"],
    projectIds: ["21", "22", "23", "24", "19", "20", "10", "1", "2", "3", "4", "5", "6", "7"],
  },
  {
    id: "1",
    dateRange: "Jun 2025 — Present",
    title: "Senior Software Engineer",
    company: "Orion Systems & Design",
    companySlug: "orion-systems-design",
    companyUrl: "https://orionco.vercel.app/",
    companyDescription:
      "Orion Systems & Design builds software for banking and e-Government in Rwanda, with a focus on secure, scalable platforms.",
    companyLinks: [
      { label: "Website", url: "https://www.orionsystems.co.rw/" },
      { label: "Instagram", url: "https://www.instagram.com/orion_systems_rw/" },
    ],
    description:
      "Build and maintain banking systems and e-Government platforms, from customer portals to back-office tools, with clean, scalable code and interfaces that make complex workflows simple. I also lead UI/UX design on the products I work on.",
    tags: ["Angular", "React", "Figma", "UI/UX"],
    projectIds: ["8", "9"],
  },
  {
    id: "3",
    dateRange: "Mar 2024 — Jan 2025",
    title: "Full Stack Engineer",
    company: "Blockchain Tech Solutions",
    companySlug: "blockchain-tech-solutions",
    companyUrl: "https://blockchaingamealliance.net/",
    companyDescription:
      "Blockchain Tech Solutions develops blockchain-based products including gaming and NFT platforms.",
    companyLinks: [{ label: "Website", url: "https://blockchaingamealliance.net/" }],
    description:
      "Remote, with a Doha-based team. Built NestJS microservices on Kafka for event-driven, high-throughput systems, and Next.js and React front ends, including blockchain gaming platforms (RC27) that integrate smart contracts and Web3.",
    tags: ["NestJS", "Kafka", "Microservices", "Next.js", "Smart Contracts"],
    projectIds: [],
  },
  {
    id: "4",
    dateRange: "Mar 2024 — Dec 2024",
    title: "Frontend Engineer",
    company: "AmaliTech",
    companySlug: "amalitech",
    companyUrl: "https://www.amalitech.com/",
    companyDescription:
      "AmaliTech is an outsourcing and software development company with offices in Africa and Europe.",
    companyLinks: [
      { label: "Website", url: "https://www.amalitech.com/" },
      { label: "Careers", url: "https://www.amalitech.com/careers" },
    ],
    description:
      "Built scalable enterprise single-page applications in Angular, TypeScript and RxJS, with state management in NgRx, accessible UI components, secure REST integrations and Jest-tested code.",
    tags: ["Angular", "TypeScript", "RxJS", "NgRx"],
    projectIds: [],
  },
  {
    id: "5",
    dateRange: "Jun 2024 — Dec 2024",
    title: "Mobile App Developer",
    company: "Park & Pick",
    companySlug: "park-and-pick",
    companyDescription: "Park & Pick is a Kigali startup building a mobile app for its customers.",
    description:
      "Built a cross-platform iOS and Android app in React Native and TypeScript, with reusable, accessible UI components, API integrations and performance work for low-bandwidth users.",
    tags: ["React Native", "TypeScript", "UI/UX"],
    projectIds: [],
  },
  {
    id: "6",
    dateRange: "Feb 2022 — Aug 2024",
    title: "Software Engineer",
    company: "University of Rwanda",
    companySlug: "university-of-rwanda",
    companyDescription: "Rwanda's national public university, where I also completed my degree.",
    description:
      "Worked as a software engineer at the university while studying there. Built full-stack web applications in React, TypeScript, Node.js and Express, including REST APIs and back-end integrations, in Agile teams with Git and code review.",
    tags: ["React", "Node.js", "Express", "TypeScript"],
    projectIds: [],
  },
];
