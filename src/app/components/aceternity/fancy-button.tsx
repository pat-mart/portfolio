export default function FancyButton({text, onClick, isSubmit} : {text: string, onClick?: () => void, isSubmit? : boolean}) {
    return (
        <button className="p-[3px] relative" onClick={onClick} type={`${isSubmit ? "submit" : "button"}`} form={`${isSubmit ? "newPostForm" : ""}`}>
            <div
                className="px-4 py-2  bg-black relative group transition duration-200 text-white hover:bg-transparent items-center justify-center">
                <div className="flex flex-row align-middle relative z-50 justify-center">
                    <div className={"ml-2 text-center font-mono"}>{text}</div>
                </div>
            </div>
        </button>
    )
}