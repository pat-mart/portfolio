import {Spotlight} from '@/app/components/ui/spotlight'
import {TextGenerateEffect} from '@/app/components/ui/text-generate-effect'
import FancyButton from '@/app/components/ui/fancy-button'
import Grid from '@/app/components/grid/grid'
import Link from 'next/link'
import NoIconButton from '@/app/components/ui/noicon-button'

export default function Hero() {

    return (
        <div className="overflow-scroll h-screen align-middle items-center">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
                <Spotlight className="-top-24 h-[70vh]" fill="purple"/>
                <Spotlight className="-top-28 left-96 h-[80vh]" fill="purple"/>
            </div>
            <div className="z-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                absolute top-0 left-0 flex items-center justify-center">
                <div
                    className="h-screen w-full dark:bg-gray-950 bg-gray-950 dark:bg-dot-white/[0.4] bg-dot-white/[0.2] relative flex items-center justify-center">
                    <div
                        className="pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                </div>
            </div>

            <div className="flex flex-col justify-evenly relative z-10 items-center my-auto">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mb-24 mt-10 flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        words="Hi! I'm Patrick"
                        className="text-center md:text-5xl lg:text-6xl my-4"
                    />
                    <p className="text-gray-100 text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-lg">
                        I&apos;m currently a freshman CS major at UMass Amherst.
                    </p>
                    <div className={"flex flex-row space-x-6"}>
                        <Link href={"/screens/projects"} prefetch><FancyButton text={"View my projects"}/></Link>
                        <Link href={"https://www.linkedin.com/in/patrick-g-martin/"} target={"_blank"} prefetch><NoIconButton text={"LinkedIn"}></NoIconButton></Link>
                        <Link href={"https://github.com/pat-mart"} target={"_blank"} prefetch><NoIconButton text={"GitHub"}></NoIconButton></Link>
                    </div>
                </div>
                <Grid items={items}></Grid>
            </div>
        </div>
    )
}


const items = [
    {
        title: "About me",
        description: "I'm from Long Island, New York. In my free time, I'm big into photography and astronomy (and coding of course). " +
            "I also started playing guitar a few weeks ago and I'm a huge fan of all genres of music. Ask me what I've been listening to!",
        className: " row-span-2 bg-gray-900 flex w-full",
        link: ""
    },
    {
        title: "My works-in-progress",
        description: "I'm currently building a web platform with Next.JS for sharing cooking recipes. I'm thinking of calling it Bisque. " +
            "Do you know how most recipes online have very lengthy introductions and are hard to follow? " +
            "My goal with this project is to simplify online recipes (and hopefully gain a user base).",
        className: "md:col-span-3 col-span-2 row-span-3 bg-gray-900 flex w-full",
        link: ""
    }
];