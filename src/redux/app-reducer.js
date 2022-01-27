import { getUserData } from "./auth-reducer";

const INITIALIZED = "app/INITIALIZED";

const initialState = {
    initialized:false
}


const appReducer = (state = initialState ,action) => {
    
    switch(action.type){

        case(INITIALIZED) :{
            return {
                ...state,
                initialized:true
            }
        }

        default: return state;
        
    }



}

export const initialized = () => ({type:INITIALIZED});

export const initializedApp = () => async (dispatch) =>{

   await dispatch(getUserData());

        dispatch(initialized());
    

}

export default appReducer;

