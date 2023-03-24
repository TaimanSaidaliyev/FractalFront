import { SocialNetworkBlock } from "./SocialNetworkBlock"
import { undefinedAvatar } from "../../../../utils/Undefined"

export const FirstBlock = (props) => {
    const user = props.user
    const profile = props.profile

    return (
        <div className="mx-5 mb-10">
            <div className="w-100 h-200px bgi-no-repeat bgi-position-center bgi-size-cover card-rounded mb-7" style={{backgroundImage: `url(${undefinedAvatar(profile.photo)})`}}></div>
            <div className="text-gray-900 text-hover-primary fs-2 fw-bold me-1 text-center">
                {user.last_name && user.last_name} {user.first_name && user.first_name} {profile.fathers_name && profile.fathers_name}
            </div>
            <div className="text-center mt-2 fs-4 fw-bolder text-primary">
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary btn-sm">Написать</button>
            </div>
            <div className="fw-semibold fs-5 text-gray-600 text-dark mt-4 text-center">
                {profile.quote && profile.quote}
            </div>
            <SocialNetworkBlock profile={profile}/>
        </div>
    )
}
