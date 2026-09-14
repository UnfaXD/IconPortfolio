"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Briefcase, FolderKanban, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import type { ComponentType } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Experience", href: "/#Experience", icon: Briefcase },
  { label: "Projects", href: "/#Projects", icon: FolderKanban },
  { label: "Contact", href: "mailto:danny.reco2002@gmail.com", icon: Mail },
];

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const next = isDark ? "light" : "dark";

  const handleClick = () => {
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage may be unavailable (private mode, SSR)
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Switch to ${next} theme`}
      className="flex items-center justify-center rounded-full p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden />
      ) : (
        <Moon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className="group flex items-center gap-2 rounded-full px-2.5 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors"
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      <span className="hidden md:inline">{item.label}</span>
    </Link>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-4 sm:top-6 md:top-10 inset-x-0 z-50 px-3 flex justify-center",
        className,
      )}
    >
      <nav
        aria-label="Primary"
        className="rounded-full border border-transparent dark:border-white/[0.15] bg-white/90 dark:bg-black/80 backdrop-blur shadow-lg flex items-center gap-1 px-2 py-1.5"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
        <div className="mx-1 h-5 w-px bg-neutral-200 dark:bg-neutral-700" aria-hidden />
        <ThemeSwitch />
      </nav>
    </div>
  );
}

export default Navbar;
