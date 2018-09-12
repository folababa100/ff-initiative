import axios from 'axios';
import { SIGNUP_USER, LOGIN_USER, AUTH_LOGIN_USER_REQUEST } from "./types";

export const loginUser = ((object, callback) => {
  return (dispatch) => {
    dispatch({ type: AUTH_LOGIN_USER_REQUEST });
    axios.post('http://localhost:3001/users/login', object)
      .then((response) => {
        console.log(response)
        dispatch({
          type: LOGIN_USER,
          payload: response.data.email,
        });
        localStorage.setItem('token', response.data.tokens[0].token);
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((e) => {
        console.log(e)
      })
  };
});

export const signUp = ((object, callback) => {
  return (dispatch) => {
    axios.post('http://localhost:3001/users', object)
      .then((res) => {
        console.log(res)
        dispatch({
          type: SIGNUP_USER
        })
        localStorage.setItem('token', res.data.tokens[0].token);
        if (typeof callback === 'function') {
          callback(null, res.data);
        }
      })
      .catch((error) => {
        dispatch({ type: 'SIGNUP_USER_FAILURE' });
        if (typeof callback === 'function') {
          callback(error, null);
        }
      });
  }
})

// export const login = (uid) => ({
//   type: 'LOGIN',
//   uid
// })
