import { connect } from "react-redux";
import { 
    followThunkCraetor, 
    setCurrentPage, 
    setState, 
    setTotalUsersCount, 
    toggleIsFetching,
    unFollowThunkCraetor, 
    toggleFollowingInProgress,
    getUsersThunkCreator 
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
// import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount,  } from "../../redux/users-selectors";
import { getUsersSuper } from './../../redux/users-selectors';



class UsersContainerAPI extends React.Component {

    

    componentDidMount() {
       
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }

    addNewUsers = (number) => {
        
        this.props.getUsersThunkCreator(number,this.props.pageSize);
    }

    render() {
        console.log("render")
        

        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users
            
                addNewUsers={this.addNewUsers}
                setTotalUsersCount={this.props.setTotalUsersCount}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followThunkCraetor={this.props.followThunkCraetor}
                unFollowThunkCraetor={this.props.unFollowThunkCraetor}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                setCurrentPage = {this.props.setCurrentPage}

            />
        </>
    }
}

const mapStateToProps = (state) => {
    

    return {
        
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        

    }
};





export default compose(

    connect(mapStateToProps, {
        followThunkCraetor,
        unFollowThunkCraetor,
        setState,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress,
        getUsersThunkCreator,
    
    }),

    // withAuthRedirect
)(UsersContainerAPI)


