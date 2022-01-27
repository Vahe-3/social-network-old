import { connect } from "react-redux";
import { sendMessage } from "../../redux/dialogsState-reducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStatesToProps = (state) => {


    return {
        
        dialogsState: state.dialogsState,


    }
};


export default compose(


    connect(mapStatesToProps, { sendMessage,  }),
    withAuthRedirect

)(Dialogs);







