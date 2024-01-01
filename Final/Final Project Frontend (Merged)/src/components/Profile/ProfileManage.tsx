'use client'
import { useEffect, useState } from "react";
import { GET } from "../Api/GETMethod";
import { DELETE } from "../Api/DELETEMethod";
import { useRouter } from "next/navigation";
import { Next } from "../Route/Next";
import { POST } from "../Api/POSTMethod";
import { BLOCK } from "../Api/BLOCKMethod";
import Link from "next/link";
import { GETToken } from "../ApiCalls/GETMethod";


interface UserEntity{
    id:number;
    username: string;
    email: string;
    phonenumber: string;
    dob:Date;
    gender:string;
    password:string;
    confirmpassword:string;
    role:string;
    type:string;
    status:string;
}


const User: UserEntity[]  = []

export const ProfileManage = ()  => {

  const [Datas,SetData] = useState(User);  

  useEffect(()=>{

    async function fetchData() {
      const Users = await GET(`http://localhost:3000/auth/profile`);

      SetData(Users);
    }

    fetchData();

  },[Datas])

    return(
        <div>

            <table>
         <thead>
           <tr>
             <th>Username</th>
             <th>Email</th>
             <th>Phone Number</th>
             <th>Date of Birth</th>
             <th>Gender</th>
             <th>Password</th>
             <th>Confirm Password</th>
             <th>Role</th>
             <th>Type</th>
             <th>Status</th>
             <th></th>

             
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((User: UserEntity) => (
            <tr key={User.id}> 
            <td>{User.username}</td>
            <td>{User.email}</td>
            <td>{User.phonenumber}</td>
            <td>{User.dob.toLocaleDateString()}</td>
            <td>{User.gender}</td>
            <td>{User.password}</td>
            <td>{User.confirmpassword}</td>
            <td>{User.role}</td>
            <td>{User.type}</td>
            <td>{User.status}</td>
            <td><UpdateButton id ={User.id}/></td>
            </tr>
           ))}
         </tbody>
       </table>
        </div>
    );
}

const UpdateButton = ({id}:{id: number}) => {
  return(
    <div>
      <Next path={`manage/${id}`} btnName="Edit"/>
    </div>
  );
}


export default ProfileManage;