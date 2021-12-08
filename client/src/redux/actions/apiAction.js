import axios from "axios";
export const EMAIL_VALIDATION = 'EMAIL_VALIDATION';


export function reqEmailValidation (endpoint, params) {
  const SERVER = process.env.REACT_APP_SERVER || 'http://localhost:80'
  const query = `?email=${params}`
  return (dispatch) => {
    axios.post(
      SERVER + endpoint + query, 
      { widthCredentials : true }
    )
  }
};
