'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { GetCookieObject, SetCookieObject } from "../Cookies/CookiesLocal";
import { useRouter } from "next/navigation";
import React from "react";

interface SubscriptionEntity {
    id: string;
    type: string; 
    download_limit: string;
    price: String;
}

const Subscription: SubscriptionEntity[]  = []

export const SubscriptionPlans = ({user}: {user : IUser})  => {

  const [Datas,SetData] = useState(Subscription);  

  
  useEffect(()=>{

    async function fetchData() {
      const Subscriptions = await GETToken('http://localhost:3000/subscription/all');
      SetData(Subscriptions);
    }

    fetchData();

  },[])

    return(
    <div className="flex flex-wrap justify-center py-4">
      {Datas.map((Subscription: SubscriptionEntity, index) => (
              <React.Fragment key={Subscription.id}>
                <div className="w-80 bg-white p-8 rounded-md shadow-md mx-4 my-4">
                  <h2 className="text-xl font-bold mb-4 text-center">{Subscription.type.toUpperCase()}</h2>
                  <p className="text-3xl font-semibold text-center text-gray-600 mb-4">{Subscription.price}$</p>
                  <Subscribe user={user} Subscription={Subscription}/>
                </div>
                {(index + 1) % 3 === 0 && <div className="w-full my-4" key={`breaker-${index}`} />}
              </React.Fragment>
            ))}
    </div>
    );
}

{/* <Subscribe user={user} Subscription={Subscription}/> */}

export const Subscribe = ({user,Subscription}:{Subscription: SubscriptionEntity,user: IUser}) => {

  const Router = useRouter();
  
  const processSubscription = async (id: string) => {
    const Subscription = await GETToken(`http://localhost:3000/subscription/subscribe/${id}`);
    alert(Subscription.message);
    //Update User Data inside cookies
    
    const Response = await GETToken("http://localhost:3000/profile");
    await SetCookieObject('user', Response.user);
    Router.refresh();
  }

  if(user.type === Subscription.type){
    return(
      <div className="bg-black text-green-400 text-center py-2 px-4 rounded-md w-full">Active</div>
    );
  }
  else{
  return(
    <div>
      <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-blue w-full" onClick={async ()=>await processSubscription(Subscription.id)}>Subscribe</button>
    </div>
  );
  }
}


export default SubscriptionPlans;