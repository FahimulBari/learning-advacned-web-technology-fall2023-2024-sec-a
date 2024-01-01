import { GetCookie } from "../Cookies/CookiesLocal";

export const BLOCK = async (url: string) => {
    const response = await fetch(url, { cache: 'no-cache', method: 'POST'});
  
    if(!response.ok) {
        throw new Error('Something Went Wrong'); 
      }
  
    return await response.json();
  }

  export const BLOCKToken = async (url: string) => {
    try{
      const response = await fetch(url,{
          cache: 'no-cache',
          method: 'POST',
          headers: {
              'authorization': `${await GetCookie('token')}`  
          }
      });

      if(!response.ok) {
          throw new Error(); 
      }

      const res = await response.json();  
      return res;
  }
  catch(error){
      return {error: "Something went wrong"};
  }
}
