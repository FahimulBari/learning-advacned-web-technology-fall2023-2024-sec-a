'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";


interface UserEntity {
    id: string;
    username: string;
    email: string;
    gender: String;
    role: string;
    type: string; 
}

const Userentity: UserEntity[]  = []

export const UserSearch = ()  => {

  const [Datas,SetData] = useState(Userentity);  

  
  useEffect(()=>{

    async function fetchData() {
      const Res = await GETToken('http://localhost:3000/user/all');
      SetData(Res);
    }

    fetchData();

  },[])

    return(
      <div> 
        <SearchBar fetch={SetData}/>
        <div className="flex flex-col items-center justify-center py-3">
          <table className="border-collapse border border-black shadow-md mb-8">
          <thead>
            <tr className="bg-black text-white">
              <th className="py-3 px-4 border border-black">Name</th>
              <th className="py-3 px-4 border border-black">Email</th>
              <th className="py-3 px-4 border border-black">Gender</th>
              <th className="py-3 px-4 border border-black">Role</th>
              <th className="py-3 px-4 border border-black">Type</th>
            </tr>
          </thead>

          <tbody>
            {Datas.map((Userentity: UserEntity) => (
              <tr key={Userentity.id} className="bg-white">
                <td className="py-2 px-4 border border-black">{Userentity.username}</td>
                <td className="py-2 px-4 border border-black">{Userentity.email}</td>
                <td className="py-2 px-4 border border-black">{Userentity.gender}</td>
                <td className="py-2 px-4 border border-black">{Userentity.role}</td>
                <td className="py-2 px-4 border border-black">{Userentity.type}</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </div>
    );
}

export const SearchBar = ({fetch}: {fetch: any}) =>{

  const [Datas,SetData] = useState('');

  const handleInput = (e:any) => {
    const value = e.target.value; 
    console.log(value);
    SetData(value);
}

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(Datas)
    if(Datas != '') {
    const Response = await GETToken(`http://localhost:3000/search/user/${Datas}`);
    fetch(Response);
    }else{
      const Response = await GETToken(`http://localhost:3000/search/user/`);
      fetch(Response);
    }
}


  return(
    <div className="flex items-center justify-center">
    <form className="bg-white p-4 rounded-md shadow-md" method="post" onSubmit={handleSubmit}>
      <input
        className="border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        type="text"
        name="search"
        onChange={handleInput}
        placeholder="Search Users"
      />
      <button
        className="ml-2 bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
  );

}

export default UserSearch;