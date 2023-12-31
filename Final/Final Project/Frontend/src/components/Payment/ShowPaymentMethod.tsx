'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { GoThere } from "../Route/GoThere";
import { useRouter } from "next/navigation";

interface PaymentMethodEntity {
    id: string;
    cardno: string; 
    cvc: string;
    expdate: String;
}


export const ShowPaymentMethod = ()  => {

    const [Datas,SetData] = useState<PaymentMethodEntity>();  
    const router = useRouter();

    useEffect(()=>{

    async function fetchData() {
        const PaymentMethod = await GETToken('http://localhost:3000/payment/method/user');
        
        if(PaymentMethod.error){}    
        else{
        SetData(PaymentMethod);}
    }

    fetchData();

    },[])

    if(Datas != null){
    return(
        <div className="max-w-md mx-auto p-6 bg-white3 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Method</h2>
            <div className="border-b border-gray-300 mb-2"></div>
          </div>
      
          <div className="flex flex-col">
            <p className="text-lg text-gray-700 mb-2">
              Card No: <span className="text-blue-500">{Datas.cardno}</span>
            </p>
            <div className="border-b border-gray-300 mb-2"></div>
            <p className="text-lg text-gray-700 mb-2">
              Expiry Date: <span className="text-blue-500 px-2">{Datas.expdate}</span> 
              CVC: <span className="text-blue-500">{Datas.cvc}</span>
            </p>
          </div>        
        </div>
        
        <button 
          onClick={() => router.push("/payment/update-method")} 
          className="bg-sky-400 text-white py-2 px-4 rounded-md shadow-md mx-auto mt-4">
          Update
        </button>
      </div>
      

    );
    }else{
        return(
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">No Payment Method Added</h2>
                <GoThere path="/payment/add-method" btnName="Add Payment Method"/><br />
            </div>
        );
    }

}


export default ShowPaymentMethod;