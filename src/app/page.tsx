import {Hero} from "@/components/sections/home/hero";
import {Experience} from "@/components/sections/home/experience";
import {Testimonials} from "@/components/sections/home/testimonials";
import {Blogs} from "@/components/sections/home/blogs";
import Bento from "@/components/sections/home/bento";
export default function Home() {
  return (
    <section>
        <Hero/>
        <Experience/>
        <Blogs/>
        <Bento/>
        <Testimonials/>
    </section>
  );
}
