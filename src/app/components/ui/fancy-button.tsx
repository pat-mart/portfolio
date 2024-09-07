export default function FancyButton({text, onClick, svg} : {text: string, onClick?: () => void, svg?: React.ReactElement}) {
    return (
        <button className="p-[3px] relative" onClick={onClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
                <div
                    className="px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <div className="flex flex-row align-middle relative z-50">
                        <div className="w-6 h-6">
                            {svg}
                        </div>
                        <div className={"ml-2"}>{text}</div>
                    </div>
                </div>
        </button>
    )
}