import { Back } from "@/components/Route/Back";
import BlockedUser from "@/components/UserManagement/BlockedUserInfo";

export default function Active(){
    return(
        <div>
            <h1>Active Users</h1>
            <BlockedUser/>
            <Back/>
        </div>
    );
}