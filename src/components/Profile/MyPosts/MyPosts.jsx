import React from 'react';
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { FormsControls } from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);
let Textarea = FormsControls("textarea");

const MyPostsForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="ProfileTextarea" validate={[required, maxLength10]} placeholder="Your post" />
            </div>
            <div><button>Add Post</button></div>

        </form>
    )
}



const MyPostFormContainer = reduxForm({

    form: "post"
})(MyPostsForm)


const MyPosts = (props) => {

    console.log("Render")
    let postsElement = props.profilesState.posts.map(e => <Post message={e.message} likeCount={e.likeCount} key={e.id} />)

    let addPost = (data) => {
        props.addPost(data.ProfileTextarea)
    }

    return (

        <div className={s.myPosts}>

            <h4>
                My Posts
            </h4>

            {/* <textarea value={props.profilesState.postText} onChange={(e) => { props.renderText(e.target.value) }}  ></textarea>
            <button onClick={props.addPost}>Add Post</button> */}

            <MyPostFormContainer onSubmit={addPost} />
            <div>

            </div>

            {postsElement}

        </div>
    )
};




export default MyPosts;

