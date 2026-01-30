import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TestimonialsContent } from "@/Content/Testimonial";

export function Testimonials() {
  return (
    <section
      id="Testimonials"
      className="relative bg-neutral-100 dark:bg-neutral-950 py-20 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Testimonials
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          What people say about working with me
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-neutral-600 dark:text-neutral-400">
          Real feedback from colleagues and clients I’ve collaborated with.
        </p>
      </div>
      <AnimatedTestimonials testimonials={TestimonialsContent} />
    </section>
  );
}
