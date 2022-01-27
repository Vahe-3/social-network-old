import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";
import { securityApi } from './../api/api';

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCSESS = "auth/GET_CAPTCHA_URL_SUCSESS"

const initialState = {

  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl:null


}

const setUserDataReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_DATA: 
      return {
        ...state,
        ...action.payload,
      }

      case GET_CAPTCHA_URL_SUCSESS: 
        return {
          ...state,
          captchaUrl:action.captchaUrl
          
  
        }




    



    default:
      return state;
  

      }
};



export const setUserData = (id,login,email,isAuth) => ({ type: SET_USER_DATA, payload:{id,login,email,isAuth} });
export const getCaptchaUrlSucsess= (captchaUrl) =>({type:GET_CAPTCHA_URL_SUCSESS,captchaUrl})

export const getUserData = () => async (dispatch) => {
  let response = await authApi.me()

    if (response.data.resultCode === 0) {
        let {id,login,email} = response.data.data

      dispatch(setUserData(id,login,email,true));

    }

  
}

export const getCapthcaUrl = () => async dispatch =>{
  const response = await securityApi.getCapthcaUrl();


   dispatch(getCaptchaUrlSucsess(response.data.url))

   debugger
}


export const login = (email,password,rememberMe,captcha) => async (dispatch) => {

  
let response = await authApi.logIn(email,password,rememberMe,captcha)
    if (response.data.resultCode === 0) {
        

      dispatch(getUserData());
    } else {
      if(response.data.resultCode === 10){
        
        dispatch(getCapthcaUrl())
      }
      
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error" 
       dispatch(stopSubmit("login",{_error:message}))
    }

}



export const logout = () => async (dispatch) => {
let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        

      dispatch(setUserData(null,null,null,false));
    }

 

}






export default setUserDataReducer

