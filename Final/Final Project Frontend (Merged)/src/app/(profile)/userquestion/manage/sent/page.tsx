import { Back } from "@/components/Route/Back";
import { QuestionCreate } from "@/components/UserQuestion/QuestionCreate";


export default function Add(){
    return(
        <div>
            <h1>Sent your question</h1>
            <QuestionCreate/>
            <Back/>
        </div>
    );
}