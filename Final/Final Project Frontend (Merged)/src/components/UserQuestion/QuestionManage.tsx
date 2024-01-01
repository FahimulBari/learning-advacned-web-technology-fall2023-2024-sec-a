'use client'
 
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { Next } from "../Route/Next";
import { DELETE, DELETEToken } from "../ApiCalls/DELETEMethod";
 
interface UqEntity {
    id: number;
    question: string;
 
}
 
 
const Uq :  UqEntity[] = [] ;
 
 
export const UqManage = ()  => {
 
    const [Datas,SetData] = useState(Uq);  
 
    useEffect(()=>{
 
      async function fetchData() {
        const Questions = await GETToken('http://localhost:3000/userquestion/seeall');
        SetData(Questions);
      }
 
      fetchData();
 
    },[])
 
    return(
      <div className="container mx-auto p-6">
      <table className="min-w-full bg-white border border-gray-300 rounded shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4">Id</th>
            <th className="py-2 px-4">Question</th>
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
    
        <tbody>
          {Datas.map((Question: UqEntity) => (
            <tr key={Question.id} className="border-t border-gray-300">
              <td className="py-2 px-4">{Question.id}</td>
              <td className="py-2 px-4">{Question.question}</td>
              <td className="bg-green-500 rounded-xl py-2 px-3">
                <UpdateButton id={`${Question.id}`} />
              </td>
              <td className="bg-red-500 rounded-xl py-2 px-3">
                <DeleteButton id={`${Question.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    );
}
 
const UpdateButton = ({id}:{id: string}) => {
    return(
      <div>
        <Next path={`manage/${id}`} btnName="Edit"/>
      </div>
    );
  }
 
  const DeleteButton = ({id}:{id: string}) => {
 
    const deleteQuestions = async (id: string) => {
      const Response = await DELETEToken(`http://localhost:3000/userquestion/delete/${id}`);
      alert(Response.message);
    }
 
    return(
      <div>
        <button onClick={async ()=>await deleteQuestions(id)}>Delete</button>
      </div>
    );
  }
 
 
  export default UqManage;



// 'use client'
// import { useEffect, useState } from "react";
// import { GET } from "../Api/GETMethod";
// import { DELETE } from "../Api/DELETEMethod";
// import { useRouter } from "next/navigation";
// import { Next } from "../Route/Next";
// import { GETToken } from "../ApiCalls/GETMethod";


// interface UQEntity{
//     id: number; 
//     question: string;
// }

// const Uq: UQEntity[]  = []


// export const UQManage = ()  => {
  
//   const [Datas,SetData] = useState(Uq);  

//   useEffect(()=>{

//     async function fetchData() {
//       const Faqs = await GETToken(`http://localhost:3000/userquestion/seeall`);
//      SetData(Faqs);
//     }
//     fetchData();

//   },[])

//     return(
//         <div>
//             <table>
//          <thead>
//            <tr>
//              <th>Question</th>
//              <th></th>
//            </tr>
//          </thead>
  
//          <tbody>
//          {Datas.map((Faq: UQEntity) => (
//             <tr key={Faq.id}> 
//             <td>{Faq.question}</td>
//             <td><UpdateButton id ={Faq.id}/></td>
//             </tr>
//            ))}
//          </tbody>
//        </table>
//         </div>
//     );
// }

// const UpdateButton = ({id}:{id: number}) => {
//   return(
//     <div>
//       <Next path={`manage/${id}`} btnName="Edit"/>
//     </div>
//   );
// }


// export default UQManage;