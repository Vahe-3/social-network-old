import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserData, logout, } from "../../redux/auth-reducer";



class HeaderContainer extends React.Component {

    

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({

    isFetching: state.auth.isAuth,
    login: state.auth.login

})



export default connect(mapStateToProps, { getUserData, logout})(HeaderContainer);

