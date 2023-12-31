'use client'

import LoginSchema from "@/Schemas/zod/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { POST } from "../ApiCalls/POSTMethod";
import { SetCookie } from "../Cookies/CookiesLocal";
import {GotoUserProfile} from "../Profile/UserProfile";
import { BACKEND_URL } from "../ENV_Client";


type input = z.infer<typeof LoginSchema>


export const LoginFormValidate = ()=> {
    const router = useRouter();
    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(LoginSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await POST(`${BACKEND_URL}/auth/login`,formData);
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
        <div className="max-w-md mx-auto p-6 bg-white3 mb-8">
            <h1 className="text-3xl font-bold text-sky-500 mb-4">Login Form</h1>
            <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" method="post" onSubmit={handleSubmit(processForm)}>   
                <div className="mb-4">
                    <label htmlFor="user-email" className="text-gray-600 block">Email:</label>
                    <input 
                        id="user-email" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                        type="email" 
                        placeholder="Type Email" 
                        {...register('username')}
                    /> 
                    {errors.username?.message && <p className='text-red-500 text-sm mt-1'>{errors.username.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="user-password" className="text-gray-600 block">Password:</label>
                    <input 
                        id="user-password" 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                        type="password" 
                        placeholder="Type Password" 
                        {...register('password')}
                    />
                    {errors.password?.message && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                
                <button className="w-full bg-sky-400 text-white rounded-lg py-2 px-4 hover:bg-orange-400 focus:outline-none focus:shadow-outline-orange" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}


