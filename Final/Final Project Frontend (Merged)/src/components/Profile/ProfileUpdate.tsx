// 'use client'

// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';
// import { PUTToken } from '../ApiCalls/PUTMethod';

// interface UserEntity {
//   id:string;
//   username: string;
//   email: string;
//   phonenumber: string;
//   gender: string;
// }

// let initialUser: UserEntity = {
//   id:'',
//   username: '',
//   email: '',
//   phonenumber: '',
//   gender: '',
// };

// export const ProfileUpdate = () => {
//   const [userData, setUserData] = useState<UserEntity>(initialUser);
//   const router = useRouter();

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const response = await PUTToken(`http://localhost:3000/auth/profile/edit`, userData);
//     alert(response.message);
//     router.push('/profile');
//   };

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" value={userData.username} onChange={handleInput} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="text" id="email" name="email" value={userData.email} onChange={handleInput} />
//       </div>
//       <div>
//         <label htmlFor="phonenumber">Phone Number:</label>
//         <input type="text" id="phonenumber" name="phonenumber" value={userData.phonenumber} onChange={handleInput} />
//       </div>
//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <input type="text" id="gender" name="gender" value={userData.gender} onChange={handleInput} />
//       </div>
//       <div>
//         <button type="submit">Update</button>
//       </div>
//     </form>
//   );
// };


//................................................


// 'use client'

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { PUT } from "../Api/PUTMethod";
// import { PUTToken } from "../ApiCalls/PUTMethod";

// interface UserEntity{
//     id:number;
//     username: string;
//     email: string;
//     phonenumber: string;
//     dob:Date;
//     gender:string;

// }

// let User : UserEntity;

// export const ProfileUpdate = ({id}: {id: number})=>{

//     const [Datas,SetData] = useState(User);
//     const router = useRouter();

//     const handleInput = (e:any) => {

//         const name = e.target.name;
//         const value = e.target.value; 

//         SetData({...Datas, [name]: value});
//     }

//     const handleSubmit = async (e:any) => {
//         e.preventDefault();
//         const Response = await PUTToken(`http://localhost:3000/auth/profile/edit`,Datas);
//         alert(Response.user);
//         router.push('/profile');
//     }

//     return(
//         <form method="post" onSubmit={handleSubmit}>
//         Username: <input type="text" onChange={handleInput} name="username"/> <br />
//         Email: <input type="text" onChange={handleInput} name="email"/> <br />
//         Phone Number:<input type="text" onChange={handleInput} name="phonenumber"/> <br />
//         Gender:<input type="text" onChange={handleInput} name="gender"/> <br />
//         <button type="submit">Update</button>
//     </form>
//     );
// }
//.................................
'use client'
import PaymentMethodSchema from "@/Schemas/zod/PaymentMethodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PUTToken } from "../ApiCalls/PUTMethod";
import ProfileSchema from "@/Schemas/zod/ProfileSchema";

type input = z.infer<typeof ProfileSchema>

export const UpdateProfileMethod = () => {
    const router = useRouter();

    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({resolver: zodResolver(ProfileSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await PUTToken('http://localhost:3000/auth/profile/edit',formData);
        if(Response.error){
            alert(Response.error);
        }
        else{
            alert(Response.message);
            router.push("/profile");
        }

    }

    return(
      <form method="post" onSubmit={handleSubmit(processForm)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username:</label>
        <input
          id="username"
          className="mt-1 p-2 rounded-lg border border-gray-300 w-full"
          type="text"
          placeholder="Type username"
          {...register('username')}
        />
        {errors.username?.message && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
        <input
          id="email"
          className="mt-1 p-2 rounded-lg border border-gray-300 w-full"
          type="text"
          placeholder="Type email"
          {...register('email')}
        />
        {errors.email?.message && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">Phone Number:</label>
        <input
          id="phonenumber"
          className="mt-1 p-2 rounded-lg border border-gray-300 w-full"
          type="text"
          placeholder="Phone number"
          {...register('phonenumber')}
        />
        {errors.phonenumber?.message && <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">Gender:</label>
        <input
          id="gender"
          className="mt-1 p-2 rounded-lg border border-gray-300 w-full"
          type="text"
          placeholder="Gender"
          {...register('gender')}
        />
        {errors.gender?.message && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
        <input
          id="password"
          className="mt-1 p-2 rounded-lg border border-gray-300 w-full"
          type="text"
          placeholder="Password"
          {...register('password')}
        />
        {errors.password?.message && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-600">Confirm Password:</label>
        <input
          id="confirmpassword"
          className="mt-1 p-2 rounded-lg border border-gray-300 w-full"
          type="text"
          placeholder="Confirm Password"
          {...register('confirmpassword')}
        />
        {errors.confirmpassword?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmpassword.message}</p>
        )}
      </div>
    
      <button className="bg-orange-300 rounded-lg py-2 px-4 text-white" type="submit">Submit</button>
    </form>
    
    );
}