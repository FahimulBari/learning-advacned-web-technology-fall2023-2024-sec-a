'use client'
import { useEffect, useState } from "react";
import { GETToken } from "../ApiCalls/GETMethod";
import { DELETEToken } from "../ApiCalls/DELETEMethod";
import { GoThere } from "../Route/GoThere";
import { useRouter } from "next/navigation";

interface SubscriptionEntity {
    id: string;
    type: string; 
    download_limit: string;
    price: String;
}

const Subscription: SubscriptionEntity[]  = []

export const SubscriptionManage = ()  => {

  const router = useRouter();
  const [Datas,SetData] = useState(Subscription);  

  useEffect(()=>{

    async function fetchData() {
      const Response = await GETToken('http://localhost:3000/subscription/all');
      SetData(Response);
    }

    fetchData();

  },[])

  return(
    <div className="flex flex-col items-center justify-center py-3">
      <table className="border-collapse border border-black shadow-md mb-8">
        <thead>
          <tr className="bg-black text-white">
            <th className="py-3 px-4 border border-black">Type</th>
            <th className="py-3 px-4 border border-black">Download Limit</th>
            <th className="py-3 px-4 border border-black">Price</th>
            <th className="py-3 px-4 border border-black">Update</th>
            <th className="py-3 px-4 border border-black">Delete</th>
          </tr>
        </thead>
      
        <tbody>
          {Datas.map((Subscription: SubscriptionEntity) => (
            <tr key={Subscription.id} className="bg-white">
              <td className="py-2 px-4 border border-black">{Subscription.type}</td>
              <td className="py-2 px-4 border border-black">{Subscription.download_limit}</td>
              <td className="py-2 px-4 border border-black">{Subscription.price}</td>
              <td className="py-2 px-4 border border-black">
                <UpdateButton id={`${Subscription.id}`} />
              </td>
              <td className="py-2 px-4 border border-black">
                <DeleteButton id={`${Subscription.id}`} fetch={SetData} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button 
        onClick={() => router.push("manage/add")} 
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
  const deleteSubscriptions = async (id: string) => {
    const Response = await DELETEToken(`http://localhost:3000/subscription/delete/${id}`);
    alert(Response.message);
    await fetchData();
  }

  // Update the table after delete a row
  async function fetchData() {
    const Response = await GETToken('http://localhost:3000/subscription/all');
    fetch(Response);
  }

  return(
    <div>
      <button 
        onClick={async ()=>await deleteSubscriptions(id)}
        className="bg-red-400 text-white py-2 px-4 rounded-md shadow-md">
        Delete
      </button>
    </div>
  );
}


export default SubscriptionManage;