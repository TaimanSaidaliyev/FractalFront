import { undefinedAvatar } from "../../../../utils/Undefined"
import { Link } from "react-router-dom"

export const UserSymbolSquarDate = (props) => {
    return (
        <>
        {
            props.user
            ? <div className='d-flex align-items-center mb-7'>
                <div className='symbol symbol-50px me-5'>
                    <img src={undefinedAvatar(props.user && props.user.profile.photo ? props.user.profile.photo : '')} className='' alt='' />
                </div>

                <div className='flex-grow-1'>
                    <Link to={`/profile/${props.user && props.user.id}`} className='text-dark fw-bolder text-hover-primary fs-6'>
                        {props.user && props.user.first_name + ' ' + props.user.last_name}
                    </Link>
                    <span className='text-muted d-block fw-bold'>{props.user && props.user.profile.job_title ? props.user.profile.job_title.title : ''}</span>
                </div>
            </div>
            : <UndefinedUserSymbolSquareDate/>
        }
        </>
    )
}


export const UndefinedUserSymbolSquareDate = () => {
    return (
        <div className='d-flex align-items-center mb-7'>

            <div className='symbol symbol-50px me-5'>
                <img src={undefinedAvatar('')} className='' alt='' />
            </div>

            <div className='flex-grow-1'>
                <a href='#' className='text-muted text-hover-primary fs-6'>
                    Пользователь не указан
                </a>
            </div>

        </div>
    )
}
