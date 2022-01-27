import React from "react";
import { connect } from "react-redux";
import { getStatus, getUsers, updateStatus,savePhoto, saveProfile } from "../../redux/profilesState-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";

import { compose } from "redux";



class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.userId


            if (!userId) {
                this.props.history.push("/login")
            }


        }


        this.props.getUsers(userId);
        this.props.getStatus(userId);

    }


    componentDidMount() {

        this.refreshProfile()


    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }


    render() {



        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        isOwner={!this.props.match.params.userId}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}/>
    }

}

const mapStateToProps = (state) => {

    return {
        status: state.profilesState.status,
        profile: state.profilesState.profile,
        userId: state.auth.id
    }
}



export default compose(

    connect(mapStateToProps, { getUsers, getStatus, updateStatus,savePhoto,saveProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

