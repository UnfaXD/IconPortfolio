import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/hero/text-hover-effect";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-950 px-4 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-40">
        <TextHoverEffect
          text="404"
          className="h-full w-full text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Page not found
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
          This route doesn&apos;t exist
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
          The page you&apos;re looking for may have moved, or the link is
          broken. Head back home or jump into the work.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Back home
          </Link>
          <Link
            href="/#Projects"
            className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-800 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-200 dark:border-white dark:text-white dark:hover:bg-neutral-800"
          >
            View projects
          </Link>
          <Link
            href="mailto:danny.reco2002@gmail.com"
            className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
