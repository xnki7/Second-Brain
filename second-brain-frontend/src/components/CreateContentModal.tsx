import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from './Button';
import { Input } from './Input';
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState<ContentType>(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/content", { title, link, type }, {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        });

        alert("Content added successfully");
    }
    return (
        <div>
            {open && <div>
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
                </div>
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                    <div className="bg-white p-6 rounded position-absolute">
                        <div className="flex justify-end cursor-pointer pb-2" onClick={onClose}>
                            <CrossIcon />
                        </div>
                        <div className="pb-2">
                            <Input reference={titleRef} placeholder={"Title"} />
                            <Input reference={linkRef} placeholder={"Link"} />
                        </div>
                        <div>
                            <h1 className="pb-2">Type</h1>
                            <div className="flex items-center gap-4 justify-center pb-4">
                                <Button onClick={() => setType(ContentType.Youtube)} text="Youtube" varient={type === ContentType.Youtube ? "primary" : "secondary"} />
                                <Button onClick={() => setType(ContentType.Twitter)} text="Twitter" varient={type === ContentType.Twitter ? "primary" : "secondary"} />
                            </div>
                            <div className="flex justify-center items-center">
                                <Button onClick={addContent} varient="primary" text="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}