import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import logo from "../icons/brain.svg"

export function Sidebar() {
    return (
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-4">
            <div className="flex text-2xl font-semibold pt-4 items-center gap-2">
                <img src={logo} alt="" />
                Second Brain
            </div>
            <div className="py-2 pt-8">
                <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            </div>
        </div>
    )
}