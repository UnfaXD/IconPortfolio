"use client";
import { Card, Carousel } from "@/components/ui/blog-carousel";
import React from "react";

export function Blogs() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section
      id="Projects"
      className="relative w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-[#0a0a0a] dark:to-[#0a0a0a]"
    >
      {/* Subtle grid pattern — visible in center only, fades to 0 at top and bottom */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
        linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <header className="mb-4 md:mb-6">
          <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Portfolio
          </span>
          <h2 id="Projects" className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white font-sans tracking-tight max-w-3xl scroll-mt-24">
            Software Engineer & UI/UX Projects
          </h2>
          <p className="mt-3 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
            Web apps, SaaS, and design systems—from full-stack builds to Figma
            prototypes across education, health, and product.
          </p>
        </header>
      </div>

      <div className="relative px-0 md:px-4">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

interface DummyContentProps {
  figma?: string;
  prototype?: string;
}

const DummyContent = ({ figma, prototype }: DummyContentProps) => {
  return (
    <div
      key="dummy-content"
      className="flex flex-col gap-6 md:gap-8 p-2 md:p-4"
    >
      {figma && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Design
          </p>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 shadow-sm">
            <iframe
              className="w-full min-h-[320px] md:min-h-[420px] border-0"
              style={{ aspectRatio: "16/10" }}
              src={figma}
              allowFullScreen
              title="Figma design"
            />
          </div>
        </div>
      )}
      {prototype && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Prototype
          </p>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 shadow-sm">
            <iframe
              className="w-full min-h-[320px] md:min-h-[420px] border-0"
              style={{ aspectRatio: "16/10" }}
              src={prototype}
              allowFullScreen
              title="Figma prototype"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const data = [
  {
    category: "Education",
    title: "You learn more with TooNation",
    src: "/assets/too.jpg",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/O2ISTHLzYrPkpu76Z3rwwM/Too-Nation?node-id=0-1&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/O2ISTHLzYrPkpu76Z3rwwM/Too-Nation?page-id=0%3A1&node-id=1-2&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Health",
    title: "Enhance female menstruation with Tantine.",
    src: "/assets/tantine.jpg",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/JGIC4cyjI1okmwN3ST3ye9/Tantine-app?node-id=1-4&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/JGIC4cyjI1okmwN3ST3ye9/Tantine-app?node-id=485-2177&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=485%3A2185&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Creative",
    title: "Exprole Trands with Lennox",
    src: "/assets/lennox.jpg",
    content: (
      <DummyContent
        figma={
          "htps://embed.figma.com/design/CTw5vIPD4fN6OWDtrYl8c4/Lennox?node-id=6-45&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/CTw5vIPD4fN6OWDtrYl8c4/Lennox?node-id=8-88&scaling=scale-down&content-scaling=fixed&page-id=6%3A44&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Education",
    title: "Univease",
    src: "/assets/univease.jpg",
    figma:
      "https://embed.figma.com/design/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=8-44&embed-host=share",
    prototype:
      "https://embed.figma.com/proto/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=185-71&p=f&scaling=scale-down&content-scaling=fixed&page-id=8%3A44&starting-point-node-id=185%3A71&embed-host=share",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=8-44&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=185-71&p=f&scaling=scale-down&content-scaling=fixed&page-id=8%3A44&starting-point-node-id=185%3A71&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Agency",
    title: "Agakoti VPN",
    src: "/assets/agakoti.jpg",
    figma:
      "https://embed.figma.com/design/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?node-id=4-67&embed-host=share",
    prototype:
      "https://embed.figma.com/proto/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?page-id=4%3A67&node-id=10-51&starting-point-node-id=10%3A51&scaling=scale-down&content-scaling=fixed&embed-host=share",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?node-id=4-67&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?page-id=4%3A67&node-id=10-51&starting-point-node-id=10%3A51&scaling=scale-down&content-scaling=fixed&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Tourist",
    title: "Timeline Travel & Tours",
    src: "/assets/ttt.jpg",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/99IzCQjbkpP2B3hpJgX9o7/TimelineTravel%26Tours?node-id=0-1&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/99IzCQjbkpP2B3hpJgX9o7/TimelineTravel%26Tours?node-id=1-4&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Hiring",
    title: "Obsessed with Capital",
    src: "/assets/owc.jpg",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/QpXKE62f9U1ZjvFo6w7RGJ/OWC?node-id=3-3&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/QpXKE62f9U1ZjvFo6w7RGJ/OWC?page-id=3%3A3&node-id=64-585&p=f&viewport=-495%2C298%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=64%3A585&embed-host=share"
        }
      />
    ),
  },
  {
    category: "Education",
    title: "History Interaction Timeline",
    src: "/assets/hit.jpg",
    content: (
      <DummyContent
        figma={
          "https://embed.figma.com/design/tibbspW0iNcSqw49ebu5tx/History-Interaction?node-id=48-2&embed-host=share"
        }
        prototype={
          "https://embed.figma.com/proto/tibbspW0iNcSqw49ebu5tx/History-Interaction?node-id=106-31182&scaling=min-zoom&content-scaling=fixed&page-id=48%3A2&embed-host=share"
        }
      />
    ),
  },
];
