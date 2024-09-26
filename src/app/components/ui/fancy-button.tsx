export default function FancyButton({text, onClick, svg, isSubmit} : {text: string, onClick?: () => void, svg?: React.ReactElement, isSubmit? : boolean}) {
    return (
        <button className="p-[3px] relative" onClick={onClick} type={`${isSubmit ? "submit" : "button"}`} form={`${isSubmit ? "newPostForm" : ""}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
            <div
                className="px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent items-center justify-center">
                <div className="flex flex-row align-middle relative z-50 justify-center">
                    <div className="w-6 h-6">
                        {svg}
                    </div>
                    <div className={"ml-2 text-center"}>{text}</div>
                </div>
            </div>
        </button>
    )
}