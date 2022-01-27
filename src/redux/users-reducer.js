import { usersApi } from "../api/api";
import updateObjectInArray from './../utils/object-helpers';

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_STATE = "users/SET_STATE";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "users/FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    
}

const urersStateReducer = (state = initialState, action) => {


    switch (action.type) {



        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state,action.userId,{followed:true})
                    
            }

        case UNFOLLOW:

            return {
                ...state,
                users: updateObjectInArray(state,action.userId,{followed:false})
                    

                
            }

        case SET_STATE:

            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.number }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.usersCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {

                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(u => u !== action.userId)]



            }

        default:
            return state;
    }
};



const follow = (id) => ({ type: FOLLOW, userId: id });
const unFollow = (id) => ({ type: UNFOLLOW, userId: id });
export const setState = (users) => ({ type: SET_STATE, users: users });
export const setCurrentPage = (number) => ({ type: SET_CURRENT_PAGE, number: number });
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount: usersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true));

    let response = await usersApi.getUsers(currentPage, pageSize)

    dispatch(setState(response.data.items));

    dispatch(setTotalUsersCount(response.data.totalCount));

    dispatch(toggleIsFetching(false));



}


const followUfollowFlow = async (apiMethod,userId,dispatch,actionCreator,) => {

    dispatch(toggleFollowingInProgress(true, userId));

    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleFollowingInProgress(false, userId));


}


export const unFollowThunkCraetor = (userId) =>  (dispatch) => {

    followUfollowFlow(usersApi.unFollowUsers.bind(usersApi),userId,dispatch,unFollow)

}

export const followThunkCraetor = (userId) => async (dispatch) => {

    followUfollowFlow(usersApi.followUsers.bind(usersApi),userId,dispatch,follow)

}



export default urersStateReducer;

