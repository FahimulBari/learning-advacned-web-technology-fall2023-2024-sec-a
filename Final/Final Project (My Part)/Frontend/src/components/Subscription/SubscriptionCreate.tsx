'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { POSTToken } from "../ApiCalls/POSTMethod";

interface SubscriptionEntity {
    type: string; 
    download_limit: string;
    price: String;
}

let Subscription : SubscriptionEntity;


export const SubscriptionCreate = ()=>{

    const [Datas,SetData] = useState(Subscription);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await POSTToken('http://localhost:3000/subscription/create',Datas);
        alert(Response.message);
        console.log(Response.message);
        router.push('/subscription/manage');
    }

    return(
    <div className="max-w-md mx-auto p-6 bg-white3 mb-8">
    <h1 className="text-3xl font-bold text-sky-500 mb-4">Create Subscription</h1>
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" method="post" onSubmit={handleSubmit}>
    <div className="mb-4">
        <label className="block text-gray-600" htmlFor="type">Subscription Type:</label>
        <input
        id="type"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        type="text"
        onChange={handleInput}
        name="type"
        />
    </div>

    <div className="mb-4">
        <label className="block text-gray-600" htmlFor="download_limit">Download Limit:</label>
        <input
        id="download_limit"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        type="number"
        onChange={handleInput}
        name="download_limit"
        />
    </div>

    <div className="mb-4">
        <label className="block text-gray-600" htmlFor="price">Price:</label>
        <input
        id="price"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        type="number"
        onChange={handleInput}
        name="price"
        />
    </div>

    <button
        className="w-full bg-sky-400 text-white rounded-lg py-2 px-4 hover:bg-orange-400 focus:outline-none focus:shadow-outline-orange"
        type="submit">
        Create New Subscription
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

