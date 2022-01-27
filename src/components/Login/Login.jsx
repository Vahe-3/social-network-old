import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { FormsControls } from "../common/FormsControls/FormsControls";
import style from "./Login.module.css"


let Input = FormsControls("input");

const LoginForm = (props) =>{
        return (
        <form onSubmit={props.handleSubmit} >
            <Field component={Input} placeholder="Login" name="Login" validate={[required]} /> 
            <Field component={Input} placeholder="Password" name="Password" validate={[required]} />
            <Field type="checkbox" component="input" name="RememberMe"  /> remember Me
            <button>Log in</button>
            {props.error ? <div className={style.errorDiv}>{props.error}</div> : null}

            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field type="text" component="input" name="captcha" />}
        </form>
        )
}

const Login = (props) =>{

    if(props.isAuth){
       return <Redirect to ="/profile" />
    }
   
    let onSubmit = (data) =>{
        props.login(data.Login,data.Password,data.RememberMe,data.captcha)
    }

    
    return(
        <div>
        <h2>Login</h2>
        <ReduxFormComponent onSubmit={onSubmit} captchaUrl={props.captchaUrl}  />
        
        
        
        </div>
    )
};

const ReduxFormComponent = reduxForm({form:"login"})(LoginForm)

const mapStateToPsops = (state) => ({
    isAuth:state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl,
})    

export default connect(mapStateToPsops,{login})(Login);


