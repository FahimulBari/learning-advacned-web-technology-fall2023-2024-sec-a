'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";

interface SubscriptionEntity {
    id: string;
    type: string; 
    download_limit: string;
    price: String;
}

const Subscription: SubscriptionEntity[]  = []

export const SubscriptionPlans =  ()  => {

  const [Datas,SetData] = useState(Subscription);  

  useEffect(()=>{

    async function fetchData() {
      const Subscriptions = await GETToken('http://localhost:3000/subscription/all');
      SetData(Subscriptions);
    }

    fetchData();

  },[])

    return(
        <div>
            <table>
         <thead>
           <tr>
             <th>Type</th>
             <th>Download Limit</th>
             <th>Price</th>
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((Subscription: SubscriptionEntity) => (
            <tr key={Subscription.id}> 
            <td>{Subscription.type}</td>
            <td>{Subscription.download_limit}</td>
            <td>{Subscription.price}</td>
            </tr>
           ))}
         </tbody>
       </table>
        </div>
    );
}

const deleteSubscriptions = async (id: string) => {
  const Response = await GET(`http://localhost:3000/subscription/delete/${id}`);
  alert(Response.message);}

export default SubscriptionPlans;