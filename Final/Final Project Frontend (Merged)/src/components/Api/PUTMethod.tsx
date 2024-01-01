export const PUT = async (url: string, data: object) => {
    const response = await fetch(url,{
        cache: 'no-cache',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    console.log(response);
    // if(!response.ok) {
    //     throw new Error('Something Went Wrong'); 
    //   }

      const res = await response.json();  

      console.log(res);
      
      return res;
}
// PUTMethod.tsx
// PUTMethod.tsx
export const PUTToken = async (url: string, data: any) => {
    try {
      const token = ''; // Replace with your actual access token
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          // Add any other headers if needed
        },
        body: JSON.stringify(data),
      });
  
      console.log('Response Status:', response.status);
      const result = await response.json();
      console.log('Response Body:', result);
  
      return result;
    } catch (error) {
      console.error('PUT request failed:', error);
      throw error; // Rethrow the error to be caught by the calling function
    }
  };
  
  