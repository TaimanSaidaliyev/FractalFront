import { undefinedAvatar } from "../../../../../utils/Undefined"
import { MyTooltip } from "../../../../../components/UI/MyTooltip"
import { useNavigate } from "react-router-dom"


export const ParticipantsBubbleList = (props) => {
    const navigate = useNavigate()

    const redirectToProfile = (user_id) => {
        return navigate(`/pm/profile/`)
    }

    return (
        <div className='card-title'>
            <div className='symbol-group symbol-hover'>
                {props.users && props.users.map((user)=>
                    <div className='symbol symbol-35px symbol-circle border-success' key={user.id && user.id}>
                        <MyTooltip text={`${user.first_name + ' ' + user.last_name}`} >
                            <img alt={`${user.first_name + ' ' + user.last_name}`} src={`${undefinedAvatar(user.profile && user.profile.photo)}`} onClick={()=>redirectToProfile(user.id && user.id)}/>
                        </MyTooltip>
                    </div>
                )}
                
                <a
                    href='#'
                    className='symbol symbol-35px symbol-circle'
                >
                <span
                    className='symbol-label fs-8 fw-bolder'
                    data-bs-toggle='tooltip'
                    data-bs-trigger='hover'
                    title='View more users'
                >
                    +42
                </span>
                </a>
            </div>
        </div>
    )
}
