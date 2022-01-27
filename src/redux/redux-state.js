import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import  thunk  from "redux-thunk";
import appReducer from "./app-reducer";
import setUserDataReducer from "./auth-reducer";
import dialogsStateReducer from "./dialogsState-reducer";
import profilesStateReducer from "./profilesState-reducer";
import saidBarStateReducer from "./saidBarState-reducer";
import urersStateReducer from "./users-reducer";


const reducers = combineReducers({
    
    profilesState:profilesStateReducer,
    dialogsState: dialogsStateReducer,
    saidBarState: saidBarStateReducer,
    usersState: urersStateReducer,
    auth: setUserDataReducer,
    
    form:formReducer,
    app:appReducer,
})




let store = createStore(reducers,applyMiddleware(thunk));

window.__store__ = store;







export default store;