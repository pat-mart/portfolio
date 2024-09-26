"use client"

import {TextGenerateEffect} from '@/app/components/ui/text-generate-effect'
import React, {Suspense, useEffect, useState} from 'react'
import {doc, getDoc} from '@firebase/firestore'
import {firestoreDb} from '@/app/fb/init'

export default function BlogPost({params} : {params: {slug: string}}) {

    const [post, setPost] = useState<{ author: string, body: string, datePosted: string, title: string }>({
        author: '', body: '', datePosted: '', title: ''
    })

    // I know this is horrible but will change to server actions soon
    useEffect(() => {
        async function fetchPostData() {
            const post = doc(firestoreDb, 'posts', params.slug)
            const postSnapshot = await getDoc(post)

            const data = postSnapshot.data()!

            setPost({
                author: data.author,
                body: data.body,
                datePosted:  data.datePosted.toDate().toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }),
                title: data.title
            })
        }

        fetchPostData()
    })

    return (
        <div className="relative z-100 flex flex-col items-center justify-start mx-4 sm:mx-12">
            <div className={"mt-12 sm:mt-0"}>
                <TextGenerateEffect
                words={post.title}
                className="text-center text-5xl md:text-5xl lg:text-6xl my-4"/>
            </div>
            <div className={"flex flex-col w-full"}>
                <Suspense>
                    <h2 className={"text-gray-400 text-xl mt-4 sm:mt-8 mb-6 sm:mb-12"}>{post.datePosted}</h2>
                    <p className={"text-gray-200 text-lg"}>{post.body}</p>
                </Suspense>
            </div>
        </div>
    )
}