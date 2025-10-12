import {Hero} from "@/components/sections/home/hero";
import {About} from "@/components/sections/home/about";
import {Projects} from "@/components/sections/home/projects";
import {Services} from "@/components/sections/home/services";
import {Testimonials} from "@/components/sections/home/testimonials";
import {Blogs} from "@/components/sections/home/blogs";
import Bento from "@/components/sections/home/bento";

export default function Home() {
  return (
    <section>
        <Hero/>
        <About/>
        <section id={'Products'}>
            <Projects/>
        </section>
        <Blogs/>
        <Bento/>
        <Testimonials/>
    </section>
  );
}
