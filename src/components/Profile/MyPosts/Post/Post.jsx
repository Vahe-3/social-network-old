import s from "./Post.module.css"


const Post = (props) => {
    return (
        <div className={s.post}>
            
            <img className = {s.post__img} src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt ="person" />
            
            <span className={s.post__liks}>Like {props.likeCount}</span>
            <p className={s.post__message}>{props.message}</p>
        </div>

    )
};

export default Post;