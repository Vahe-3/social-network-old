import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
import React from "react";


const NavBar = (props) => {
    
    // let friendsElement = props.saidBar.map(e => <Friends name={e.name} />)

    return (
        <nav className={s.nav}>
            

            

             <div className={s.nav__a}>
                <NavLink to="/profile" activeClassName={s.active} >Profile</NavLink>

            </div>

            <div className={s.nav__a}>
                <NavLink to="/dialogs" activeClassName={s.active}  >Messages</NavLink>

            </div>

            <div className={s.nav__a}>
                <NavLink to="">News</NavLink>

            </div>

            <div className={s.nav__a} >
                <NavLink to="">Music</NavLink>

            </div>

            <div className={s.nav__a}>
                <NavLink to="">Settings</NavLink>

            </div>

            <div className={s.nav__a}>
                <NavLink to="/users" activeClassName={s.active}>Find Users</NavLink>
            </div>

            <div className={s.friends}>
                

                {/* {friendsElement} */}

            </div>
            
            

           

        </nav>
    )

};

export default NavBar;