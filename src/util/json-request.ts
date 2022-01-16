const GetJSON = async function getJson(endpoint: string, query: string): Promise<any> {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query})
     });
  
    return response.json();
  }
  
export default GetJSON