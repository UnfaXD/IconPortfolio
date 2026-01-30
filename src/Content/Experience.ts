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
    dateRange: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    companyUrl: "https://www.klaviyo.com",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tags: ["JavaScript", "TypeScript", "React", "Storybook"],
    projectsHref: "/#Products",
  },
  {
    id: "2",
    dateRange: "2018 — 2024",
    title: "Lead Engineer",
    company: "Upstatement",
    companyUrl: "https://www.upstatement.com",
    subRoles: ["Senior Engineer", "Engineer"],
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tags: [
      "JavaScript",
      "TypeScript",
      "HTML & SCSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
    projectsHref: "/#Products",
  },
  {
    id: "3",
    dateRange: "July — Dec 2017",
    title: "UI Engineer Co-op",
    company: "Apple",
    companyUrl: "https://www.apple.com",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    tags: ["MusicKit.js", "Ember", "SCSS", "JavaScript"],
    projectsHref: "/#Products",
  },
  {
    id: "4",
    dateRange: "2016 — 2017",
    title: "Developer",
    company: "Scout Studio",
    companyUrl: "#",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    tags: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
    projectsHref: "/#Products",
  },
  {
    id: "5",
    dateRange: "July — Dec 2016",
    title: "Software Engineer Co-op",
    company: "Starry",
    companyUrl: "https://starry.com",
    description:
      "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
    tags: ["Android App", "Cordova", "Backbone", "JavaScript", "CSS"],
    projectsHref: "/#Products",
  },
  {
    id: "6",
    dateRange: "July — Dec 2015",
    title: "Creative Technologist Co-op",
    company: "MullenLowe U.S.",
    companyUrl: "#",
    description:
      "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    projectsHref: "/#Products",
  },
];
