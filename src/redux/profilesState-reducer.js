import { statusApi, usersApi } from "../api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = "profilesState/ADD-POST";
const SET_USER_PROFILE = "profilesState/SET_USER_PROFILE";
const SET_STATUS = "profilesState/SET_STATUS";
const DELETE_POST = "profilesState/DELETE_POST";
const SET_NEW_PROFILE_PHOTO = "SET_NEW_PROFILE_PHOTO";

const initialState = {

  posts: [
    { id: 1, message: "Hi its my first post", likeCount: 50 },
    { id: 2, message: "Hello World", likeCount: 0 },
    { id: 3, message: "Today is burifull", likeCount: 10 },
    { id: 4, message: "Yo", likeCount: 310 },
  ],

  

  profile: null,
  status: ""

}

const profilesStateReducer = (state = initialState, action) => {




  switch (action.type) {

    case (ADD_POST): {



      let newPost = {
        id: state.posts.length + 1,
        message: action.post,
        likeCount: 0,
      }



      return {
        ...state,

        posts: [...state.posts, newPost],

      }
    }


    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case DELETE_POST:
      return{
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId)
      }

      case SET_NEW_PROFILE_PHOTO:
        return{
          ...state,
          profile:{...state.profile,photos:action.photos}
        }




    default:
      return state;


  }


};

export const addPostActionCreator = (post) => ({
  type: ADD_POST, post
})



export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
})

export const deletePostActionCreator = (postId) =>({
  type:DELETE_POST,
  postId,
})

export const setNewProfilePhoto = (file) =>({
  type:SET_NEW_PROFILE_PHOTO,
  photos:file
})






export const getUsers = (userId) => async (dispatch) => {

 let response = await  usersApi.getUsersProfile(userId)
    dispatch(setUserProfile(response.data))

  
}

export const getStatus = (userId) => async (dispatch) => {

 let response = await statusApi.getStatus(userId)
    dispatch(setStatus(response.data))
  

}

export const updateStatus = (status) => async (dispatch) => {
 let response = await statusApi.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  
}

export const savePhoto = (photoFile) => async (dispatch) => {
  
  let response = await usersApi.savePhoto(photoFile)
     if (response.data.resultCode === 0) {
       dispatch(setNewProfilePhoto())
     }
   
 }

 export const saveProfile = (profile) => async (dispatch,getState) => {
  
  let response = await usersApi.saveProfile(profile)
     const userId = getState().auth.id
     if (response.data.resultCode === 0) {
       dispatch(getUsers(userId))
     } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error" 
       dispatch(stopSubmit("profile-data-form",{_error:message}))
       return Promise.reject(message);
     }
   
 }



export default profilesStateReducer;







