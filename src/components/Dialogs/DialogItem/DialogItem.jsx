import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.person}>
            <NavLink activeClassName={s.active} to={"/dialogs/" + props.id} >
                <img className={s.person__img} src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg" alt="person" />
                <p>{props.name}</p>
                </NavLink>
        </div>
    )
};

export default DialogItem;