import { useFetching } from "../hooks/useFetching"
import UserService from "../API/UserService"
import { useEffect, useState } from "react"


export const GetUserInfo = (userId) => {
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState({})

    const [getUserInfo, isGetUserInfoLoading, isGetUserInfoError] =  useFetching( async ()=> {
        const response = await (UserService.getUserInfo(userId))
        setUser(response.data.user)
        setProfile(response.data.profile)
    })
    
    useEffect(()=>{
        getUserInfo(userId)
        
    }, [])
    console.log(user, profile)
    return user, profile
}
