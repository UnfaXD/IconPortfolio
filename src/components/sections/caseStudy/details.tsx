"use client";
import React from "react";
import Image from "next/image";
import {twMerge} from "tailwind-merge";
import {TracingBeam} from "@/components/ui/tracing-beam";
import {ProjectGallery} from "@/components/sections/caseStudy/Gallery";

interface DetailsProps {
    problem?: string,
    solution?: string,
    conclusion?: string,
    gallery?: { image: string; imageAlt: string }[]
}

export function Details({problem, solution, conclusion, gallery}: DetailsProps) {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">

                <div key={1} className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        Problem
                    </h2>

                    <div className="text-sm  prose prose-sm dark:prose-invert">
                        {gallery?.[0]?.image && (
                            <Image
                                src={gallery[0].image}
                                alt="blog thumbnail"
                                height="1000"
                                width="1000"
                                className="rounded-lg mb-10 object-cover"
                            />
                        )}
                        {problem}
                        </div>
                </div>

                <div key={2} className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        Solution
                    </h2>

                    <div className="text-sm  prose prose-sm dark:prose-invert">
                        {gallery?.[1]?.image && (
                            <Image
                                src={gallery[1].image}
                                alt="blog thumbnail"
                                height="1000"
                                width="1000"
                                className="rounded-lg mb-10 object-cover"
                            />
                        )}
                        {solution}
                    </div>
                </div>

                <ProjectGallery gallery={gallery}/>

                <div key={3} className="mb-10">
                    <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        Conclusion
                    </h2>

                    <div className="text-sm  prose prose-sm dark:prose-invert">
                        {conclusion}
                    </div>
                </div>


            </div>
        </TracingBeam>
    );
}
