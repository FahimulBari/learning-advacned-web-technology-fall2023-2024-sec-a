'use client'
import { SetCookieObject } from "../Cookies/CookiesLocal";
import { GETToken } from "../ApiCalls/GETMethod";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BACKEND_URL } from "../ENV_Client";

export const GotoUserProfile = async(router: AppRouterInstance)=>{
    const Response = await GETToken(`${BACKEND_URL}/profile`);
    if(Response.error){
        alert('Something is wrong');
    }
    else{
        await SetCookieObject('user', Response.user);
        // const user = await GetCookieObject('user');   
        // console.log(user);
        router.push(`/profile`);
    }
}
