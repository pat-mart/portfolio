"use client"

import FancyButton from '@/app/components/aceternity/fancy-button'
import {onSubmit} from '@/app/(screens)/blog-landing/post-actions'
import { useFormState } from 'react-dom'



export default function NewPost() {

    const initialState = {
        message: ''
    }

    // @ts-ignore
    const [_, formAction] = useFormState(onSubmit, initialState)

    const submitSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c084fc"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
        </svg>
    )

    return (
        <div className={"flex flex-col w-full justify-start items-start"}>
            <form className={"flex flex-col space-y-5 justify-start items-start w-full whitespace-normal"} id="newPostForm" action={formAction}>
                <div className={"flex flex-row space-x-3 items-center"}>
                    <div className={"flex flex-col space-y-2 justify-center"}>
                        <h2 className={"text-xl bold text-gray-300"}>Title</h2>
                        <input placeholder={"Title"} name={"title"} id={"title"}
                               className={"text-2xl font-bold rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2"}
                               type={"text"}/>
                    </div>
                    <div className={"flex flex-col space-y-2 justify-center"}>
                        <h2 className={"text-xl bold text-gray-300"}>Photo</h2>
                        <input placeholder={"Photo"}
                               className={"rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2 border-dashed"}
                               type={"file"} accept="image/png, image/jpeg"/>
                    </div>
                </div>
                <div className={"space-y-2 justify-center w-full"}>
                    <h2 className={"text-xl bold text-gray-300"}>Text</h2>
                    <textarea placeholder={"Your thoughts..."} name={"body"} id={"body"}
                              className={"w-full rounded-md pl-2 p-1 bg-gray-950 border-[#c084fc] border-2 whitespace-pre-wrap"}/>
                </div>
            </form>
            <div className={"flex w-full justify-center mt-6"} ><FancyButton text={"Submit"} svg={submitSvg} isSubmit/></div>
        </div>
    )
}