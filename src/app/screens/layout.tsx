import {Spotlight} from '@/app/components/ui/spotlight'
import Link from 'next/link'

export default function ScreenLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
                <Spotlight className="-top-24 h-[70vh]" fill="purple"/>
                <Spotlight className="-top-28 left-96 h-[80vh]" fill="purple"/>
            </div>
            <Link href={"/"}>
                <div className="absolute top-16 left-12 w-8 h-8 z-10 sm:size-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="#c084fc" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                </div>
            </Link>
            <div className="z-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                                absolute top-0 left-0 flex items-center justify-center">
                <div
                    className="h-screen w-full dark:bg-gray-950 bg-gray-950 dark:bg-dot-white/[0.4] bg-dot-white/[0.2] relative flex items-center justify-center">
                    <div
                        className="pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                </div>
            </div>
            {children}
        </>

    );
}