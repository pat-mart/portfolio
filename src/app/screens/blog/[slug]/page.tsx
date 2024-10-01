"use client"

import {TextGenerateEffect} from '@/app/components/ui/text-generate-effect'
import React, {Suspense, useEffect, useState} from 'react'
import {collection, deleteDoc, doc, getDoc} from '@firebase/firestore'
import {fbAuth, firestoreDb} from '@/app/fb/init'
import FancyButton from '@/app/components/ui/fancy-button'
import {useRouter} from 'next/navigation'

export default function BlogPost({params} : {params: {slug: string}}) {

    const [post, setPost] = useState<{ author: string, body: string, datePosted: string, title: string, id: string }>({
        author: '', body: '', datePosted: '', title: '', id: ''
    })

    const router = useRouter()

    // I know this is horrible but will change to server actions soon
    useEffect(() => {
        async function fetchPostData() {
            const post = doc(firestoreDb, 'posts', params.slug)
            const postSnapshot = await getDoc(post)

            const data = postSnapshot.data()!

            console.log(data)

            setPost({
                id: post.id,
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
    }, [])

    async function onDelete(postId: string) {
        try {
            const docRef = doc(firestoreDb, 'posts', postId)
            await deleteDoc(docRef).catch(e => console.error(e))

            if(fbAuth.currentUser){
                router.push('/screens/blog-landing')
            }

        } catch(e) {
            console.error(e)
        }
    }

    return (
        <div className="relative z-100 flex flex-col items-center justify-start mx-4 sm:mx-12">
            <div className={"mt-12 sm:mt-0"}>
                <TextGenerateEffect
                words={post.title}
                className="text-center text-5xl md:text-5xl lg:text-6xl my-4"/>
            </div>
            <div className={"flex flex-col w-full"}>
                <Suspense>
                    <div className={"flex flex-row w-full justify-between items-center"}>
                        <h2 className={"text-gray-400 text-xl mt-4 sm:mt-8 mb-6 sm:mb-12"}>{post.datePosted}</h2>
                        <button onClick={() => onDelete(post.id)}>
                            <div className={"w-8 h-8"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#c084fc" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <p className={"text-gray-200 text-lg"}>{post.body}</p>
                </Suspense>
            </div>
        </div>
    )
}