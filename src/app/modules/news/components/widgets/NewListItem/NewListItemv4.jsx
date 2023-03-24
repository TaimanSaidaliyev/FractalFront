import { undefinedNewImage } from "../../../../../utils/Undefined";
import { Link } from "react-router-dom";


export const NewListItemv4 = (props) => {
    return (
        <div className="d-flex align-items-sm-center mb-7">
            <div className="symbol symbol-60px symbol-2by3 me-4">
                <div className="symbol-label" style={{backgroundImage: `url(${undefinedNewImage(props.item.photo && props.item.photo)})`}}></div>
            </div>
            <div className="d-flex flex-row-fluid flex-wrap align-items-center">
                <div className="flex-grow-1 me-2">
                    <Link to={`/news/view/${props.item.id && props.item.id}`}className="text-gray-800 fw-bolder text-hover-primary fs-6">{props.item.title && props.item.title.substring(0, 45)}...</Link>
                    <span className="text-muted fw-bold d-block pt-1">
                        {props.item.content && props.item.content.replace(/(<([^>]+)>)/gi, "").substring(0, 45)}...
                    </span>
                </div>
            </div>
        </div>
    )
}
