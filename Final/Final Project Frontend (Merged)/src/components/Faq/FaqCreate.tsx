'use client'
import { useRouter } from "next/navigation";
import React,{useState} from "react";
import { POST } from "../Api/POSTMethod";


interface FaqEntity{
    question: string;
    answer: string;
}

let Faq : FaqEntity;

export const FaqCreate = () => {

    const [Datas,SetData] = useState(Faq);
    const router = useRouter();

    const handleInput = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;

        SetData({...Datas,[name]: value});
    }


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await POST(`http://localhost:3000/faq/create`,Datas);
        //alert(Response.massage);
        alert('successfull');
        router.push('/faq/manage');

    }


    return(
<form className="w-full max-w-lg mx-auto" method="post" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label htmlFor="question" className="block text-sm font-medium text-gray-700">
      Question:
    </label>
    <textarea
      id="question"
      name="question"
      
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      onChange={handleInput}
    ></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
      Answer:
    </label>
    <textarea
      id="answer"
      name="answer"
      
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      onChange={handleInput}
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
  >
    Create FAQ
  </button>
</form>

    );
}