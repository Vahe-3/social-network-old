import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "22fd4d4a-ed6f-4cdc-8e55-7cdbae33185f"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const securityApi = {
 getCapthcaUrl(){
    return instance.get("security/get-captcha-url");
 }
}


export const usersApi = {
    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    unFollowUsers(userId) {
        return instance.delete(`follow/${userId}`)

    },

    followUsers(userId) {

        return instance.post(`follow/${userId}`)

    },

    getUsersProfile(userId) {

        return instance.get("profile/" + userId)

    },

    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image",photoFile)
        return instance.put("profile/photo",formData,{
            
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            
        })
    },

    saveProfile(profile){
        
        
        return instance.put("profile",profile)
    },



}

export const statusApi = {
    getStatus(userId){
        return instance.get("profile/status/" + userId)
    },

    updateStatus(status){
       return instance.put("profile/status",{status:status})
    },
}


export const authApi = {
    me() {

        return instance.get("auth/me")
    },

    logout(){
        return instance.delete("auth/login")
    },

    logIn(email,password,rememberMe,captcha=false){
        return instance.post("auth/login",{
            email:email,
            password:password,
            rememberMe:rememberMe,
            captcha:captcha,
            
        })
    }

}





