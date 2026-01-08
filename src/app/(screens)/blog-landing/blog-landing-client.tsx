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

    return (
        <div
            className={"flex flex-col sm:flex-row items-center justify-center w-full my-5 space-y-2 sm:space-x-5 sm:space-y-0 relative z-20"}>
            <div className={"relative z-10"}><FancyButton onClick={() => setIsShown(true)} text={"sign in"}/></div>
            <div className={"relative z-50 h-screen backdrop-blur-md" + isShown ? "" : "hidden"}>
                <Modal isOpen={isShown} onClose={() => setIsShown(false)} showImage>
                    <div className={"flex flex-col w-full justify-center items-center"}>
                        <form className={"flex flex-col space-y-5 w-full justify-center items-center"}>
                            <div className={"space-y-2 justify-center"}>
                                <h2 className={"text-xl bold font-mono"}>username</h2>
                                <input placeholder={"username"} value={username}
                                       onChange={s => setUsername(s.target.value)}
                                       className={"pl-2 p-1 font-mono bg-gray-950 border-teal-600 border-2"}
                                       type={"email"}/>
                            </div>
                            <div className={"space-y-2 justify-center"}>
                                <h2 className={"text-xl bold font-mono"}>password</h2>
                                <input placeholder={"password"} value={password}
                                       onChange={s => setPassword(s.target.value)}
                                       className={"pl-2 p-1 font-mono bg-gray-950 border-teal-600 border-2"}
                                       type={"password"}/>
                            </div>
                        </form>
                        <div className={"flex flex-row mt-10 space-x-3 mb-4 w-full justify-center"}>
                            <FancyButton text={"sign in"} onClick={onSignIn}/>
                            <FancyButton text={"sign out"} onClick={onSignOut}/>
                        </div>
                        {getAuth().currentUser != null ? <p>Already signed in</p> : <></>}
                        {hasError ? (<p className={"text-red-800 font-mono"}>incorrect username or password</p>) : (<></>)}
                        <p className={"text-gray-500 font-mono"}>contact me if you want to make an account</p>
                    </div>
                </Modal>
            </div>
            <div className={"relative z-10"}>
                <FancyButton text={"New post"}
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