'use client'
 
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PUT, PUTToken } from "../ApiCalls/PUTMethod";
 
interface UqEntity{
    question: string;
}
 
let Uq : UqEntity;
 
export const QuestionUpdate = ({id}: {id: number})=>{
 
    const [Datas,SetData] = useState(Uq);
    const router = useRouter();
 
    const handleInput = (e:any) => {
 
        const name = e.target.name;
        const value = e.target.value;
 
        SetData({...Datas, [name]: value});
    }
 
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUTToken(`http://localhost:3000/userquestion/update/${id}`,Datas);
        alert(Response.message);
        router.push('/userquestion/manage');
    }
 
    return(
        <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" method="post" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label htmlFor="question" className="block text-gray-700 text-sm font-bold mb-2">Question:</label>
    <input
      id="question"
      type="text"
      onChange={handleInput}
      name="question"
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
  >
    Update
  </button>
</form>

    );
}



// 'use client'

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { PUT } from "../Api/PUTMethod";
// import { PUTToken } from "../ApiCalls/PUTMethod";

// interface UQEntity{
//     question: string;
// }

// let Uq : UQEntity;

// export const UQUpdate = ({id}: {id: number})=>{

//     const [Datas,SetData] = useState(Uq);
//     const router = useRouter();

//     const handleInput = (e:any) => {

//         const name = e.target.name;
//         const value = e.target.value; 

//         SetData({...Datas, [name]: value});
//     }

//     const handleSubmit = async (e:any) => {
//         e.preventDefault();
//         const Response = await PUTToken(`http://localhost:3000/userquestion/update/${id}`,Datas);
//         alert(Response.massage);
//         //alert('updated');
//         router.push('/userquestion/manage');
//     }

//     return(
//         <form method="post" onSubmit={handleSubmit}>
//             Question: <input type="text" onChange={handleInput} name="question"/> <br />
    
//             <button type="submit">Update</button>
//         </form>
//     );
// }