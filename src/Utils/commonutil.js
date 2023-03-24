import jwtDecode from 'jwt-decode';

export const checkTokenExpiration = () => {

  const token = sessionStorage.getItem('accessToken');
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      // Token has expired
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('isLogined');
      sessionStorage.removeItem('visited');
      return true;
    } else {
      // Token is still valid
      return false;
      // Set up timer to check for token expiration
    }
  }else{
    return true;
  }

  }


  export const getType = (value, body) => {
    console.log("From Utils",body._id,typeof body);
    if (value.params) {
      return { params: body }
    } else if (value.query) {
      if (typeof body === 'object') {
        console.log("fromutils",body._id);
        return { query: body.id }
      } else {
        return { query: body._id };
      }
    }
    return {};

  }