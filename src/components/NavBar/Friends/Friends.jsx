import s from "./Friends.module.css"

const Friends = (props) =>{

    return(
        <div className={s.friendsItem}>
            <img src="https://cdn141.picsart.com/326383677140211.png?type=webp&to=min&r=640" />
            <p>{props.name}</p>
        </div>
    )

};


export default Friends;