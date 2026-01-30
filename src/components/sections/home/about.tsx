import {LinkPreview} from "@/components/ui/about/link-preview";
import {CompanyName} from "@/Content/Hero";
import {AboutContent} from "@/Content/About";
import Image from "next/image";

export const About = () => {
    return (
        <section id={'About'} className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto">

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Profile Image */}
                    <div className="relative flex-shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                            <Image 
                                src="/team/me.jpeg" 
                                alt="Reconfort Daniel" 
                                width={200} 
                                height={200} 
                                className="relative rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="mb-8">
                            <div className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
                                Hi, I'm{" "}
                                <LinkPreview 
                                    url="https://www.linkedin.com/in/reconfort-daniel/" 
                                    className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                                >
                                    {CompanyName}
                                </LinkPreview>
                            </div>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 rounded-full mb-6"></div>
                        </div>
                        
                        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl">
                            {AboutContent}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}