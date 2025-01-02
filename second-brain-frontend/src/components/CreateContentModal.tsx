import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from './Input';


export function CreateContentModal({ open, onClose }) {
    return (
        <div>
            {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
                <div className="bg-white p-4 rounded">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                    </div>
                    <div>
                        <Input placeholder={"Title"}/>
                        <Input placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center">
                    <Button varient="primary" text="Submit"/>
                    </div>
                </div>
            </div>}
        </div>
    )
}