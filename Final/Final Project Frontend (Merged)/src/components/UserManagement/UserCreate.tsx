'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { POSTToken } from "../ApiCalls/POSTMethod";

interface UserEntity{
      username: string;
      email:string;
      phonenumber:string;
      gender:string;
      password:string;
      confirmpassword:string;
      role:string;
      type:string;
  
  }
   

let User : UserEntity;


export const UserCreate = ()=>{

    const [Datas,SetData] = useState(User);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await POSTToken('http://localhost:3000/user-management/create',Datas);
        alert(Response.message);
        console.log(Response.message);
        router.push('/usermanagement/manage');
    }

    return(
      <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md" method="post" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-semibold text-gray-600">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="phonenumber" className="block text-sm font-semibold text-gray-600">Phone Number:</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-semibold text-gray-600">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="confirmpassword" className="block text-sm font-semibold text-gray-600">Confirm Password:</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-semibold text-gray-600">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-semibold text-gray-600">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          onChange={handleInput}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Create User
      </button>
    </form>
    
    );
}



// 'use client'
// import { useRouter } from "next/navigation";
// import React,{useState} from "react";
// import { POSTToken } from "../ApiCalls/POSTMethod";
 
 
// interface UserEntity{
//     username: string;
//     email:string;
//     phonenumber:string;
//     gender:string;
//     password:string;
//     confirmpassword:string;
//     role:string;
//     type:string;

// }
 
// let User : UserEntity;
 
// export const UserCreate = () => {
 
//     const [Datas,SetData] = useState(User);
//     const router = useRouter();
 
//     const handleInput = (e:any) => {
//         const name = e.target.name;
//         const value = e.target.value;
 
//         SetData({...Datas,[name]: value});
//     }
 
 
//     const handleSubmit = async (e:any) => {
//         e.preventDefault();
//         const Response = await POSTToken('http://localhost:3000/user-management/create',Datas);
//         alert(Response.message);
//         router.push('/usermanagement/manage');
 
//     }
 
 
//     return(
//       <form className="max-w-sm mx-auto p-6 bg-white rounded-md shadow-md" method="post" onSubmit={handleSubmit}>
//             <div className="mb-4">
//                  <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">Username:</label>
//                  <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <div className="mb-4">
//                 <label htmlFor="phonenumber" className="block text-gray-700 text-sm font-semibold mb-2">Phone Number:</label>
//                 <input
//                   type="text"
//                   id="phonenumber"
//                   name="phonenumber"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <div className="mb-4">
//                 <label htmlFor="gender" className="block text-gray-700 text-sm font-semibold mb-2">Gender:</label>
//                 <input
//                   type="text"
//                   id="gender"
//                   name="gender"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="confirmpassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <div className="mb-4">
//                 <label htmlFor="role" className="block text-gray-700 text-sm font-semibold mb-2">Role:</label>
//                 <input
//                   type="text"
//                   id="role"
//                   name="role"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <div className="mb-4">
//                 <label htmlFor="type" className="block text-gray-700 text-sm font-semibold mb-2">Type:</label>
//                 <input
//                   type="text"
//                   id="type"
//                   name="type"
//                   onChange={handleInput}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 />
//               </div>
            
//               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
//                 Create User
//               </button>
//             </form>
//     );
// }


// // 'use client'
// // import { useRouter } from "next/navigation";
// // import React,{useState} from "react";
// // import { POST } from "../Api/POSTMethod";
// // import { POSTToken } from "../ApiCalls/POSTMethod";


// // interface UserEntity{
// //     username: string;
// //     email: string;
// //     phonenumber: string;
// //     gender:string;
// //     password:string;
// //     confirmpassword:string;
// // }

// // let User : UserEntity;

// // export const UserCreate = () => {

// //     const [Datas,SetData] = useState(User);
// //     const router = useRouter();

// //     const handleInput = (e:any) => {
// //         const name = e.target.name;
// //         const value = e.target.value;

// //         SetData({...Datas,[name]: value});
// //     }


// //     const handleSubmit = async (e:any) => {
// //         e.preventDefault();
// //         const Response = await POSTToken(`http://localhost:3000/user-management/create`,Datas);
// //         alert(Response.massage);
// //         //alert('successfully added user');
// //         router.push('/usermanagement/manage');

// //     }


// //     return(
// //         <form className="max-w-sm mx-auto p-6 bg-white rounded-md shadow-md" method="post" onSubmit={handleSubmit}>
// //         <div className="mb-4">
// //           <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">Username:</label>
// //           <input
// //             type="text"
// //             id="username"
// //             name="username"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <div className="mb-4">
// //           <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
// //           <input
// //             type="text"
// //             id="email"
// //             name="email"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <div className="mb-4">
// //           <label htmlFor="phonenumber" className="block text-gray-700 text-sm font-semibold mb-2">Phone Number:</label>
// //           <input
// //             type="text"
// //             id="phonenumber"
// //             name="phonenumber"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <div className="mb-4">
// //           <label htmlFor="gender" className="block text-gray-700 text-sm font-semibold mb-2">Gender:</label>
// //           <input
// //             type="text"
// //             id="gender"
// //             name="gender"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="confirmpassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password:</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <div className="mb-4">
// //           <label htmlFor="role" className="block text-gray-700 text-sm font-semibold mb-2">Role:</label>
// //           <input
// //             type="text"
// //             id="role"
// //             name="role"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <div className="mb-4">
// //           <label htmlFor="type" className="block text-gray-700 text-sm font-semibold mb-2">Type:</label>
// //           <input
// //             type="text"
// //             id="type"
// //             name="type"
// //             onChange={handleInput}
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
// //           />
// //         </div>
      
// //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
// //           Create User
// //         </button>
// //       </form>
      

// //     );
// // }