import jwtDecode from 'jwt-decode';

export const checkTokenExpiration = () => {
      
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    const decodedToken = jwtDecode(token);
    const expUTC = new Date(decodedToken.exp); // Convert exp value to UTC
    const offset = new Date().getTimezoneOffset(); // Get the difference between local timezone and UTC in minutes
    const nowUTC = new Date(Date.now() - (offset * 60 * 1000)); // Convert to UTC by subtracting the offset in milliseconds
    if (nowUTC.getTime() < expUTC.getTime()) {
      sessionStorage.removeItem('accessToken');
      alert("Session Expired !!, Login Again") // Token expired and removed from storage
      return true;
    } else {
      return false;
    }
  }else{
    return true;
  }
}


export const getType=(value,body)=>{
  if(value.params){
    return {params:body}
  }else if(value.query){
    if(typeof body === 'object'){
      return {query:body._id}
    }else{
      return {query:body};
    }
  }
  return {};

}