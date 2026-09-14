import { Hero } from "@/components/sections/home/hero";
import { Experience } from "@/components/sections/home/experience";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Blogs } from "@/components/sections/home/blogs";
import Bento from "@/components/sections/home/bento";
import { Ongoing } from "@/components/sections/home/ongoing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Ongoing />
      <Blogs />
      <Bento />
      <Testimonials />
    </main>
  );
}
