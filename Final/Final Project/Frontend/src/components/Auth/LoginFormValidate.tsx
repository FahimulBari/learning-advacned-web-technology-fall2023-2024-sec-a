'use client'

import LoginSchema from "@/Schemas/zod/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { POST } from "../ApiCalls/POSTMethod";
import { SetCookie } from "../Cookies/CookiesLocal";
import {GotoUserProfile} from "../Profile/UserProfile";


type input = z.infer<typeof LoginSchema>

export const LoginFormValidate = ()=> {

    const router = useRouter();
    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(LoginSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await POST('http://localhost:3000/auth/login',formData);
        if(Response.error){
            alert(Response.error);
        }
        else{
            await SetCookie('token',Response.token);
            console.log(Response.token);
            await GotoUserProfile(router);
        }

    }

    return(
    <form method="post" onSubmit={handleSubmit(processForm)}>   
        <label htmlFor="user-email">Email: </label>
        <input id="user-email" className="rounded-lg" type="email" placeholder="Type Email" {...register('username')}/> 
        {errors.username?.message && <p className='text-red-400 text-sm'>{errors.username.message}</p>}<br />

        <label htmlFor="user-password">Password: </label>
        <input id="user-password" className="rounded-lg" type="password" placeholder="Type Password" {...register('password')}/>
        {errors.password?.message && <p className="text-sm text-red-400">{errors.password.message}</p>}<br />
        
        <button className="bg-orange-300 rounded-lg py-1 px-2" type="submit">Submit</button>
    </form>
    );
}


