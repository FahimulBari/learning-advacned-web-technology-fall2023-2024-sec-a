'use client'
import { useState } from "react";
import { GETToken } from "../ApiCalls/GETMethod";


export const TemplateSearchBar = ({fetch}: {fetch: any}) =>{

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
    const Response = await GETToken(`http://localhost:3000/search/template/${Datas}`);
    fetch(Response);
    }else{
      const Response = await GETToken(`http://localhost:3000/search/template/`);
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
        placeholder="Search Templates"
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
