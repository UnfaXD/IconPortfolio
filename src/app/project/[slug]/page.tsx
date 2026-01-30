import { IntroScroll } from "@/components/sections/caseStudy/introScroll";
import { Details } from "@/components/sections/caseStudy/details";
import { Testimonials } from "@/components/sections/home/testimonials";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = ProjectData.find(p => slugify(p.title) === slug);
    return {
        title: project ? project.title : "Project Not Found",
    };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = ProjectData.find(p => slugify(p.title) === slug);

    if (!project) {
        return <h1 className="text-center w-full h-full flex-center font-bold">Project not found</h1>;
    }

    return (
        <section className="bg-neutral-200 dark:bg-neutral-950 p-6">
            <IntroScroll title={project.title} image={project.content.ProjectArray[0].image} subTitle={project.content.title}/>
            <Details
                problem={project.content.Problem}
                solution={project.content.Solution}
                conclusion={project.content.Conclusion}
                gallery={project.content.ProjectArray}/>
            <Testimonials />
        </section>
    );
}