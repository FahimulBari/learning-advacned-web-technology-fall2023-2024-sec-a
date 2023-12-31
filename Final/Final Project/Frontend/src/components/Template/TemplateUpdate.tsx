'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PUT, PUTToken } from "../ApiCalls/PUTMethod";


let Template : ITemplate;

export const TemplateUpdate = ({id}: {id: string})=>{

    const [Datas,SetData] = useState(Template);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUTToken(`http://localhost:3000/template/update/${id}`,Datas);
        alert(Response.message);
        router.push('/template/manage');
    }

    return(
<div className="max-w-md mx-auto p-6 bg-white3 mb-8">
    <h1 className="text-3xl font-bold text-sky-500 mb-4">Update Template</h1>
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" method="post" onSubmit={handleSubmit}>
        <div className="mb-4">
        <label className="block text-gray-600" htmlFor="name">Name:</label>
        <input
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            onChange={handleInput}
            name="name"
        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-600" htmlFor="features">Features:</label>
        <input
            id="features"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            onChange={handleInput}
            name="features"
        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-600" htmlFor="type">Type:</label>
        <input
            id="type"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            onChange={handleInput}
            name="type"
        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-600" htmlFor="url">Url:</label>
        <input
            id="url"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            onChange={handleInput}
            name="url"
        />
        </div>

        <button
        className="w-full bg-sky-400 text-white rounded-lg py-2 px-4 hover:bg-orange-400 focus:outline-none focus:shadow-outline-orange"
        type="submit">
        Update Template
        </button>
    </form>
    <br />
    <button
        onClick={() => router.back()}
        className="bg-black text-white py-2 px-4 rounded-md shadow-md">
        Go Back
    </button>
    </div>
    );
}

