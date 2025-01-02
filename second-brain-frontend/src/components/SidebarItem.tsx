import { ReactElement } from "react";

export function SidebarItem({ text, icon }: {
    text: string;
    icon: ReactElement;
}) {
    return (
        <div className="flex text-gray-700 hover:bg-gray-200 max-w-48 pl-4 rounded">
            <div className="p-2">
                {icon}
            </div>
            <div className="p-2">
                {text}
            </div>
        </div>
    )
}