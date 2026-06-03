import type { LucideIcon } from "lucide-react";
import { Users, Zap, Accessibility, Workflow } from "lucide-react";

export type DifferentiatorItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Optional real screenshot/illustration. When omitted, the icon is used. */
  image?: string;
};

export const Differentiator1: DifferentiatorItem = {
  title: "User-first, not feature-first",
  description:
    "I start from real problems and usage, not a checklist. Every flow is tested with real users so we ship what actually moves the needle.",
  icon: Users,
};

export const Differentiator2: DifferentiatorItem = {
  title: "Speed without cutting corners",
  description:
    "I ship fast with clean, maintainable code—strong typing, tests, and docs so the next person (or future you) can move quickly too.",
  icon: Zap,
};

export const Differentiator3: DifferentiatorItem = {
  title: "Accessibility by default",
  description:
    "Inclusive design and semantic, keyboard-friendly UIs are part of the process from day one, not a later fix.",
  icon: Accessibility,
};

export const Differentiator4: DifferentiatorItem = {
  title: "End-to-end ownership",
  description:
    "From discovery and design to APIs and deployment—I own the full stack so you get one clear point of contact and fewer handoffs.",
  icon: Workflow,
};
