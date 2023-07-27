import * as ACTIONS from "./Constants";
import { login } from "../api/apiCalls";
import { signup } from "../api/apiCalls";

export const logoutSucces = () => {
  return {
    type: ACTIONS.LOGOUT_SUCCES,
  };
};

export const loginSuccess = (authState) => {
  return {
    type: ACTIONS.LOGIN_SUCCES,
    payload: authState,
  };
};

export const loginHandler = (credentials) => {
  return async function (dispatch) {
    const response = await login(credentials);
    const authState = {
      ...response.data,
      password: credentials.password,
    };
    dispatch(loginSuccess(authState));
    return response; 
  };
};

export const signupHandler = (user)=>{
  return async function(dispatch){
    const response = await signup(user);
    await dispatch(loginHandler(user));
    return response;
  }
}
