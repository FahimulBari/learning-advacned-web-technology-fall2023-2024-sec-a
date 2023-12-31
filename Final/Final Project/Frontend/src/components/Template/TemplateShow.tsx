'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import React from "react";
import { TemplateSearchBar } from "../Search/TemplateSearch";
import { useRouter } from "next/navigation";

const Template: ITemplate[]  = []

export const TemplateShow = ()  => {

  const [Datas,SetData] = useState(Template);  

  
  useEffect(()=>{

    async function fetchData() {
      const Template = await GETToken('http://localhost:3000/template/all');
      SetData(Template);
    }

    fetchData();

  },[])

    return(
    <div>
      <TemplateSearchBar fetch={SetData}/>
    <div className="flex flex-wrap justify-center py-4">
      {Datas.map((Template: ITemplate, index) => (
        <React.Fragment key={Template.id}>
          <div className="flex-none max-w-md bg-white p-8 rounded-md shadow-md mx-4 my-4">
            <h2 className="text-xl font-bold mb-4 text-center">{Template.name}</h2>
            <h2 className="text-xl font-bold mb-4 text-center"><span className="text-orange-500">Type: </span>{Template.type}</h2>
            <p className="font-semibold text-center text-gray-600 mb-4">{Template.features}</p>
            <Show path={`/${Template.name}.html`}/>
          </div>
          {(index + 1) % 4 === 0 && <div className="w-full" key={`breaker-${index}`} />}
        </React.Fragment>
      ))}
    </div>
    </div>

    );
}

export const Show = ({path}: {path: string}) => {

  const router = useRouter();

  return(
  <div className="flex items-center justify-center">
    <button className="bg-green-400 text-white py-2 px-4 rounded-md shadow-md" onClick={() => router.push(path)}>Show</button>
  </div>
  );
}


export default TemplateShow;