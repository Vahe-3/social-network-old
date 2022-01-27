import { createSelector } from "reselect";

const  getUsers = (state) =>{
    return state.usersState.users
};


//Reselect - реализация для примера
export const getUsersSuper = createSelector(getUsers,(users) =>{
    return users.filter(u => u);
})

export const  getPageSize = (state) =>{
    return state.usersState.pageSize
};

export const  getTotalUsersCount = (state) =>{
    return state.usersState.totalUsersCount
};

export const  getCurentPage = (state) =>{
    return state.usersState.currentPage
};

export const  getIsFetching = (state) =>{
    return state.usersState.isFetching
};

export const  getFollowingInProgress = (state) =>{
    return state.usersState.followingInProgress
};







