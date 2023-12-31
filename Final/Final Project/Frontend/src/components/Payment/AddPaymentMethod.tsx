'use client'
import PaymentMethodSchema from "@/Schemas/zod/PaymentMethodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { POSTToken } from "../ApiCalls/POSTMethod";

type input = z.infer<typeof PaymentMethodSchema>

export const AddPaymentMethod = () => {
    const router = useRouter();

    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(PaymentMethodSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await POSTToken('http://localhost:3000/payment/method/add',formData);
        if(Response.error){
            alert(Response.error);
        }
        else{
            alert(Response.message);
            router.push("/profile");
        }

    }

    return(
        <div className="max-w-md mx-auto p-6 bg-white3 mb-8">
        <h1 className="text-3xl font-bold text-black mb-4">Add Payment</h1>
        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" method="post" onSubmit={handleSubmit(processForm)}>   
            <div className="mb-4">
                <label htmlFor="cardno" className="text-gray-600 block">Card No:</label>
                <input 
                    id="cardno" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                    type="text" 
                    placeholder="Type Card No" 
                    {...register('cardno')}
                /> 
                {errors.cardno?.message && <p className='text-red-500 text-sm mt-1'>{errors.cardno.message}</p>}
            </div>
    
            <div className="mb-4">
                <label htmlFor="cvc" className="text-gray-600 block">CVC:</label>
                <input 
                    id="cvc" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                    type="text" 
                    placeholder="Type CVC" 
                    {...register('cvc')}
                />
                {errors.cvc?.message && <p className="text-red-500 text-sm mt-1">{errors.cvc.message}</p>}
            </div>
            
            <div className="mb-4">
                <label htmlFor="expdate" className="text-gray-600 block">Expire Date:</label>
                <input 
                    id="expdate" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                    type="text" 
                    placeholder="Exp Date" 
                    {...register('expdate')}
                /> 
                {errors.expdate?.message && <p className='text-red-500 text-sm mt-1'>{errors.expdate.message}</p>}
            </div>
    
            <button 
                className="w-full bg-orange-300 text-white rounded-lg py-2 px-4 hover:bg-orange-400 focus:outline-none focus:shadow-outline-orange" 
                type="submit"
            >
            Submit
            </button>
        </form>
        </div>
    );
}