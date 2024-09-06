import React from "react"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"
import Link from 'next/link'

export default function Grid({items}: {items: {
        title: string,
        description: string,
        className: string,
        link: string,
    }[]}) {
    return (
        <BentoGrid className="max-w-full mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <Link href={item.link} key={i} target="_blank" aria-disabled={item.link === ""}
                      className={`flex ${item.link === "" ? "pointer-events-none" : ""}`}>
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                    />
                </Link>
            ))}
        </BentoGrid>
    );
}



