'use client'
import { useRouter } from "next/navigation";


export const GoThere = ({path,btnName}: {path: string, btnName:string}) =>{
    const router = useRouter();
    return(
        <button id="gotoBtn" onClick={() => router.push(path)}>{btnName}</button>
    );
}