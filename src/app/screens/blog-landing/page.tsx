"use client"

import {app, fbAuth, firestoreDb} from '@/app/fb/init'
import {TextGenerateEffect} from '@/app/components/ui/text-generate-effect'
import FancyButton from '@/app/components/ui/fancy-button'
import Modal from '@/app/components/modal/modal'
import React, {Suspense, useEffect, useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from '@firebase/auth'
import NewPost from '@/app/components/modal/new-post'
import {collection, getDocs} from '@firebase/firestore'
import Link from 'next/link'
import {BentoGridItem} from '@/app/components/ui/bento-grid'
import {redirect} from 'next/navigation'

export default function BlogLanding() {

    const [isShown, setIsShown] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    const [hasNewPost, setHasNewPost] = useState<boolean>(false)

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const fbApp = app

    const [items, setItems] = useState<{ link: string; title: any; description: any; className: string }[]>([])

    const onSignIn = async () => {
        const auth = getAuth()

        if (auth.currentUser != null) {
            return
        }

        try {
            signInWithEmailAndPassword(auth, username, password)
                .then(() => {
                    setIsShown(false)
                    setHasError(false)

                    setPassword('')
                }).catch(e => setHasError(true))
        } catch (e) {
            setHasError(true)
        }
    }

    const onSignOut = async () => {
        fbAuth.signOut().then(() => setIsShown(false))
    }

    const userSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="#c084fc" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
    )

    const signOutSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c084fc"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
        </svg>
    )

    useEffect(() => {
        async function fetchPreviews() {
            const posts = collection(firestoreDb, 'posts')
            const postSnapshot = await getDocs(posts)

            const list = postSnapshot.docs.map(doc => {
                const data = doc.data()
                return {
                    link: '/screens/blog/' + doc.id,
                    title: data.title,
                    description: data.body.substring(0, 200),
                    className: "col-span-2 row-span-2 w-full bg-gray-900"
                }
            })

            setItems(list)
        }

        fetchPreviews()

    }, [])

    return (
        <div className="relative z-100 flex flex-col items-center justify-center">
            <div className={"mt-12 sm:mt-0"}><TextGenerateEffect
                words="Pat Thoughts"
                className="text-center text-5xl md:text-5xl lg:text-6xl my-4"
            /></div>
            <div
                className={"flex flex-col sm:flex-row items-center justify-center w-full my-5 space-y-2 sm:space-x-5 sm:space-y-0 relative z-20"}>
                <div className={"relative z-10"}>
                <FancyButton onClick={() => setIsShown(true)} text={"Sign in"} svg={userSvg}/></div>
                <div className={"relative z-50 h-screen backdrop-blur-md" + isShown ? "" : "hidden"}>
                    <Modal isOpen={isShown} onClose={() => setIsShown(false)} showImage>
                        <div className={"flex flex-col w-full justify-center items-center"}>
                            <form className={"flex flex-col space-y-5 w-full justify-center items-center"}>
                                <div className={"space-y-2 justify-center"}>
                                    <h2 className={"text-xl bold text-gray-300"}>Username</h2>
                                    <input placeholder={"Username"} value={username} onChange={s => setUsername(s.target.value)} className={"rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2"} type={"email"}/>
                                </div>
                                <div className={"space-y-2 justify-center"}>
                                    <h2 className={"text-xl bold text-gray-300"}>Password</h2>
                                    <input placeholder={"Password"} value={password} onChange={s => setPassword(s.target.value)} className={"rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2"} type={"password"}/>
                                </div>
                            </form>
                            <div className={"flex flex-row mt-10 space-x-3 mb-4 w-full justify-center"}>
                                <FancyButton text={"Sign in"} svg={userSvg} onClick={onSignIn}/>
                                <FancyButton text={"Sign out"} svg={signOutSvg} onClick={onSignOut}/>
                            </div>
                            {getAuth().currentUser != null ? <p>Already signed in</p> : <></>}
                            {hasError ? (<p className={"text-red-800"}>Incorrect username or password</p>) : (<></>)}
                            <p className={"text-gray-500"}>Contact me if you want to make an account!</p>
                        </div>
                    </Modal>
                </div>
                <div className={"relative z-10"}>
                    <FancyButton text={"New post"} svg={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="#c084fc" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>}
                                 onClick={() => {
                                     if(fbAuth.currentUser){
                                         setHasNewPost(true)
                                     } else {
                                         setHasNewPost(false)
                                         setIsShown(true)
                                     }
                                 }}
                    />
                    <Modal isOpen={hasNewPost} onClose={() => {
                        setHasNewPost(false)
                        redirect("/screens/blog-landing")
                    }}
                    ><NewPost/></Modal>
                </div>
            </div>
            <div className={"mx-12"}>{items.map((item, i) => (
                <Link href={item.link} key={i} aria-disabled={item.link === ""}
                      className={`flex pb-4 w-full ${item.link === "" ? "pointer-events-none" : ""}`}>
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                    />
                </Link>
            ))}</div>
        </div>
    )
}





