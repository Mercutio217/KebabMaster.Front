import TokenResponse from "./models/TokenResponse";

const jsonHeaders = {
    'accept:': '*/*',
    'Content-Type':'application/json'
  };
  

const apiLogin = async (email:string, password: string, successHandler: Function, unauthorizedHandler: Function, errorHandler: Function) => {
    const response = await fetch(' http://localhost:5046/authorization/login', {
      method: 'POST',
      body: JSON.stringify({ email, password}),
      headers: jsonHeaders 
    });
    
    if(response.status != 200) {
      if(response.status == 401 || response.status == 401){
        unauthorizedHandler("Invalid password");
        return;
      }
      errorHandler("Error");
      return;
    }
    const result = await response.json() as TokenResponse;
    successHandler(result);

  }

export default apiLogin;