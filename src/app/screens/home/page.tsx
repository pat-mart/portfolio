import {TextGenerateEffect} from '@/app/components/aceternity/text-generate-effect'
import Link from 'next/link'
import FancyButton from '@/app/components/aceternity/fancy-button'
import Grid from '@/app/components/grid/grid'

export default function Home() {
    return (
        <div className="relative z-100 mx-3 sm:mx-12 mt-8 sm:mt-4 flex flex-col items-center justify-center overflow-hidden">
            <div
                className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mb-10 sm:mb-24 mt-4 flex flex-col items-center justify-center">
                <TextGenerateEffect
                    words="Hi! I'm Patrick"
                    className="text-center text-5xl lg:text-6xl my-4"
                />
                <p className="text-gray-100 text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-lg">
                    I&apos;m currently a sophomore CS major at UMass Amherst. Check out my blog, Pat Thoughts!
                </p>
                <div className={"flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"}>
                    <Link href={"/screens/blog-landing"}>
                        <FancyButton text={"Blog"} svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="#c084fc" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                            </svg>
                        }/>
                    </Link>
                    <Link href={"/screens/projects"} prefetch>
                        <FancyButton text={"Projects"} svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="#c084fc" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                            </svg>}
                        />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/patrick-g-martin/"} target={"_blank"} prefetch>
                        <FancyButton text={"LinkedIn"} svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#c084fc" viewBox="0 0 480 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                            </svg>}
                        />
                    </Link>
                    <Link href={"https://github.com/pat-mart"} target={"_blank"} prefetch>
                        <FancyButton text={"GitHub"} svg={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#c084fc" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>}/>
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
        description: "I'm from Long Island, New York. I am a sophomore CS major and I'm doing research in the Theory Group at UMass this semester. When not behind a keyboard, I enjoy playing guitar and (astro)photography.",
        className: " row-span-2 bg-gray-900 flex w-full",
        link: ""
    },
    {
        title: "My works-in-progress",
        description: "I'm working on an audio visualizer in Go with a game engine and portaudio. Reach out to me if you want to collab on a project!",
        className: "md:col-span-3 col-span-2 row-span-3 bg-gray-900 flex w-full",
        link: ""
    }
];