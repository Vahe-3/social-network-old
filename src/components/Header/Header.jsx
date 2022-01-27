import s from "./Header.module.css";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";



const Header = (props) => {

    

    return (
        <header className={s.header}>


            <img src={logo} alt="Logo" />
            <h2>Life Story</h2>

            <div className={s.login} >{props.isFetching ? <button onClick={props.logout}>Logout from {props.login}</button> : <NavLink className={s.loginLink} to="/login">Login</NavLink>}</div>



        </header>
    )

};

export default Header;