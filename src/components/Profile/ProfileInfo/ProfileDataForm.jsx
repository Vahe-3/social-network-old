import { reduxForm, Field } from 'redux-form';
import React from 'react';
import style from "./ProfileDataForm.module.css"

const ProfileDataForm = (props) => {
    
    return <form onSubmit={props.handleSubmit} >
         {props.error ? <div className={style.errorDiv}>{props.error}</div> : null}
        <button >Save</button>
        <div>
            <Field name="fullName" placeholder="Full name" type="input" component="input" />
        </div>

        

        <div>
           <Field name="lookingForAJob" type="checkbox" component="input" /><b>Loking for a job:</b>
        </div>

        <div>
            <Field name="lookingForAJobDescription" placeholder="Lokking for a job description" component="textarea" />
        </div>

        <div>
            <Field name="aboutMe" placeholder="About me" component="textarea" />
        </div>
        
       <div><b>My contaccts: </b> {Object.keys(props.profile.contacts).map(key => {
           return <div>
               <Field placeholder={key} name={"contacts." + key} component="input" type="text" />
           </div>
       })}</div> 

        


        
    </form>



};

export default reduxForm({ form: "profile-data-form" })(ProfileDataForm)
