'use client'
import { useEffect, useState } from "react";
import { GETToken } from "../ApiCalls/GETMethod";
import { DELETEToken } from "../ApiCalls/DELETEMethod";
import { useRouter } from "next/navigation";


const Template: ITemplate[]  = []

export const TemplateManage = ()  => {

  const router = useRouter();
  const [Datas,SetData] = useState(Template);  

  useEffect(()=>{

    async function fetchData() {
      const Response = await GETToken('http://localhost:3000/template/all');
      SetData(Response);
    }

    fetchData();

  },[])

  return(
    <div className="flex flex-col items-center justify-center py-3">
      <table className="border-collapse border border-black shadow-md mb-8">
        <thead>
          <tr className="bg-black text-white">
            <th className="py-3 px-4 border border-black">Name</th>
            <th className="py-3 px-4 border border-black">Features</th>
            <th className="py-3 px-4 border border-black">Type</th>
            <th className="py-3 px-4 border border-black">Update</th>
            <th className="py-3 px-4 border border-black">Delete</th>
          </tr>
        </thead>
      
        <tbody>
          {Datas.map((Template: ITemplate) => (
            <tr key={Template.id} className="bg-white">
              <td className="py-2 px-4 border border-black">{Template.name}</td>
              <td className="py-2 px-4 border border-black">{Template.features}</td>
              <td className="py-2 px-4 border border-black">{Template.type}</td>
              <td className="py-2 px-4 border border-black">
                <UpdateButton id={`${Template.id}`} />
              </td>
              <td className="py-2 px-4 border border-black">
                <DeleteButton id={`${Template.id}`} fetch={SetData} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button 
        onClick={() => router.push("/template/manage/add")} 
        className="bg-sky-400 text-white py-2 px-4 rounded-md shadow-md">
        Add +
      </button>
    </div>
    );
}

const UpdateButton = ({id}:{id: string}) => {
  const router = useRouter();

  return(
    <div>
      <button 
        onClick={() => router.push(`manage/${id}`)} 
        className="bg-green-400 text-white py-2 px-4 rounded-md shadow-md">
        Update
      </button>
    </div>
  );
}


const DeleteButton = ({id,fetch}:{id: string,fetch: any}) => {

  const router = useRouter();

  // Delete a row
  const deleteTemplates = async (id: string) => {
    const Response = await DELETEToken(`http://localhost:3000/template/delete/${id}`);
    alert(Response.message);
    await fetchData();
  }

  // Update the table after delete a row
  async function fetchData() {
    const Response = await GETToken('http://localhost:3000/template/all');
    fetch(Response);
  }

  return(
    <div>
      <button 
        onClick={async ()=>await deleteTemplates(id)}
        className="bg-red-400 text-white py-2 px-4 rounded-md shadow-md">
        Delete
      </button>
    </div>
  );
}


export default TemplateManage;