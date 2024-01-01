import { Back } from "@/components/Route/Back";
import ActiveUser from "@/components/UserManagement/ActiveUserInfo";

export default function Active(){
    return(
        <div>
            <h1>Active Users</h1>
            <ActiveUser/>
            <Back/>
        </div>
    );
}