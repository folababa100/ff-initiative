import axios from 'axios';
import { SIGNUP_USER } from "./types";

export const loginUser = ((object, callback) => {
  return function (dispatch) {
    dispatch({ type: 'AUTH_LOGIN_REQUEST' });
    axios.post('http://localhost:3001/users/login', object)
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'AUTH_LOGIN_SUCCESS',
          payload: response.data.email,
        });
        localStorage.setItem('token', response.data.tokens[0].token);
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
  };
});

export const signUp = () => ({
  type: SIGNUP_USER
})

// export const login = (uid) => ({
//   type: 'LOGIN',
//   uid
// })
