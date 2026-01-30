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

export const ExperienceData: ExperienceEntry[] = [
  {
    id: "1",
    dateRange: "2025 — Present",
    title: "Senior Software Engineer & UI/UX Designer",
    company: "Orion Systems & Design",
    companySlug: "orion-systems-design",
    companyUrl: "https://www.orionsystems.co.rw/",
    companyDescription:
      "Orion Systems & Design builds software for banking and e-Government in Rwanda, with a focus on secure, scalable platforms.",
    companyLinks: [
      { label: "Website", url: "https://www.orionsystems.co.rw/" },
      { label: "Careers", url: "https://www.orionsystems.co.rw/careers" },
    ],
    description:
      "Experienced engineer and UI/UX designer focused on changing system efficiency through intuitive design and robust system maintenance. Build and maintain the Banking Systems and e-Government Platforms with clean, scalable code and user-centered interfaces that make complex workflows simple.",
    tags: ["Angular", "ReactJS", "Figma"],
    projectIds: [],
  },
  {
    id: "2",
    dateRange: "2023 — Present",
    title: "Lead Engineer & Full Stack Engineer",
    company: "Unfazed XD",
    companySlug: "unfazed-xd",
    companyUrl: "https://iconns.netlify.app/",
    companyDescription:
      "Unfazed XD is a digital product studio building web and mobile products for startups and brands.",
    companyLinks: [
      { label: "Website", url: "https://iconns.netlify.app/" },
      { label: "Dribbble", url: "https://dribbble.com" },
    ],
    description:
      "Founded a digital product company that has successfully delivered 10+ client projects while simultaneously building and operating proprietary products. Led the development of an all-in-one real estate platform and Lunaroot, a streetwear startup, with a strong focus on scalable architecture, thoughtful design systems, and user-driven product development.",
    tags: ["Fullstack", "Management", "Lead", "Founder"],
    projectIds: ["1", "2"],
  },
  {
    id: "3",
    dateRange: "2024 March — Jan 2025",
    title: "Software Engineer & Blockchain Developer",
    company: "Blockchain Tech Solutions",
    companySlug: "blockchain-tech-solutions",
    companyUrl: "https://www.blockchaintechsolutions.co.rw/",
    companyDescription:
      "Blockchain Tech Solutions develops blockchain-based products including gaming and NFT platforms.",
    companyLinks: [{ label: "Website", url: "https://www.blockchaintechsolutions.co.rw/" }],
    description:
      "Developed and maintained the core functionality of the Blockchain Tech Solutions platform, including the Gaming Platforms and the NFT Management System.",
    tags: ["NestJS", "Microservices", "Blockchain", "Smart Contracts", "NextJS"],
    projectIds: [],
  },
  {
    id: "4",
    dateRange: "2024 March — December 2024",
    title: "Frontend & Mobile Developer",
    company: "Amalitech",
    companySlug: "amalitech",
    companyUrl: "https://www.amalitech.com/",
    companyDescription:
      "Amalitech is an outsourcing and software development company with offices in Africa and Europe.",
    companyLinks: [
      { label: "Website", url: "https://www.amalitech.com/" },
      { label: "Careers", url: "https://www.amalitech.com/careers" },
    ],
    description:
      "Developed and maintained the core functionality of the Amalitech products, including the outsourced projects and the internal tools.",
    tags: ["React Native", "Angular JS", "Signals"],
    projectIds: [],
  },
];
