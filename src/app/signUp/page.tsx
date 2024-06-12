// import { useRouter } from 'next/router';
// import { Button } from "@/components/ui/button";

// export default function SignUp() {
//     const router = useRouter();

//     const handleSignUpClick = () => {
//         router.push('/sign-up'); // Replace '/sign-up' with the actual route you want to redirect to
//     };

//     return (
//         <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
//             <div className="w-64 h-64 bg-slate-50 rounded-lg flex flex-col items-center justify-center space-y-4">
//                 <Button className="text-slate-200 py-2 px-4 w-48 h-20 text-2xl" onClick={handleSignUpClick}>Sign Up</Button>
//                 <Button className="text-slate-200 py-2 px-4 w-48 h-20 text-2xl">Login</Button>
//             </div>
//         </div>
//     );
// }
"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function SignUp() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('http://localhost:3000/signUp'); // Replace '/sign-up' with the actual route you want to redirect to
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-800">
            <div className="w-64 h-64 bg-slate-50 rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button className="text-slate-200 py-2 px-4 w-48 h-20 text-2xl" onClick={handleSignUpClick}>Sign Up</Button>
                <Button className="text-slate-200 py-2 px-4 w-48 h-20 text-2xl">Login</Button>
            </div>
        </div>
    );
}

