import { Input } from "../components/Input";
import { Button } from '../components/Button';

export function Signup() {
    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white border p-8 min-w-48 rounded-xl">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button varient="primary" text="Signup" fullWidth={true} loading={true}/>
            </div>
        </div>
    </div>
}