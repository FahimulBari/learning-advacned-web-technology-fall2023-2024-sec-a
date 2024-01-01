'use client'
import { useRouter } from "next/navigation"
import React from "react";

export const GoBack = () =>{
    const router = useRouter();
    return(
        <button id="backBtn" onClick={() => router.back()}>Back</button>
    );
}