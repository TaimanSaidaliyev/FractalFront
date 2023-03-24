import { useEffect, useState } from "react"
import UserService from "../../API/UserService"
import { useFetching } from "../../hooks/useFetching"
import { undefinedAvatar } from "../../utils/Undefined"
import { Link } from "react-router-dom"


export const UserWidgets = ({user_id, type=1}) => {
    const [user, setUser] = useState({})

    const [getUser, isUserLoading, userError] = useFetching(async () => {
        const response = await UserService.getUserShortInfo(user_id)
        setUser(response.data)
        console.log(response.data)
    })
    
    useEffect(()=>{
        getUser()
    },[])
    

    return (
        <div className="d-flex align-items-center">
            <div className="symbol symbol-25px symbol-circle mb-2">
                <img src={`${undefinedAvatar(user.profile && user.profile.photo)}`} alt=""/> 
            </div>
            <div className="ms-2 mb-1">
                <Link to={`/profile/${user && user.id}`} className="text-gray-700 fw-bold text-hover-primary">
                    {user && user.first_name && user.first_name} {user && user.last_name && user.last_name}
                </Link>                 
            </div>   
        </div>
    )
}
