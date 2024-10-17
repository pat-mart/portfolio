import {firestoreDb} from '@/app/fb/init'
import {TextGenerateEffect} from '@/app/components/aceternity/text-generate-effect'
import React, {Suspense} from 'react'
import {collection, getDocs} from '@firebase/firestore'
import Link from 'next/link'
import {BentoGridItem} from '@/app/components/aceternity/bento-grid'
import BlogLandingClient from '@/app/screens/blog-landing/blog-landing-client'

export default async function BlogLanding() {

    async function fetchPreviews() {
        const posts = collection(firestoreDb, 'posts')
        const postSnapshot = await getDocs(posts)

        const list = postSnapshot.docs.map(doc => {
            const data = doc.data()
            return {
                link: '/screens/blog/' + doc.id,
                title: data.title,
                description: data.body.substring(0, 200),
                className: "col-span-2 row-span-2 w-full bg-gray-900",
                datePosted: data.datePosted.toDate().toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }),
            }
        })

        return list.reverse()
    }

    const items = await fetchPreviews()

    return (
        <div className="relative z-100 flex flex-col items-center justify-center overflow-hidden">
            <div className={"mt-12 sm:mt-0"}><TextGenerateEffect
                words="Pat Thoughts"
                className="text-center text-5xl md:text-5xl lg:text-6xl my-4"
            /></div>
            <BlogLandingClient/>
            <Suspense>
                <div className={"mx-12 overflow-hidden"}>{items.map((item, i) => (
                    <Link href={item.link} key={i} aria-disabled={item.link === ""}
                          className={`flex pb-4 w-full ${item.link === "" ? "pointer-events-none" : ""}`}>
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description.trim() + '...'}
                            date={item.datePosted}
                            className={item.className}
                        />
                    </Link>
                ))}</div>
            </Suspense>
        </div>
    )
}





