import { Back } from "@/components/Route/Back";
import { UserUpdate } from "@/components/UserManagement/UserUpdate";


export default function Edit({params}:{params: {id: number}}){
    return(
        <div>
            <h1>Update User</h1>
            <UserUpdate id={params.id}/>
            <Back/>
        </div>
    );
}