import {TextGenerateEffect} from '@/app/components/aceternity/text-generate-effect'
import Link from 'next/link'
import FancyButton from '@/app/components/aceternity/fancy-button'
import Grid from '@/app/components/grid/grid'

export default function Home() {
    return (
        <div className="relative z-100 mx-3 sm:mx-12 mt-8 sm:mt-4 flex flex-col items-center justify-center overflow-hidden">
            <div
                className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mb-10 sm:mb-24 mt-4 flex flex-col items-center justify-center">
                <p className="text-teal-600 text-left md:tracking-wider mb-8 text-sm md:text-lg lg:text-lg font-bold font-mono">
                    Patrick Martin
                </p>
                <div className={"flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"}>
                    <Link href={"/blog-landing"}>
                        <FancyButton text={"blog"}/>
                    </Link>
                    <Link href={"/projects"} prefetch>
                        <FancyButton text={"projects"}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/patrick-g-martin/"} target={"_blank"} prefetch>
                        <FancyButton text={"linkedin"}/>
                    </Link>
                    <Link href={"https://github.com/pat-mart"} target={"_blank"} prefetch>
                        <FancyButton text={"github"}/>
                    </Link>
                </div>
            </div>
            <Grid items={items}></Grid>
        </div>
    )
}

const items = [
    {
        title: "About me",
        description: "I'm from Long Island, New York. I am a CS major at UMass Amherst and I'm doing research on graphs with Prof. Hung Le (via Early Research Scholars Program) this semester. When not behind a screen, I enjoy playing guitar and (astro)photography.",
        className: " row-span-2 bg-gray-900 flex w-full",
        link: ""
    },
];