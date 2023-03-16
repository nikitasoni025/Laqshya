import jwtDecode from 'jwt-decode';

export const checkTokenExpiration =()=>{
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        sessionStorage.removeItem('accessToken');
        return true; // Token expired and removed from storage
      } else {
        return false; // Token still valid
      }
    }
    return true; // No token found in storage
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