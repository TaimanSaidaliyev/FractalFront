import { useEffect, useState } from "react"
import { useFetching } from "../../../hooks/useFetching"
import { ColleguesBlock } from "./widgets/ColleguesBlock"
import { FirstBlock } from "./widgets/FirstBlock"
import { SecondBlock } from "./widgets/SecondBlock"
import UserService from "../../../API/UserService"
import { useParams } from "react-router-dom"
import { LoadingIndicator } from "../../../components/UI/LoadingIndicator"


export const MyUserProfile = () => {
    const parameters = useParams()
    const [user, setUser] = useState('')
    const [profile, setProfile] = useState('')
    const [userId, setUserId] = useState(parameters.id)

    const [getUserInfo, isGetUserInfoLoading, isGetUserInfoError] =  useFetching( async ()=> {
        const response = await (UserService.getUserInfo(userId))
        setUser(response.data.user)
        setProfile(response.data.profile)
    })

    const [getCurrentUser, isGetCurrentUserLoading, isGetCirrentUserError] =  useFetching( async ()=> {
        const response = await (UserService.getCurrentUserInfo())
        setUser(response.data.user)
        setProfile(response.data.profile)
    })

    useEffect(()=>{
        if(userId)
        {
            getUserInfo()
        }
        else
        {
            getCurrentUser()
        }
        
    }, [])

    return (
        <div className="row">
            {isGetUserInfoLoading || isGetCurrentUserLoading
            ? 
            <LoadingIndicator/>
            :
            <>
                <div className="col-md-2">
                    <FirstBlock user={user} profile={profile}/>
                </div>
                <div className="col-md-7">
                    <SecondBlock user={user} profile={profile}/>
                </div>
                <div className="col-md-3">
                    <ColleguesBlock user={user} profile={profile}/>
                </div>
            </>
            }
            
        </div>
    )
}
