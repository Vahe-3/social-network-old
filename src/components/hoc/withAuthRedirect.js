import { connect } from "react-redux";
import { Redirect } from "react-router";


const mapStateToProps = (state) =>({

    isAuth:state.auth.isAuth,

})

const withAuthRedirect = (Component) => {
    let withAuthRedirectComponent = (props) =>{
        if (!props.isAuth) {
            return <Redirect to ={"/login"} />
        }

        return <Component {...props} />
    }

   return connect(mapStateToProps)(withAuthRedirectComponent);
}

export default withAuthRedirect;