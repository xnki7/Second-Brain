import { CrossIcon } from "../icons/CrossIcon";


export function CreateContentModal({ open, onClose }) {
    return (
        <div>
            {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
                <div className="bg-white p-4 rounded">
                    <div className="flex justify-end">
                        <CrossIcon/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>}
        </div>
    )
}