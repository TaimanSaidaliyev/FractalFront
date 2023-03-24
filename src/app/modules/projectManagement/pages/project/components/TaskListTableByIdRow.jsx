import { undefinedAvatar } from "../../../../../utils/Undefined"
import { Link } from "react-router-dom"
import { MyProgressBar } from "../../../../../components/UI/MyProgressBar"
import { ConvertDate } from "../../../../../utils/ConvertTime"


export const TaskListTablByIdRow = (props) => {
    let td_style = 'border-end pt-2 pb-1 pe-3'

    let childItems = null
    if(props.children){
        childItems = props.children.map(function(childItem){
            return(
                <TaskListTablByIdRow item={childItem} children={childItem.children} key={childItem.id}/>
            )
        })
    }

    return (
        <>     
            <tr key={props.item.id}>
                <td className={td_style}>
                    {/* <i className="h2" style={{marginLeft: props.item.level * 15 + 'px'}}>-</i> */}
                    {
                        !props.item.parent 
                        ? <i className="bi bi-caret-down-fill text-primary" style={{marginLeft: props.item.level * 15 + 'px'}}></i>
                        : <i className="bi bi-caret-right-fill text-primary" style={{marginLeft: props.item.level * 15 + 'px'}}></i>
                    }
                    
                </td>
                <td className={td_style}>
                    <Link to={`/pm/task/${props.item.project.id}/${props.item.id}`} className='text-dark text-hover-primary d-block mb-1 fs-6'>
                        {props.item.title}
                    </Link>
                </td>
                <td className={td_style + ' text-center w-100px'}>
                    <span className={props.item.status.css_color}>
                        {props.item.status.title}
                    </span>
                </td>
                <td className={td_style + ' w-200px'}>
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-25px symbol-circle mb-2">
                            <img src={`${undefinedAvatar(props.item.executor.profile.photo && props.item.executor.profile.photo)}`} alt=""/> 
                        </div>
                        <div className="ms-2 mb-1">
                            <Link to={`/profile/${props.item.executor && props.item.executor.id}`} className="text-gray-700 fw-bold text-hover-primary">
                                {props.item.executor.first_name + ' ' + props.item.executor.last_name}
                            </Link>                 
                        </div>   
                    </div>
                </td>
                <td className={td_style + ' text-center w-125px'}>
                    {ConvertDate(props.item.edate, 'ddmmyyyy')}
                </td>
                <td className={td_style + ' text-center w-125px'}>
                    <span className={props.item.priority.css_color}>
                        {props.item.priority.title}
                    </span>
                </td>
                <td className={td_style + ' w-200px border-end-0'}>
                    <MyProgressBar value={props.item.progress}/>
                </td>
            </tr>    
            {childItems 
                ? <>{childItems}</>
                : null
            }                            
        </>

    )
}
