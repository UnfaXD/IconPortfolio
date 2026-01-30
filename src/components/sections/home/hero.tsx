import { BackgroundBeamsWithCollision } from "@/components/ui/hero/background-beams-with-collision";
import { FlipWords } from "@/components/ui/hero/flip-words";
import { FloatingDock } from "@/components/ui/hero/floating-dock";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/hero/text-hover-effect";
import { MapPin } from "lucide-react";

import {
  DockContent,
  HeroParagraph,
  HeroServices,
} from "@/Content/Hero";

const DockItems = ({ src }: { src: string }) => {
  return <Image src={src} alt={`${src} Language`} width={80} height={80} />;
};

export const Hero = () => {
  return (
    <section className="min-h-[100dvh] w-full overflow-x-hidden sm:min-h-screen">
      <BackgroundBeamsWithCollision
        className={
          "flex-col !min-h-[100dvh] !h-[100dvh] sm:!min-h-screen sm:!h-screen bg-neutral-200 dark:bg-neutral-950"
        }
      >
        {/* Background decorative text — scales xs → xl */}
        <div className="absolute inset-0 w-full h-full z-30 pointer-events-auto opacity-35 sm:opacity-40 md:opacity-45 lg:opacity-50 overflow-hidden">
          <TextHoverEffect
            text={"< / >"}
            className="w-full h-full text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          />
        </div>

        {/* Main content — padding & gap scale at every breakpoint */}
        <div className="relative flex flex-col items-center justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 z-40 pointer-events-none w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 pt-[max(1rem,env(safe-area-inset-top))] pb-20 xs:pb-24 sm:pb-28 md:pb-32 lg:pb-36">
          <Image
            src="/team/me.jpeg"
            alt="Reconfort Daniel"
            width={200}
            height={200}
            className="relative rounded-full border-2 xs:border-4 border-white dark:border-neutral-800 shadow-2xl w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-[200px] xl:h-[200px] hover:scale-105 transition-transform duration-300 -mb-2 xs:-mb-4 sm:-mb-6 md:-mb-8 shrink-0 mt-20 xs:mt-24 sm:mt-0"
          />
          <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold w-full max-w-7xl mx-auto text-center relative z-20 py-1 xs:py-2 sm:py-3 md:py-4 lg:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mt-6 xs:mt-8 sm:mt-12 md:mt-16 animate-pulse">
            👋 Hi there!
          </h1>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold w-full max-w-7xl mx-auto text-center relative z-20 py-1 xs:py-2 sm:py-4 md:py-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white px-0.5 xs:px-1 -mt-6 xs:-mt-8 sm:-mt-10">
            I am Reconfort
            <br />
            <FlipWords words={HeroServices} />
          </h1>
          <h1 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold w-full max-w-7xl mx-auto text-center relative z-20 py-1 xs:py-2 sm:py-4 md:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white opacity-80 flex flex-wrap items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 px-2">
            <MapPin
              className="size-3 xs:size-4 sm:size-4 md:size-5 shrink-0 text-lime-400"
              aria-hidden
            />
            <span>Living in Kigali, Rwanda</span>
          </h1>
          <p className="w-full text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium text-neutral-700 dark:text-slate-200 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2 sm:px-3 leading-relaxed sm:w-1/2">
            {HeroParagraph}
          </p>
        </div>

        {/* Dock — bottom spacing at every breakpoint */}
        <div className="hidden absolute bottom-0 left-0 right-0 sm:flex justify-center pb-[max(0.5rem,env(safe-area-inset-bottom))] mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-12">
          <FloatingDock
            items={DockContent.map((item) => ({
              title: item.title,
              icon: <DockItems src={item.icon} />,
              href: item.path,
            }))}
          />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};
