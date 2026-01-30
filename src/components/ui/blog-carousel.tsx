"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext, JSX, RefObject,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FollowerPointerCard } from "./following-pointer";
import TitleComponent from "@/components/ui/title-component";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
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

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <FollowerPointerCard
            title={
                <TitleComponent
                    title={'Reconfort'}
                    avatar={'/assets/linear.webp'}
                />
            }
        >
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-3 px-4 md:px-10 pb-8">
                    <button
                        className="relative z-40 h-11 w-11 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                    >
                        <IconArrowNarrowLeft className="h-5 w-5" />
                    </button>
                    <button
                        className="relative z-40 h-11 w-11 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                    >
                        <IconArrowNarrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
        </FollowerPointerCard>
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
                className="group rounded-2xl md:rounded-3xl bg-neutral-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-end relative z-10 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 hover:scale-[1.02] transition-all duration-300"
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
