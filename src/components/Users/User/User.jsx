import style from "./User.module.css"
import { NavLink } from "react-router-dom";
import userImage from "./../../../assets/user.jpg"
const User = ({user,...props}) =>{


    let u = user;
    return(
        
            <div className={style.user} key={u.id}>

                <NavLink to={`/profile/${u.id}`}><div> <img className={style.user_img} src={u.small != null ? u.small : userImage} alt="person" /></div></NavLink>

                <div>
                    <h3>{u.name}</h3>
                </div>

                <div>
                    <p>{u.status}</p>
                </div>

                <div>
                    {/* <p>{`Location : ${u.location.country + "/" + u.location.city}`}</p> */}
                </div>

                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id =>  id === u.id)}
                        onClick={() => props.unFollowThunkCraetor(u.id)}>Unfollowed</button>

                        : <button disabled={props.followingInProgress.some(id =>  id === u.id)}
                            onClick={() => props.followThunkCraetor(u.id)}>Followed</button>}

                                
                            


                </div>

            </div>
        
    )
}

export default User;