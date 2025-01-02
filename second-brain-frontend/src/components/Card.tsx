import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
    return (
        <div className="bg-white rounded-md outline-slate-200 p-4 max-w-72 border border-gray-200 min-h-48 min-w-72 h-full">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-md">
                    <div className="text-gray-500">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex text-gray-500 gap-2 items-center">
                    <a href={link} target="_blank" rel="noreferrer">
                        <ShareIcon />
                    </a>
                    <ShareIcon />
                </div>
            </div>
            <div className="mt-4">
                {type === "youtube" ? <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> : type === "twitter" ?
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                    : null
                }
            </div>
        </div>
    )
}