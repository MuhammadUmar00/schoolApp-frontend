import { BASE_URL } from '@constants'

const http = async (url, options) => {
  try {
    let response 
    
    if(!options) response = await fetch(`${BASE_URL}/${url}`);

    if(options) response = await fetch(`${BASE_URL}/${url}`, options);

    response = await response?.json();

    // if (!response.success) alert("some thing went wrong");
    // if (!response.success)  //console.log("some thing went wrong");

    return response;
  } catch (error) {
    alert(`network request failed ${error}`);
    // //console.log(`network request failed ${error}`);
  }
};

export default http