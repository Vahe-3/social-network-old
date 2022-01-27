import React from "react";
import s from "./ProfileStatus.module.css"

class ProfileSatus extends React.Component {

    

    state = {
        aditMode: false,
        status:this.props.status, 
    }

    activateEditMode = () => {
        console.log(this)
        this.setState({
            aditMode: true
        })
    }

    disActivateEditMode = () => {
        this.setState({
            aditMode: false
        })

        this.props.updateStatus(this.state.status)
    }

    setStatus = (e) =>{
        this.setState({
            status:e.target.value
        })
    }

    componentDidUpdate(prevProps,prevState){

        if(prevProps.status !== this.props.status){
        this.setState({
            status:this.props.status
        })
    }

    }




    render() {

        

        return (
            <div className={s.status}>
                {

                    this.state.aditMode ?
                        
                        <div>
                            <input onChange={this.setStatus} onBlur ={this.disActivateEditMode} autoFocus={true} value={this.state.status} type="text" />
                        </div>

                        :

                        <div>
                            <span  onDoubleClick={this.activateEditMode}>{(this.props.status === null || this.props.status === "" )   ? "-------" : this.props.status}</span>
                        </div>
                }






            </div>
        )
    }


}

export default ProfileSatus;