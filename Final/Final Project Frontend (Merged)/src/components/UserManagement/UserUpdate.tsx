'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PUT } from "../Api/PUTMethod";
import { PUTToken } from "../ApiCalls/PUTMethod";

interface UserEntity{
    id:number;
    username: string;
    email: string;
    phonenumber: string;
    gender:string;
    role: string;
    type:string;
    status:string;

}

let User : UserEntity;

export const UserUpdate = ({id}: {id: number})=>{

    const [Datas,SetData] = useState(User);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUTToken(`http://localhost:3000/user-management/update/${id}`,Datas);
        alert(Response.massage);
        router.push('/usermanagement/manage');
    }

    return(
        <form className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md" method="post" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
    <input
      type="text"
      id="email"
      name="email"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">Phone Number:</label>
    <input
      type="text"
      id="phonenumber"
      name="phonenumber"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="gender" className="block text-sm font-medium text-gray-600">Gender:</label>
    <input
      type="text"
      id="gender"
      name="gender"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="role" className="block text-sm font-medium text-gray-600">Role:</label>
    <input
      type="text"
      id="role"
      name="role"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="type" className="block text-sm font-medium text-gray-600">Type:</label>
    <input
      type="text"
      id="type"
      name="type"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="status" className="block text-sm font-medium text-gray-600">Status:</label>
    <input
      type="text"
      id="status"
      name="status"
      onChange={handleInput}
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
    Update User
  </button>
</form>

    );
}