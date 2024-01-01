import { UpdateProfileMethod } from "@/components/Profile/ProfileUpdate";
import { Back } from "@/components/Route/Back";



export default function Edit(){
    return(
        <div>
            <h1>Update Profile</h1>
            <UpdateProfileMethod/>
            <Back/>
        </div>
    );
}