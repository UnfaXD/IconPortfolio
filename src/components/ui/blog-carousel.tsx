"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext, JSX, RefObject,
} from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    motion,
    MotionValue,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FollowerPointerCard } from "./following-pointer";
import TitleComponent from "@/components/ui/title-component";

interface CarouselProps {
    items: JSX.Element[];
    /** Rendered inside the pinned stage, above the cards (section title). */
    header?: React.ReactNode;
}

type Card = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

/**
 * Scroll-driven horizontal gallery. While the section is on screen it pins
 * (sticky stage) and vertical scrolling slides the cards right-to-left; once
 * the last card is in view the page carries on. Visitors who prefer reduced
 * motion get a plain row they can swipe sideways instead.
 */
export const Carousel = ({ items, header }: CarouselProps) => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const stageRef = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [trackHeight, setTrackHeight] = useState<number | undefined>(undefined);
    const distance = useMotionValue(0);
    const reduceMotion = useReducedMotion();

    // Measure how far the row has to travel; the track is one screen taller than that.
    useEffect(() => {
        if (reduceMotion) return;
        const measure = () => {
            const row = rowRef.current;
            const stage = stageRef.current;
            if (!row || !stage) return;
            const travel = Math.max(0, row.scrollWidth - stage.clientWidth);
            distance.set(travel);
            setTrackHeight(stage.clientHeight + travel);
        };
        measure();
        const ro = new ResizeObserver(measure);
        if (rowRef.current) ro.observe(rowRef.current);
        if (stageRef.current) ro.observe(stageRef.current);
        window.addEventListener("resize", measure);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [reduceMotion, distance, items.length]);

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(
        [scrollYProgress, distance] as MotionValue<number>[],
        ([progress, travel]: number[]) => -progress * travel,
    );

    // Tabbing onto an off-screen card scrolls the page to where that card is visible.
    const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
        if (reduceMotion) return;
        const track = trackRef.current;
        const row = rowRef.current;
        const cardEl = (e.target as HTMLElement).closest("[data-card]") as HTMLElement | null;
        if (!track || !row || !cardEl) return;
        const shift = Math.min(Math.max(cardEl.offsetLeft - 32, 0), distance.get());
        const trackTop = track.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: trackTop + shift, behavior: "smooth" });
    };

    const handleCardClose = (index: number) => {
        setCurrentIndex(index);
    };

    const cards = items.map((item, index) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" },
            }}
            key={"card" + index}
            data-card
            className="shrink-0 rounded-3xl"
        >
            {item}
        </motion.div>
    ));

    const rowPadding =
        "pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-10";

    if (reduceMotion) {
        return (
            <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
                {header}
                <div className="overflow-x-auto [scrollbar-width:none] py-6 md:py-10">
                    <div className={cn("flex w-max gap-4", rowPadding)}>{cards}</div>
                </div>
            </CarouselContext.Provider>
        );
    }

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            <div ref={trackRef} className="relative" style={{ height: trackHeight }}>
                <div
                    ref={stageRef}
                    className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-x-clip pt-20 pb-6 md:pt-24"
                >
                    {header}
                    <FollowerPointerCard
                        title={<TitleComponent title={"Reconfort"} avatar={"/assets/linear.webp"} />}
                    >
                        <motion.div
                            ref={rowRef}
                            style={{ x }}
                            onFocus={handleFocus}
                            className={cn("flex w-max gap-4 py-4 md:py-6 will-change-transform", rowPadding)}
                        >
                            {cards}
                        </motion.div>
                    </FollowerPointerCard>
                    <div className="mx-auto mt-2 w-full max-w-7xl px-4 md:px-8 lg:px-10">
                        <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                            <motion.div
                                className="h-full origin-left rounded-full bg-lime-400"
                                style={{ scaleX: scrollYProgress }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
                         card,
                         index,
                         layout = false,
                     }: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef as RefObject<HTMLDivElement>, () => handleClose());


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 h-screen z-50 overflow-auto px-4 md:px-10 py-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0 -z-10"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-0 p-6 md:p-12 rounded-2xl md:rounded-3xl font-sans relative shadow-2xl border border-neutral-200 dark:border-neutral-800"
                        >
                            <button
                                className="sticky top-4 h-9 w-9 right-0 ml-auto bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-full flex items-center justify-center transition-colors"
                                onClick={handleClose}
                                aria-label="Close"
                            >
                                <IconX className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
                            </button>
                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                {card.category}
                            </span>
                            <motion.p
                                layoutId={layout ? `title-${card.title}` : undefined}
                                className="text-2xl md:text-4xl font-bold text-neutral-900 mt-2 dark:text-white"
                            >
                                {card.title}
                            </motion.p>
                            <div className="py-8 md:py-10">{card.content}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className="group rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-neutral-900 h-80 w-56 md:h-[min(36rem,56svh)] md:w-96 overflow-hidden flex flex-col items-start justify-end relative z-10 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:scale-[1.02] transition-all duration-300"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />
                <div className="relative z-30 p-6 md:p-8">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-wider font-sans text-left"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="text-white text-lg md:text-2xl font-bold max-w-xs text-left [text-wrap:balance] font-sans mt-1.5 leading-tight"
                    >
                        {card.title}
                    </motion.p>
                    <span className="inline-block mt-3 text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                        View design →
                    </span>
                </div>
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute z-10 inset-0 group-hover:scale-105 transition-transform duration-500"
                />
            </motion.button>
        </>
    );
};

export const BlurImage = ({
                              height,
                              width,
                              src,
                              className,
                              alt,
                              ...rest
                          }: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <Image
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
