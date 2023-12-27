'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { POST } from "../ApiCalls/POSTMethod";
import { SetCookie } from "../Cookies/CookiesLocal";
import {GotoUserProfile} from "../Profile/UserProfile";
import SignupSchema from "@/Schemas/zod/SignupSchema";


type input = z.infer<typeof SignupSchema>

export const SignupFormValidate = ()=> {

    const router = useRouter();
    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(SignupSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await POST('http://localhost:3000/auth/signup',formData);
        if(Response.error){
            alert(Response.error);
        }
        else{
            alert(`${Response.message}.\nLet's Login!!`);
            router.push('/login');
        }
    }

    return(
    <form method="post" onSubmit={handleSubmit(processForm)}>   
        <label htmlFor="username">Username: </label>
        <input id="username" className="rounded-lg" type="text" placeholder="Type Username" {...register('username')}/> 
        {errors.username?.message && <p className='text-red-400 text-sm'>{errors.username.message}</p>}<br />

        {/* Email */}
        <label htmlFor="user-email">Email: </label>
        <input id="user-email" className="rounded-lg" type="email" placeholder="Type Email" {...register('email')}/> 
        {errors.email?.message && <p className='text-red-400 text-sm'>{errors.email.message}</p>}<br />
        
        {/* Phone Number */}
        <label htmlFor="number">Phone Number: </label>
        <input id="number" className="rounded-lg" type="number" placeholder="Type Phone Number" {...register('phonenumber')}/> 
        {errors.phonenumber?.message && <p className='text-red-400 text-sm'>{errors.phonenumber.message}</p>}<br />

        {/* Gender */}
        <input id="male" className="rounded-lg" type="radio" value="male" {...register('gender')}/> 
        <label htmlFor="gender">Male </label>
        <input id="female" className="rounded-lg" type="radio" value="female" {...register('gender')}/> 
        <label htmlFor="gender">Female </label>
        {errors.gender?.message && <p className='text-red-400 text-sm'>{errors.gender.message}</p>}<br />

        {/* Password */}
        <label htmlFor="password">Password: </label>
        <input id="password" className="rounded-lg" type="password" placeholder="Type Password" {...register('password')}/>
        {errors.password?.message && <p className="text-sm text-red-400">{errors.password.message}</p>}<br />
        
        {/* Confirm Password */}
        <label htmlFor="cpassword">Confirm Password: </label>
        <input id="cpassword" className="rounded-lg" type="password" placeholder="Confirm Password" {...register('confirmpassword')}/>
        {errors.confirmpassword?.message && <p className="text-sm text-red-400">{errors.confirmpassword.message}</p>}<br />

        <button className="bg-orange-300 rounded-lg py-1 px-2" type="submit">Submit</button>
    </form>
    );
}


