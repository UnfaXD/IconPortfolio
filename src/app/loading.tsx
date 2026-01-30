'use client'

import { Loader2 } from 'lucide-react'
import {TextHoverEffect} from "@/components/ui/hero/text-hover-effect";

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="absolute w-screen h-screen flex-center flex-col left-0 top-0">
                <Loader2 className="h-8 w-32 animate-spin text-neutral-900 dark:text-neutral-200 absolute bottom-0 mb-12" />
                <TextHoverEffect text="< / >." automatic/>
            </div>
        </div>
    )
}