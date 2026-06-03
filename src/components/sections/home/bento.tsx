import {
  Differentiator1,
  Differentiator2,
  Differentiator3,
  Differentiator4,
  type DifferentiatorItem,
} from "@/Content/Differentiators";
import Image from "next/image";
import type { ComponentType, ReactNode } from "react";

type BentoCardProps = {
  item: DifferentiatorItem;
  className?: string;
  /** Tailwind classes applied to the inner rounded panel (radius variants). */
  panelRadius?: string;
  /** Tailwind classes applied to the outer ring/shadow wrapper. */
  ringRadius?: string;
  /** Optional custom visual rendered below the copy. Falls back to a large icon. */
  visual?: ReactNode;
};

const IconFallback = ({ icon: Icon }: { icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }> }) => (
  <div className="flex flex-1 items-center justify-center p-10">
    <div
      className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-lime-400/20 via-neutral-200 to-neutral-300 dark:from-lime-400/20 dark:via-neutral-800 dark:to-neutral-900 ring-1 ring-neutral-200/60 dark:ring-neutral-700/60 shadow-lg"
      aria-hidden
    >
      <Icon className="h-14 w-14 text-neutral-700 dark:text-neutral-200" aria-hidden />
    </div>
  </div>
);

const BentoCard = ({ item, className, panelRadius, ringRadius, visual }: BentoCardProps) => {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className={`absolute inset-px rounded-lg bg-neutral-100 dark:bg-black ${panelRadius ?? ""}`} />
      <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${panelRadius ?? ""}`}>
        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
            {item.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 dark:text-neutral-300 max-lg:text-center">
            {item.description}
          </p>
        </div>
        {visual ?? (
          item.image ? (
            <div className="@container relative w-full grow max-lg:mx-auto max-lg:max-w-sm min-h-[16rem]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <IconFallback icon={item.icon} />
          )
        )}
      </div>
      <div className={`pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/5 ${ringRadius ?? ""}`} />
    </div>
  );
};

export default function Bento() {
  return (
    <section
      id="Differentiators"
      className="bg-neutral-100 dark:bg-neutral-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          What differentiates me
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-neutral-950 dark:text-neutral-200 sm:text-5xl scroll-mt-24">
          Why work with me
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-base text-neutral-600 dark:text-neutral-400">
          A few ways I stand out from the crowd—in how I work, what I ship, and
          how I collaborate.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <BentoCard
            item={Differentiator1}
            className="lg:row-span-2"
            panelRadius="lg:rounded-l-[2rem]"
            ringRadius="lg:rounded-l-[2rem]"
          />
          <BentoCard
            item={Differentiator2}
            className="max-lg:row-start-1"
            panelRadius="max-lg:rounded-t-[2rem]"
            ringRadius="max-lg:rounded-t-[2rem]"
          />
          <BentoCard
            item={Differentiator3}
            className="max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          />
          <BentoCard
            item={Differentiator4}
            className="lg:col-start-3 lg:row-span-2 lg:row-start-1"
            panelRadius="max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            ringRadius="max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
