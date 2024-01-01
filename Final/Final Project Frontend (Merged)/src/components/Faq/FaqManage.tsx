'use client'
import { useEffect, useState } from "react";
import { GET } from "../Api/GETMethod";
import { DELETE } from "../Api/DELETEMethod";
import { useRouter } from "next/navigation";
import { Next } from "../Route/Next";


interface FaqEntity{
    id: number; 
    question: string;
    answer: string;
}

const Faq: FaqEntity[]  = []

export const FaqManage = ()  => {

  const [Datas,SetData] = useState(Faq);  

  useEffect(()=>{

    async function fetchData() {
      const Faqs = await GET(`http://localhost:3000/faq/showall`);
      SetData(Faqs);
    }

    fetchData();

  },[Datas])

    return(
      <div className="w-full p-8">
      <table className="w-full border border-gray-300 rounded shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Question</th>
            <th className="py-2 px-4">Answer</th>
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
    
        <tbody>
          {Datas.map((Faq: FaqEntity) => (
            <tr key={Faq.id} className="border-t border-gray-300">
              <td className="py-2 px-4">{Faq.question}</td>
              <td className="py-2 px-4">{Faq.answer}</td>
              <td className="bg-red-500 rounded-xl py-0 px-1"><DeleteButton id={Faq.id} /></td>
              <td className="bg-green-500 rounded-xl py-0 px-1"><UpdateButton id={Faq.id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    );
}

const UpdateButton = ({id}:{id: number}) => {
  return(
    <div>
      <Next path={`manage/${id}`} btnName="Edit"/>
    </div>
  );
}


const DeleteButton = ({id}:{id: number}) => {

  const deleteFaqs = async (id: number) => {
    const Response = await DELETE(`http://localhost:3000/faq/delete/${id}`);
    alert(Response.massage);
  }

  return(
    <div>
      <button onClick={async ()=>await deleteFaqs(id)}>Delete</button>
    </div>
  );
}


export default FaqManage;