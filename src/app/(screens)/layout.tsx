import {Spotlight} from '@/app/components/aceternity/spotlight'
import Link from 'next/link'
import React from 'react'

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

                <Link href="/" className={"absolute z-20"}>
                    <div className="absolute top-8 left-6 sm:top-12 sm:left-12 w-9 h-9 sm:w-8 sm:h-8 z-10 sm:size-12 opacity-70">
                        <p className="text-white text-center font-mono font-bold">home</p>
                    </div>
                </Link>

                <div className="relatiive z-40 overflow-x-hidden h-full overflow-y-scroll pb-12 sm:pb-0">
                    {children}
                </div>
            </div>
        </div>
    );
}