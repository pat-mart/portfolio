import {Spotlight} from '@/app/components/aceternity/spotlight'
import Link from 'next/link'

export default function ScreenLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative min-h-screen overflow-hidden ml-0">
            <div
                className="relative w-full min-h-screen bg-white bg-grid-black-100/[0.2]">
                <div className="absolute inset-0 w-full h-auto bg-gray-950 bg-dot-white/[0.2] z-0">
                    <div className="pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"/>
                </div>

                <Spotlight className="absolute -top-40 -left-10 md:-left-32 md:-top-20" fill="white"/>
                <Spotlight className="absolute -top-24 h-[70vh]" fill="purple"/>
                <Spotlight className="absolute -top-28 left-96 h-[80vh]" fill="purple"/>

                <Link href="/" className={"absolute z-50"}>
                    <div className="absolute top-8 left-6 sm:top-12 sm:left-12 w-9 h-9 sm:w-8 sm:h-8 z-10 sm:size-12 opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="#c084fc" className="size-9">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                    </div>
                </Link>

                <div className="relatiive z-40 overflow-x-hidden h-full overflow-y-scroll pb-12 sm:pb-0">
                    {children}
                </div>
            </div>
        </div>
    );
}