import { Input } from "../components/Input";
import { Button } from '../components/Button';
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signup", { username, password })
        alert("Signin successful");
    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white border p-8 min-w-48 rounded-xl">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button onClick={signin} varient="primary" text="Signin" fullWidth={true} loading={true} />
            </div>
        </div>
    </div>
}