import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import React from "react";
import { Field,reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { FormsControls } from "../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10)
let Textarea = FormsControls('textarea')

const DialogsForm = (props) =>{
    return (
        <form onSubmit = {props.handleSubmit}>
        <Field component={Textarea} name="DialogsTextarea" validate={[required,maxLength10]} placeholder="Your message" />
        <button>Send</button>
        </form>
        
    )
}

const DialogsFormContainer = reduxForm({
    form:"message"
})(DialogsForm)

const Dialogs = (props) => {
    
   
    let personsElement = props.dialogsState.person.map(e => <DialogItem name={e.name} id={e.id} />);
    let messagesElement = props.dialogsState.messages.map(e => <MessagesItem message={e.message} />);

    let sendMessage = (data) =>{
        props.sendMessage(data.DialogsTextarea)
    }




    

    return (



        <div className={s.dialogs}>
            <div className={s.persons}>
                {personsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}

                <div className={s.sendMessages}>
                    {/* <textarea onChange={(e) => { props.refreshMessageText(e.target.value) }} value={props.value}  ></textarea>
                    <button onClick={props.sendMessage}>Send</button> */}

                    <DialogsFormContainer onSubmit={sendMessage} />
                </div>
            </div>


        </div>
    )

};



export default Dialogs;


