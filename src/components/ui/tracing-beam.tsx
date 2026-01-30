"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const gradientId = useId();

  // Measure content height and keep in sync on resize
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setSvgHeight(el.offsetHeight);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [children]);

  const springConfig = { stiffness: 500, damping: 90 };
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    springConfig
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(0, svgHeight - 200)]),
    springConfig
  );

  // Dot appearance driven by scroll (updates on scroll)
  const dotBg = useTransform(scrollYProgress, (v) =>
    v > 0 ? "rgb(255 255 255)" : "rgb(16 185 129)"
  );
  const dotBorder = useTransform(scrollYProgress, (v) =>
    v > 0 ? "rgb(228 228 231)" : "rgb(5 150 105)"
  );
  const dotShadow = useTransform(scrollYProgress, (v) =>
    v > 0 ? "none" : "0 3px 8px rgba(0,0,0,0.2)"
  );

  const trackPath = svgHeight > 0
    ? `M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`
    : "";

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          className="ml-[27px] h-4 w-4 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-900"
          style={{ boxShadow: dotShadow }}
        >
          <motion.div
            className="h-2 w-2 rounded-full border"
            style={{
              backgroundColor: dotBg,
              borderColor: dotBorder,
            }}
          />
        </motion.div>
        {svgHeight > 0 && (
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="ml-4 block"
            aria-hidden="true"
          >
            <path
              d={trackPath}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.16}
              className="text-neutral-400 dark:text-neutral-600"
            />
            <motion.path
              d={trackPath}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.25"
              className="motion-reduce:hidden"
            />
            <defs>
              <motion.linearGradient
                id={gradientId}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        )}
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
