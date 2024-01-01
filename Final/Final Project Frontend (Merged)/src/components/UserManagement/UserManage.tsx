// 'use client'
// import { useEffect, useState } from "react";
// import { GET } from "../Api/GETMethod";
// import { DELETE } from "../Api/DELETEMethod";
// import { useRouter } from "next/navigation";
// import { Next } from "../Route/Next";
// import { POST } from "../Api/POSTMethod";
// import { BLOCK } from "../Api/BLOCKMethod";
// import Link from "next/link";


// interface UserEntity{
//     id:number;
//     username: string;
//     email: string;
//     phonenumber: string;
//     dob:Date;
//     gender:string;
//     password:string;
//     confirmpassword:string;
//     role:string;
//     type:string;
//     status:string;
// }


// const User: UserEntity[]  = []

// export const UserManage = ()  => {

//   const [Datas,SetData] = useState(User);  
//   const [Totalusers, setTotalUsers] = useState<number>(0);
//   const [Activeusers, setActiveUsers] = useState<number>(0);
//   const [Blockedusers, setBlockedUsers] = useState<number>(0);

//   useEffect(()=>{

//     async function fetchData() {
//       try{

//       const Users = await GET(`http://localhost:3000/user-management/findall`);
//       console.log('Users',Users);
//      if(Array.isArray(Users)){
//       SetData(Users);
//      }else{
//       console.error('Invalid data')
//      }
//     }catch(error){
//       console.error('Error fetching data:', error);
//     }
//   }


//     fetchData();

//   },[])

//     return(
//         <div>
//             <div>
//             Total Users: {Totalusers}
//             </div>
//             <div>
//             <Link href="manage/active">Active Users: {Activeusers}</Link>
//             </div>
//             <div>
//             <Link href="manage/block">Blocked Users: {Blockedusers}</Link>
//             </div>
//             <table>
//          <thead>
//            <tr>
//              <th>Username</th>
//              <th>Email</th>
//              <th>Phone Number</th>
//              <th>Date of Birth</th>
//              <th>Gender</th>
//              <th>Password</th>
//              <th>Confirm Password</th>
//              <th>Role</th>
//              <th>Type</th>
//              <th>Status</th>
//              <th></th>
//              <th></th>
//              <th></th>
             
//            </tr>
//          </thead>
  
//          <tbody>
//          {Datas.map((User: UserEntity) => (
//             <tr key={User.id}> 
//             <td>{User.username}</td>
//             <td>{User.email}</td>
//             <td>{User.phonenumber}</td>
//             <td>{User.dob.toLocaleDateString()}</td>
//             <td>{User.gender}</td>
//             <td>{User.password}</td>
//             <td>{User.confirmpassword}</td>
//             <td>{User.role}</td>
//             <td>{User.type}</td>
//             <td>{User.status}</td>
//             <td><DeleteButton id ={User.id}/></td>
//             <td><UpdateButton id ={User.id}/></td>
//             <td><BlockButton id = {User.id}/></td>
//             </tr>
//            ))}
//          </tbody>
//        </table>
//         </div>
//     );
// }

// const UpdateButton = ({id}:{id: number}) => {
//   return(
//     <div>
//       <Next path={`manage/${id}`} btnName="Edit"/>
//     </div>
//   );
// }


// const DeleteButton = ({id}:{id: number}) => {

//   const deleteUsers = async (id: number) => {
//     const Response = await DELETE(`http://localhost:3000/user-management/delete/${id}`);
//     alert('Deleted');
//   }

//   return(
//     <div>
//       <button onClick={async ()=>await deleteUsers(id)}>Delete</button>
//     </div>
//   );
// }

// const BlockButton = ({id}:{id: number}) => {

//     const blockUsers = async (id: number) => {
//       const Response = await BLOCK(`http://localhost:3000/user-management/block/${id}`);
//       alert(`User id ${id} has been blocked`);
//     }
  
//     return(
//       <div>
//         <button onClick={async ()=>await blockUsers(id)}>Block</button>
//       </div>
//     );
//   }
  


// export default UserManage;
//................................................................................
// 'use client'
// import { useEffect, useState } from "react";
// import { GET } from "../Api/GETMethod";
// import { DELETE } from "../Api/DELETEMethod";
// import { useRouter } from "next/navigation";
// import { Next } from "../Route/Next";
// import { POST } from "../Api/POSTMethod";
// import { BLOCK } from "../Api/BLOCKMethod";
// import Link from "next/link";


// interface UserEntity{
//     id:number;
//     username: string;
//     email: string;
//     phonenumber: string;
//     dob:Date;
//     gender:string;
//     password:string;
//     confirmpassword:string;
//     role:string;
//     type:string;
//     status:string;
// }


// const User: UserEntity[]  = []

// export const UserManage = ()  => {

//   const [Datas,SetData] = useState(User);  
//   const [Totalusers, setTotalUsers] = useState<number>(0);
//   const [Activeusers, setActiveUsers] = useState<number>(0);
//   const [Blockedusers, setBlockedUsers] = useState<number>(0);

//   useEffect(()=>{

//     async function fetchData() {

//       const Users = await GET(`http://localhost:3000/user-management/findall`);
//       const Totalusers = await GET(`http://localhost:3000/user-management/count/totalusers`);
//       const Activeusers = await GET(`http://localhost:3000/user-management/count/activeusers`);
//       const Blockedusers = await GET(`http://localhost:3000/user-management/count/blockedusers`);
//       SetData(Users);
//       setTotalUsers(Totalusers);
//       setActiveUsers(Activeusers);
//       setBlockedUsers(Blockedusers);
//     }


//     fetchData();

//   },[])

//     return(
//         <div>
//             <div>
//             Total Users: {Totalusers}
//             </div>
//             <div>
//             <Link href="manage/active">Active Users: {Activeusers}</Link>
//             </div>
//             <div>
//             <Link href="manage/block">Blocked Users: {Blockedusers}</Link>
//             </div>
//             <table>
//          <thead>
//            <tr>
//              <th>Username</th>
//              <th>Email</th>
//              <th>Phone Number</th>
//              <th>Date of Birth</th>
//              <th>Gender</th>
//              <th>Password</th>
//              <th>Confirm Password</th>
//              <th>Role</th>
//              <th>Type</th>
//              <th>Status</th>
//              <th></th>
//              <th></th>
//              <th></th>
             
//            </tr>
//          </thead>
  
//          <tbody>
//          {Datas.map((User: UserEntity) => (
//             <tr key={User.id}> 
//             <td>{User.username}</td>
//             <td>{User.email}</td>
//             <td>{User.phonenumber}</td>
//             <td>{User.dob.toLocaleDateString()}</td>
//             <td>{User.gender}</td>
//             <td>{User.password}</td>
//             <td>{User.confirmpassword}</td>
//             <td>{User.role}</td>
//             <td>{User.type}</td>
//             <td>{User.status}</td>
//             <td><DeleteButton id ={User.id}/></td>
//             <td><UpdateButton id ={User.id}/></td>
//             <td><BlockButton id = {User.id}/></td>
//             </tr>
//            ))}
//          </tbody>
//        </table>
//         </div>
//     );
// }

// const UpdateButton = ({id}:{id: number}) => {
//   return(
//     <div>
//       <Next path={`manage/${id}`} btnName="Edit"/>
//     </div>
//   );
// }


// const DeleteButton = ({id}:{id: number}) => {

//   const deleteUsers = async (id: number) => {
//     const Response = await DELETE(`http://localhost:3000/user-management/delete/${id}`);
//     alert('Deleted');
//   }

//   return(
//     <div>
//       <button onClick={async ()=>await deleteUsers(id)}>Delete</button>
//     </div>
//   );
// }

// const BlockButton = ({id}:{id: number}) => {

//     const blockUsers = async (id: number) => {
//       const Response = await BLOCK(`http://localhost:3000/user-management/block/${id}`);
//       alert(`User id ${id} has been blocked`);
//     }
  
//     return(
//       <div>
//         <button onClick={async ()=>await blockUsers(id)}>Block</button>
//       </div>
//     );
//   }
  


// export default UserManage;


//..............................................................................
'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../Api/GETMethod";
import { DELETE } from "../Api/DELETEMethod";
import { useRouter } from "next/navigation";
import { Next } from "../Route/Next";
import { POST } from "../Api/POSTMethod";
import { BLOCK, BLOCKToken } from "../Api/BLOCKMethod";
import Link from "next/link";
import { DELETEToken } from "../ApiCalls/DELETEMethod";


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

export const UserManage = ()  => {

  const [Datas,SetData] = useState(User); 
  const [Totalusers, setTotalUsers] = useState<number>(0); 
  const [Activeusers, setActiveUsers] = useState<number>(0);
  const [Blockedusers, setBlockedUsers] = useState<number>(0);


  useEffect(()=>{

    async function fetchData() {

      const Users = await GETToken(`http://localhost:3000/user-management/findall`);
      const Total = await GETToken(`http://localhost:3000/user-management/count/totalusers`);
      const Active = await GETToken(`http://localhost:3000/user-management/count/activeusers`);
      const Blocked = await GETToken(`http://localhost:3000/user-management/count/blockedusers`);
     
      SetData(Users);
      setTotalUsers(Total.totalusers);
      setActiveUsers(Active.activeusers);
      setBlockedUsers(Blocked.blockedusers);

    }


    fetchData();

  },[])

    return(
      
        <div>
   <div className="flex justify-between space-x-4">
  <div className="border border-blue-500 p-4 rounded-md">
    Total User: {Totalusers}
  </div>

  <div className="border border-green-500 p-4 rounded-md">
    Active User: {Activeusers}
  </div>

  <div className="border border-red-500 p-4 rounded-md">
    Blocked User: {Blockedusers}
  </div>
</div>

  <table className="w-full bg-white border border-gray-300 rounded shadow-md">
  <thead className="bg-gray-200">
    <tr>
      <th className="py-2 px-4">ID</th>
      <th className="py-2 px-4">Username</th>
      <th className="py-2 px-4">Email</th>
      <th className="py-2 px-4">Phone Number</th>
      <th className="py-2 px-4">Gender</th>
      <th className="py-2 px-4">Role</th>
      <th className="py-2 px-4">Type</th>
      <th className="py-2 px-4">Status</th>
      <th className="py-2 px-4"></th>
      <th className="py-2 px-4"></th>
      <th className="py-2 px-4"></th>
    </tr>
  </thead>

  <tbody>
    {Datas.map((User: UserEntity) => (
      <tr key={User.id} className="border-t border-gray-300">
        <td className="py-2 px-4">{User.id}</td>
        <td className="py-2 px-4">{User.username}</td>
        <td className="py-2 px-4">{User.email}</td>
        <td className="py-2 px-4">{User.phonenumber}</td>
        <td className="py-2 px-4">{User.gender}</td>
        <td className="py-2 px-4">{User.role}</td>
        <td className="py-2 px-4">{User.type}</td>
        <td className="py-2 px-4">{User.status}</td>
        <td className="bg-red-500 rounded-xl py-0 px-4"><DeleteButton id={User.id} /></td>
        <td className="bg-green-500 rounded-xl py-0 px-4"><UpdateButton id={User.id} /></td>
        <td className="bg-gray-400 rounded-xl py-0 px-2"><BlockButton id={User.id} /></td>
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


const DeleteButton = ({id}:{id: number}) => {
 
  const deleteUser = async (id: number) => {
    const Response = await DELETEToken(`http://localhost:3000/user-management/delete/${id}`);
    alert(Response.message);
  }

  return(
    <div>
      <button onClick={async ()=>await deleteUser(id)}>Delete</button>
    </div>
  );
}

const BlockButton = ({id}:{id: number}) => {

    const blockUsers = async (id: number) => {
      const Response = await BLOCKToken(`http://localhost:3000/user-management/block/${id}`,);
      alert(Response.massage);
    }
  
    return(
      <div>
        <button onClick={async ()=>await blockUsers(id)}>Block</button>
      </div>
    );
  }
  


export default UserManage;