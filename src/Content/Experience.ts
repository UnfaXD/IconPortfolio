export type ExperienceEntry = {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  subRoles?: string[];
  description: string;
  tags: string[];
  /** Optional: link to projects section or filtered projects for this company */
  projectsHref?: string;
};

export const ExperienceData: ExperienceEntry[] = [
  {
    id: "1",
    dateRange: "2025 — Present",
    title: "Senior Software Engineer & UI/UX Designer",
    company: "Orion Systems & Design",
    companyUrl: "https://www.orionsystems.co.rw/",
    description:
      "Experienced engineer and UI/UX designer focused on changing system efficiency through intuitive design and robust system maintenance. Build and maintain the Banking Systems  and e-Government Platforms with clean, scalable code and user-centered interfaces that make complex workflows simple.",
    tags: ["Angular", "ReactJS", "Figma"],
    projectsHref: "/#Products",
  },
  {
    id: "2",
    dateRange: "2023 — Present",
    title: "Lead Engineer & Full Stack Engineer",
    company: "Unfazed XD",
    companyUrl: "https://iconns.netlify.app/",
    description:
      "Founded a digital product company that has successfully delivered 10+ client projects while simultaneously building and operating proprietary products. Led the development of an all-in-one real estate platform and Lunaroot, a streetwear startup, with a strong focus on scalable architecture, thoughtful design systems, and user-driven product development.",
    tags: [
      "Fullstack",
      "Management",
      "Lead",
      "Founder",
    ],
    projectsHref: "/#Products",
  },
  {
    id: "3",
    dateRange: "2024 March — Jan 2025",
    title: "Software Engineer & Blockchain Developer",
    company: "Blockchain Tech Solutions",
    companyUrl: "https://www.blockchaintechsolutions.co.rw/",
    description:
      "Developed and maintained the core functionality of the Blockchain Tech Solutions platform, including the Gaming Platforms and the NFT Management System.",
    tags: ["NestJS", "Microservices", "Blockchain", "Smart Contracts", "NextJS"],
    projectsHref: "/#Products",
  },
  {
    id: "4",
    dateRange: "2024 March — December 2024",
    title: "Frontend & Mobile Developer",
    company: "Amalitech",
    companyUrl: "https://www.amalitech.com/",
    description:
      "Developed and maintained the core functionality of the Amalitech products, including the outsourced projects and the internal tools.",
    tags: ["React Native", "Angular JS", "Signals",],
    projectsHref: "/#Products",
  }
];
