import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import user from "../../../assets/user.jpg"
import ProfileSatusHooks from "./ProfileStatus/ProfileStatusHooks";
import React,{useState} from "react";
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = React.memo(({saveProfile, profile, ...props }) => {

    let[editMode,setEditMod] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    let onMainPfotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    let onSubmit = (data) =>{
        console.log(data)
        saveProfile(data).then(response =>{
            setEditMod(false)
        })
        
        
    }

    return (
        <div>
            <div className={s.profile}>



                <div className={s.profileInfo}>

                    <div>
                        <img src={profile.photos.small === null ? user : profile.photos.small} alt="valera" />
                        {props.isOwner && <input type={"file"} onChange={onMainPfotoSelected} />}
                    </div>

                    { editMode 
                    
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> 
                    :<ProfileData isOwner={props.isOwner} goToEditMode={ () => setEditMod(true)}  profile={profile} /> }

 




                </div>

            </div>

            <div className={s.status}>
                <ProfileSatusHooks status={props.status} updateStatus={props.updateStatus} />
            </div>

        </div>


    )
});



const ProfileData = ({ profile,isOwner,goToEditMode }) => {
    return <div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
        <div><b>Full Name: </b>{profile.fullName}</div>
        <div><b>About me: </b>{profile.aboutMe}</div>

        <div><b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}</div>
        {profile.lookingForAJob && <div><b>Description to the job: </b>{profile.lookingForAJobDescription}</div>}

        <div><h3>Contacts: </h3></div> {Object.keys(profile.contacts).map(key => {
            return <Contacts contactTitle={key} contactValue={profile.contacts[key]} />
        })}




    </div>
}

const Contacts = ({ contactTitle, contactValue }) => {

    return <div><b>{contactTitle} : </b> <span>{contactValue}</span></div>

}







export default ProfileInfo;
