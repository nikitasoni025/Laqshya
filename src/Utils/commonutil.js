import jwtDecode from 'jwt-decode';

export const checkTokenExpiration =()=>{
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        sessionStorage.removeItem('token');
        return true; // Token expired and removed from storage
      } else {
        return false; // Token still valid
      }
    }
    return true; // No token found in storage
  }