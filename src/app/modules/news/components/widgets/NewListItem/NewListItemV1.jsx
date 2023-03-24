import { undefinedAvatar } from "../../../../../utils/Undefined";
import { Link } from 'react-router-dom';


export const NewListItemV1 = (props) => {
    const item = props.item
    return (
        <div className="ps-lg-6 mb-5" key={item.id}>   
            <div className="mb-6">    
                <Link to={`/news/view/${item.id}`} className="fw-bold text-dark mb-4 fs-2 lh-base text-hover-primary">    
                    {item.title}
                </Link>
                <div className="fw-semibold fs-5 mt-4 text-gray-600 text-dark">    
                    {item.content && item.content.substring(0, 200).replace(/(<([^>]+)>)/gi, "")}...
                </div>
            </div>
            <div className="d-flex flex-stack flex-wrap">    
                <div className="d-flex align-items-center pe-2">
                    <div className="symbol symbol-35px symbol-circle me-3">
                        <img alt="" src={`${undefinedAvatar(item.avatar)}`} />
                    </div>           
                    <div className="fs-5 fw-bolder">
                        <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 text-hover-primary">
                            {item.author && item.author.first_name + ' ' + item.author.last_name}
                        </a>
                        <span className="text-muted"> {item.created_at}</span>                   
                    </div>
                </div>
                <Link to={`/news/category/${item.category.id}`}>
                    <span className={item.category.color + ' fw-bolder my-2'}>
                        {item.category.title.toUpperCase()}
                    </span>
                </Link>
            </div>
        </div>
    )
}
