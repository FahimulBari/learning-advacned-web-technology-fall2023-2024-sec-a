import { Back } from "@/components/Route/Back";
import { UserCreate } from "@/components/UserManagement/UserCreate";

export default function Add(){
    return(
        <div>
            <h1>Add User</h1>
            <UserCreate/>
            <Back/>
        </div>
    );
}