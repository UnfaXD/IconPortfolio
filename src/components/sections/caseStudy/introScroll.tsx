"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/caseStudy/container-scroll-animation";
import { ExternalLink } from "lucide-react";

const FALLBACK_IMAGE = "/assets/linear1.webp";

interface IntroScrollProps {
  title?: string | undefined;
  image?: string | undefined;
  /** When no image is available, show a "Visit website" card linking to this URL (iframes are blocked by most sites). */
  embedUrl?: string | undefined;
  subTitle?: string | undefined;
}

export function IntroScroll({
  title,
  image,
  embedUrl,
  subTitle,
}: IntroScrollProps) {
  const useVisitCard = !image && embedUrl;

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {subTitle}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {title}
              </span>
            </h1>
          </>
        }
      >
        {useVisitCard ? (
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-3 rounded-2xl">
            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-end text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Open in new tab
            </a>
            <iframe
              src={embedUrl}
              title="Embedded content"
              className="w-full rounded-2xl border-0 bg-neutral-200 dark:bg-neutral-900 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] shadow-lg"
              sandbox="allow-scripts allow-same-origin allow-popups"
              allow="fullscreen"
            />
          </div>
        ) : (
          <Image
            src={image ?? FALLBACK_IMAGE}
            alt={title || "Image 1"}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        )}
      </ContainerScroll>
    </div>
  );
}
