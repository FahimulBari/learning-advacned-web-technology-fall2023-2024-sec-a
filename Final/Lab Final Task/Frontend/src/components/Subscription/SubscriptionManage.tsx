'use client'
import { useEffect, useState } from "react";
import { GET } from "../ApiCalls/GETMethod";
import { DELETE } from "../ApiCalls/DELETEMethod";
import { useRouter } from "next/navigation";
import { GoThere } from "../Route/GoThere";

interface SubscriptionEntity {
    id: string;
    type: string; 
    download_limit: string;
    price: String;
}

const Subscription: SubscriptionEntity[]  = []

export const SubscriptionManage = ()  => {

  const [Datas,SetData] = useState(Subscription);  

  useEffect(()=>{

    async function fetchData() {
      const Subscriptions = await GET('http://localhost:3000/subscription/all');
      SetData(Subscriptions);
    }

    fetchData();

  },[Datas])

    return(
        <div>
            <table>
         <thead>
           <tr>
             <th>Type</th>
             <th>Download Limit</th>
             <th>Price</th>
             <th>Update</th>
             <th>Delete</th>
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((Subscription: SubscriptionEntity) => (
            <tr key={Subscription.id}> 
            <td>{Subscription.type}</td>
            <td>{Subscription.download_limit}</td>
            <td>{Subscription.price}</td>
            <td><DeleteButton id={`${Subscription.id}`}/></td>
            <td><UpdateButton id={`${Subscription.id}`}/></td>
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
      <GoThere path={`manage/${id}`} btnName="Edit"/>
    </div>
  );
}


const DeleteButton = ({id}:{id: string}) => {

  const deleteSubscriptions = async (id: string) => {
    const Response = await DELETE(`http://localhost:3000/subscription/delete/${id}`);
    alert(Response.message);
  }

  return(
    <div>
      <button onClick={async ()=>await deleteSubscriptions(id)}>Delete</button>
    </div>
  );
}


export default SubscriptionManage;