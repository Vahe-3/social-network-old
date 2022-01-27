const SEND_MESSAGE = "dialogsState/SEND-MESSAGE";


const initialState = {

  person: [
    { id: 1, name: "Vahe" },
    { id: 2, name: "Artur" },
    { id: 3, name: "Armine" },
    { id: 4, name: "Smbo" },
    { id: 5, name: "Vazgen" },
  ],

  messages: [
    { id: 1, message: "Hi how are you?" },
    { id: 2, message: "Hello my friend" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Hello world" }
  ],

  

}

const dialogsStateReducer = (state = initialState, action) => {
  

  switch (action.type) {

    

    case (SEND_MESSAGE): {

      

      let newMessage = {
        id: state.messages.length + 1,
        message: action.message,
      }
      

      return {
        ...state,
        
        messages:[...state.messages,newMessage]
      };
    }

    default:
      return state;
  }


};



export const sendMessage = (message) => ({
  type: SEND_MESSAGE,message
});



export default dialogsStateReducer

