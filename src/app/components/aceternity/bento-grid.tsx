import { cn } from "../../../../utils/cn"

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-4 mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
    date,
                                  header,
                                  icon,
                              }: {
    className?: string
    title?: string | React.ReactNode
    date?: string
    description?: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
}) => {

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition w-full duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans text-xl font-bold dark:text-neutral-200 mb-2 mt-2 text-purple-400 space-y-1">
                    <h1>{title}</h1>
                    <h2 className={"text-gray-500 font-normal text-md"}>{date}</h2>
                </div>
                <div className="font-sans font-normal text-neutral-400 text-md dark:text-neutral-300 leading-7 w-full">
                    <p className={"h-full"}>{(description as string).trim()}</p>
                </div>
            </div>
        </div>
    );
};
