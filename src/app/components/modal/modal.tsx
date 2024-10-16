import React, { ReactNode } from "react";
import Image from 'next/image'

interface ModalProps {
    isOpen: boolean
    onClose: () => void,
    showImage?: boolean,
    children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, showImage, children }) => {
    if (!isOpen) return null; // Modal is hidden if not open

    return (
        <div className={"fixed bg-blend-overlay inset-0 bg-black bg-opacity-20 backdrop-blur-md flex justify-center items-center z-50 w-screen h-screen !ml-0 overflow-y-scroll"}>
            <div className="bg-gray-900 rounded-md shadow-lg w-[90vw] sm:w-[60vw] relative overflow-scroll">
                <button
                    className="absolute top-3 right-3 text-xl font-bold text-gray-200"
                    onClick={onClose}
                >
                    <div className={"w-6 h-6"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="#c084fc" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </div>
                </button>
                <div className={"text-gray-200 m-4 "}>{children}</div>
                {showImage ? (
                    <div className={"w-full items-center scale-[0.2]"}>
                        <Image src={"/FirebaseAuth.svg"} placeholder={"empty"} loading={"eager"} width={"1080"} height={"127"} alt={"Google Firebase Authentication logo"}></Image>
                    </div>
                ) : (<></>)}

            </div>
        </div>
    );
};

export default Modal;
