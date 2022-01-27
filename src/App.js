import React from "react";
import './App.css';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { initializedApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import NavBar from "./components/NavBar/NavBar";
import withSuspense from "./components/hoc/withReactSuspense";


import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const DialogsContainer  = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";



class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()

  }


  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <>
        <HeaderContainer />
        <div className="app_wrapper">

          <NavBar />

          <div className="app_wrapper_content" >
            <Switch >
              
            <Redirect from="/network" to="/profile" />
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />


            <Route path="/dialogs" render={withSuspense(DialogsContainer) } />

            <Route path="/users" render={withSuspense(UsersContainer) } />

            <Route path="/login" render={() => <Login />} />

            

            </Switch>

          </div>

        </div>
      </>

    );

  }
}

const mapStateToProps = (state) => ({

  initialized: state.app.initialized

})


export default connect(mapStateToProps, { initializedApp })(App);











