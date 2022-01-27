
import { connect } from "react-redux";
import { addPostActionCreator} from "../../../redux/profilesState-reducer";
import MyPosts from "./MyPosts";





let mapStatesToProps = (state) => {
    

    return {
        profilesState: state.profilesState,
        
    }
};


const MyPostsContainer = connect(mapStatesToProps, {
    
    addPost:addPostActionCreator
})(MyPosts);

export default MyPostsContainer;

