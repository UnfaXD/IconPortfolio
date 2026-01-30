import {
  Differentiator1,
  Differentiator2,
  Differentiator3,
  Differentiator4,
} from "@/Content/Differentiators";

export default function Bento() {
  return (
    <section
      id="Services"
      className="bg-neutral-100 dark:bg-neutral-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          What differentiates me
        </p>
        <h2 id="Services" className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-neutral-950 dark:text-neutral-200 sm:text-5xl scroll-mt-24">
          Why work with me
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-base text-neutral-600 dark:text-neutral-400">
          A few ways I stand out from the crowd—in how I work, what I ship, and
          how I collaborate.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 — large left */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-black lg:rounded-l-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                  {Differentiator1.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 dark:text-neutral-200 max-lg:text-center">
                  {Differentiator1.description}
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src={Differentiator1.image}
                    alt={Differentiator1.title}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]" />
          </div>
          {/* Card 2 — top right */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-black max-lg:rounded-t-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                  {Differentiator2.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 dark:text-neutral-400 max-lg:text-center">
                  {Differentiator2.description}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={Differentiator2.image}
                  alt={Differentiator2.title}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]" />
          </div>
          {/* Card 3 — middle right */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-black" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                  {Differentiator3.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 dark:text-neutral-400 max-lg:text-center">
                  {Differentiator3.description}
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src={Differentiator3.image}
                  alt={Differentiator3.title}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
          </div>
          {/* Card 4 — large right */}
          <div className="relative lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-neutral-100 dark:bg-black max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                  {Differentiator4.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-neutral-600 dark:text-neutral-400 max-lg:text-center">
                  {Differentiator4.description}
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-neutral-100/5 dark:bg-black/5 px-4 py-2 text-white">
                        Discovery.tsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        Ship.tsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14 text-sm text-neutral-400">
                    {/* End-to-end: idea → deploy */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
