import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css"

const ProfileSatus = (props) => {

    let [aditMode, setAditMode] = useState(false)
    let [state, setState] = useState(props.status)

    useEffect(() => { setState(props.status) }, [props.status])


    let editModeOn = () => {
        setAditMode(!aditMode)
    }

    let editModeOff = () => {
        setAditMode(!aditMode)

        props.updateStatus(state)
    }

    let refreshState = (e) => {
        let txt = e.target.value
        setState(txt)
    }

    return (
        <div className={s.status}>


            {

                aditMode ? <div><input onChange={refreshState} value={state} onBlur={editModeOff} autoFocus={true} type="text" /></div> :
                            <div><span onDoubleClick={editModeOn} >{(props.status === null || props.status === "") ? "-------" : props.status}</span></div>


            }


        </div>
    )
}

export default ProfileSatus;





