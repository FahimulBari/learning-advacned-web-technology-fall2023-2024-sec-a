'use client'
import { useRouter } from "next/navigation";
import React,{useState} from "react";
import { POST, POSTToken } from "../ApiCalls/POSTMethod";
 
 
interface UqEntity{
    question: string;
}
 
let Uq : UqEntity;
 
export const QuestionCreate = () => {
 
    const [Datas,SetData] = useState(Uq);
    const router = useRouter();
 
    const handleInput = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;
 
        SetData({...Datas,[name]: value});
    }
 
 
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await POSTToken('http://localhost:3000/userquestion/create',Datas);
        alert(Response.message);
        router.push('/userquestion/manage');
 
    }
 
 
    return(
        <form className="max-w-sm mx-auto mt-8" method="post" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
      Question:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="question"
      type="text"
      onChange={handleInput}
      name="question"
      placeholder="Type your question"
    />
  </div>
  <div className="mb-6">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Send
    </button>
  </div>
</form>

    );
}



// 'use client'
// import { useRouter } from "next/navigation";
// import React,{useState} from "react";
// import { POST, POSTToken } from "../Api/POSTMethod";


// interface UQEntity{
//     question: string;
// }

// let Uq : UQEntity;

// export const UQCreate = () => {

//     const [Datas,SetData] = useState(Uq);
//     const router = useRouter();

//     const handleInput = (e:any) => {
//         const name = e.target.name;
//         const value = e.target.value;

//         SetData({...Datas,[name]: value});
//     }


//     const handleSubmit = async (e:any) => {
//         e.preventDefault();
//         const Response = await POSTToken(`http://localhost:3000/userquestion/create`,Datas);
//         alert(Response.massage);
//        // alert('successfull');
//         router.push('/userquestion/manage');
        

//     }


//     return(
//         <form method="post" onSubmit={handleSubmit}>
//             Question: <input type="text-area" onChange={handleInput} name="question"/> <br />
//             <button type="submit">Create</button>
//         </form>
//     );
// }