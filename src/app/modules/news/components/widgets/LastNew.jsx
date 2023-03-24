import { undefinedNewImage, undefinedAvatar } from "../../../../utils/Undefined";
import { Link } from 'react-router-dom';

export const LastNew = (props) => {
    const item = props.item
    return (
        <div className="h-100 d-flex flex-column justify-content-between pe-lg-6 mb-lg-0 mb-10" key={item.id && item.id}>    
            <div className="mb-3">
                <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px" style={{backgroundImage: `url(${undefinedNewImage(item.photo)})`}}>
                </div>
            </div>
            <div className="mb-5">    
                <Link to={`/news/view/${item.id && item.id}`} className="fs-2 text-dark fw-bold text-hover-primary text-dark lh-base">
                    {item.title && item.title}
                </Link>       
                <div className="fw-semibold fs-5 text-gray-600 text-dark mt-4">    
                    {item.content && item.content.substring(0, 300).replace(/(<([^>]+)>)/gi, "")}...
                </div>
            </div>
            <div className="d-flex flex-stack flex-wrap">    
                <div className="d-flex align-items-center pe-2">
                    <div className="symbol symbol-35px symbol-circle me-3">
                        <img alt="" src={`${undefinedAvatar(item.avatar && item.avatar)}`} />
                    </div>           
                    <div className="fs-5 fw-bolder">
                        <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">
                            {item.author && item.author.first_name} {item.author && item.author.last_name}
                        </a>
                        <span className="text-muted"> {item.created_at && item.created_at}</span>                   
                    </div>            
                </div>

                <Link to={`/news/category/${item.category && item.category.id}`}>
                    <span className={item.category && item.category.color + ' fw-bolder my-2'}>
                        {item.category && item.category.title.toUpperCase()}
                    </span>
                </Link>
            </div>
        </div>
    )
}
