import { undefinedNewImage } from "../../../../../utils/Undefined";
import { Link } from 'react-router-dom';

export const NewListItemV2 = (props) => {
    const item  = props.item
    return (
        <div className="col-md-4 mb-10">           
            <div className="card-xl-stretch me-md-6">    
                <div className="d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5" style={{backgroundImage: `url(${undefinedNewImage(item.photo)})`}}>   

                </div> 
                <div className="m-0">    
                    <Link to={`/news/view/${item.id}`} className="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">
                        {item.title}
                    </Link>       
                    <div className="fw-semibold fs-5 text-gray-600 text-dark my-4">    
                        {item && item.content.substring(0, 200).replace(/(<([^>]+)>)/gi, "")}
                    </div>
                    <div className="fs-6 fw-bold">
                        <a href="#" className="text-gray-700 text-hover-primary fw-bolder">
                            {item.author && item.author.first_name + ' ' + item.author.last_name} 
                        </a>
                        <span className="text-muted ms-2">
                            {item.created_at}
                        </span>     
                    </div>
                </div>
            </div>
        </div>
    )
}
