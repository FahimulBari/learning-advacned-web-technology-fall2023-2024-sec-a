import { Back } from "@/components/Route/Back";
import { QuestionUpdate } from "@/components/UserQuestion/QuestionUpdate";

export default function Edit({params}:{params: {id: number}}){
    return(
        <div>
            <h1>Update your Question</h1>
            <QuestionUpdate id={params.id}/>
            <Back/>
        </div>
    );
}