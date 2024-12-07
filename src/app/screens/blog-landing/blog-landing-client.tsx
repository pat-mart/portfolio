"use client"

import FancyButton from '@/app/components/aceternity/fancy-button'
import Modal from '@/app/components/modal/modal'
import {getAuth, signInWithEmailAndPassword} from '@firebase/auth'
import {fbAuth} from '@/app/fb/init'
import {redirect} from 'next/navigation'
import NewPost from '@/app/components/modal/new-post'
import React, {useState} from 'react'

export default function BlogLandingClient() {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [isShown, setIsShown] = useState<boolean>(false)
    const [hasNewPost, setHasNewPost] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

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
                }).catch(_ => setHasError(true))
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

    return (
        <div
            className={"flex flex-col sm:flex-row items-center justify-center w-full my-5 space-y-2 sm:space-x-5 sm:space-y-0 relative z-20"}>
            <div className={"relative z-10"}><FancyButton onClick={() => setIsShown(true)} text={"Sign in"}
                                                          svg={userSvg}/></div>
            <div className={"relative z-50 h-screen backdrop-blur-md" + isShown ? "" : "hidden"}>
                <Modal isOpen={isShown} onClose={() => setIsShown(false)} showImage>
                    <div className={"flex flex-col w-full justify-center items-center"}>
                        <form className={"flex flex-col space-y-5 w-full justify-center items-center"}>
                            <div className={"space-y-2 justify-center"}>
                                <h2 className={"text-xl bold text-gray-300"}>Username</h2>
                                <input placeholder={"Username"} value={username}
                                       onChange={s => setUsername(s.target.value)}
                                       className={"rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2"}
                                       type={"email"}/>
                            </div>
                            <div className={"space-y-2 justify-center"}>
                                <h2 className={"text-xl bold text-gray-300"}>Password</h2>
                                <input placeholder={"Password"} value={password}
                                       onChange={s => setPassword(s.target.value)}
                                       className={"rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2"}
                                       type={"password"}/>
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
                                 if (fbAuth.currentUser) {
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
    )
}