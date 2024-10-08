import React from "react"
import { BentoGrid, BentoGridItem } from "@/app/components/aceternity/bento-grid"
import Link from 'next/link'

export default function Grid({items}: {items: {
        title: string,
        description: string,
        className: string,
        link: string,
    } []}) { // } []}) { I don't get the typescript hype
    return (
        <div className={'overflow-hidden'}>
            {items.map((item, i) => (
                <Link href={item.link} key={i} target="_blank" aria-disabled={item.link === ""}
                      className={`flex pb-4 ${item.link === "" ? "pointer-events-none" : ""}`}>
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                    />
                </Link>
            ))}
        </div>
    );
}



