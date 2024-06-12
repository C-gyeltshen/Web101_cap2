import { Button } from "@/components/ui/button"


export default function LoginPage () {
    return(
        <div className="w-screen h-screen ">
            <div className="flex flex-col m-auto my-40 justify-center items-center w-60 h-64 bg-zinc-500 rounded-md">
                <div className="welcome">
                    <h1 className="font-serif font-bold	text-4xl">Welcome</h1>
                </div>
                <div className="name">
                    <input name="username" placeholder="Username" className="mb-2 p-1 border rounded" />
                </div>
                <div className="email">
                    <input name="Email" type="Email" placeholder="Emial" className="mb-2 p-1 border rounded" />
                </div>
                <div className="password">
                    <input name="password" type="password" placeholder="Password" className="mb-2 p-1 border rounded" />
                </div>
                <div className="login ">
                    <Button type="submit" className=" text-white p-2 rounded">Login</Button>
                </div>
            </div>
        </div>
    );
}