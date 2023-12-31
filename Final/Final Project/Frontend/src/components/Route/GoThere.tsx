'use client'
import { useRouter } from "next/navigation";


export const GoThere = ({path,btnName}: {path: string, btnName:string}) =>{
    const router = useRouter();
    return(
        <button id="gotoBtn" className="bg-black text-white py-2 px-4 rounded-md shadow-md" onClick={() => router.push(path)}>{btnName}</button>
    );
}