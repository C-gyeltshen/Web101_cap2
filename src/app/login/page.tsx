export default function LoginPage () {
    return(
        <div className="w-screen h-screen ">
            <div className="flex flex-col	justify-center	items-center	">
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
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                </div>
            </div>
        </div>
    );
}