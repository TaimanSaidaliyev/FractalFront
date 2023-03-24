import { UserSymbolSquarDate } from "../../widgets/UserSymbolSquarDate"
import Comments from "../../../../common/comments/Comments"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ConvertDateAndTime } from "../../../../../utils/ConvertTime"
import { FavoriteItem } from "../../../../common/properties/Likes/FavoriteItem"
import { UploadFilesList } from "../../../../common/uploadFiles/UploadFilesList"
import { Collapse, CloseButton } from "react-bootstrap"
import SweetAlert from 'react-bootstrap-sweetalert'
import { TaskParentAddButton } from "../../project/components/TaskAddButton"
import { TaskEditButton } from "../../project/components/TaskAddButton"


export const TaskIcons = () => {
    return (
        <div className='d-flex'>
            <span className='text-muted mt-2 me-4'>
                Обновлено: 14 февраля 2023 г. 18:10
            </span>
            <span className='btn btn-icon btn-sm btn-white text-muted'>
                <i className="bi bi-bookmark-fill" style={{fontSize: '14pt'}}></i>
            </span>
            <span className='btn btn-icon btn-sm btn-white text-muted'>
                <i className="bi bi-pencil-square" style={{fontSize: '14pt'}}></i>
            </span>
            <span className='btn btn-icon btn-sm btn-white text-muted'>
                <i className="bi bi-journals" style={{fontSize: '14pt'}}></i>
            </span>
            <span className='btn btn-icon btn-sm btn-white text-muted'>
                <i className="bi bi-trash-fill" style={{fontSize: '14pt'}}></i>
            </span>
        </div>  
    )
}


export const TimeTracking = (props) => {
    const [state, setState] = useState(false)
    const [show, setShow] = useState(false)

    return (
        <div className="mt-10">
            <h3 className="fs-4 text-primary fw-bolder mb-0 cursor-pointer" onClick={()=> setShow(!show)}>
                Потраченное время - <span className="text-muted">{props.timeTrackingCount ? props.timeTrackingCount : 0} часов</span>
            </h3>
            <Collapse in={show}>
                <div>
                    <table className="table table-hover table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 w-100 border-bottom-2">
                        <thead>
                            <tr>
                                <th className="text-muted fw-bolder border-end border-bottom">Описание</th>
                                <th className="text-center text-muted fw-bolder border-end border-bottom w-250px">Пользователь</th>
                                <th className="text-center text-muted fw-bolder border-end border-bottom w-150px">Потраченное время</th>
                                <th className="text-center text-muted fw-bolder border-bottom w-150px">Дата</th>
                                <th className="text-center text-muted fw-bolder border-bottom"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.timetracking && props.timetracking.map((timeTracking)=>
                            <tr key={timeTracking.id}>
                                <td className="border-end">
                                    {timeTracking.description && timeTracking.description}
                                </td>
                                <td className="text-center border-end">
                                    {timeTracking.author && timeTracking.author.first_name + ' ' + timeTracking.author.last_name}
                                </td>
                                <td className="text-center border-end">
                                    {timeTracking.spent_time && timeTracking.spent_time}
                                </td>
                                <td className="text-center">
                                    {timeTracking.track_date && timeTracking.track_date}
                                </td>
                                <td className="w-10px">
                                    <CloseButton onClick={()=>props.deleteTimeTrackingValue(timeTracking.id)} />
                                </td>
                            </tr>
                            )}
                            {
                                !state 
                                ?   <tr>
                                        <td colSpan={5}>
                                            <i className="bi bi-plus-lg text-primary cursor-pointer"></i>
                                            <span className='text-primary text-hover-danger cursor-pointer' onClick={()=>setState(!state)}>Добавить время</span>
                                        </td>
                                    </tr>
                                : 
                                <>
                                <tr>
                                    <td className="border-end ">
                                        <input type="text" className="form-control form-control-sm" placeholder="Описание" value={props.newTimeTrackingValue.description} onChange={(e)=>{props.setNewTimeTrackingValue({...props.newTimeTrackingValue, description: e.target.value})}}/>
                                    </td>
                                    <td className="border-end text-center text-muted">
                                        Вы
                                    </td>
                                    <td className="border-end">
                                        <input type='number' className="form-control form-control-sm" placeholder="Время" value={props.newTimeTrackingValue.spent_time} onChange={(e)=>{props.setNewTimeTrackingValue({...props.newTimeTrackingValue, spent_time: e.target.value})}}/>
                                    </td>
                                    <td className="">
                                        <input type='date' className="form-control form-control-sm" placeholder="Дата" value={props.newTimeTrackingValue.track_date} onChange={(e)=>{props.setNewTimeTrackingValue({...props.newTimeTrackingValue, track_date: e.target.value})}}/>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan={5}>
                                        <button className="btn btn-sm btn-primary" onClick={()=>{props.saveTimeTracking(); setState(!state)}}>Сохранить</button>
                                        <button className="btn btn-sm btn-light ms-2" onClick={()=>setState(!state)}>Отмена</button>
                                    </td>
                                </tr>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
            </Collapse>
        </div>
    )
}


export const AttachedFiles = (props) => {
    const [switchValue, setSwitchValue] = useState(true)
    const [viewType, setViewType] = useState(2)
    const [show, setShow] = useState(false)

    const Switcher = () => {
        setSwitchValue(!switchValue)
        if(switchValue){
            setViewType(1)
        }
        else{
            setViewType(2)
        }
        
    }

    return (
        <>
        <div className="d-flex justify-content-between">
            <span className="fs-4 text-primary fw-bolder mb-0 cursor-pointer" onClick={()=>setShow(!show)}>Прикрепленные файлы</span>
            <div>
                <button className={`btn btn-light btn-icon btn-sm ${switchValue ? 'btn-primary' : 'btn-light'}`} onClick={()=>{Switcher(); setShow(true)}}>
                    <i className="bi bi-app"></i>
                </button>
                <button className={`btn btn-icon btn-sm ${!switchValue ? 'btn-primary' : 'btn-light'}`} onClick={()=>{Switcher(); setShow(true)}}>
                    <i className="bi bi-card-list"></i>
                </button>
            </div>
        </div>
        <Collapse in={show}>
            <div>
                <UploadFilesList type={viewType} record_id={props.record_id} module_id={props.module_id}/>
            </div>
        </Collapse>
        </>
                
    )
}


export const TaskComments = (props) => {
    return (
        <div className="mb-5">
            {props.id && <Comments module_id={3} record_id={props.id}/>}
            
        </div>
    )
}


export const RelatedTasks = (props) => {
    const [show, setShow] = useState(false)

    return (
        <div className="mt-5">
            <h3 className="fs-4 text-primary fw-bolder mb-0 cursor-pointer" onClick={()=>{setShow(!show)}}>
                Связанные задачи (0)
            </h3>
            <Collapse in={show}>
                <div>
                    <table className="table table-hover">
                        <tbody>
                        {
                            props.related_tasks && props.related_tasks.map((task)=>
                            <tr key={task.id}>
                                <td className="border-bottom">
                                    <Link to={`/pm/task/${task.project.id}/${task.id}`} className="my-2 mx-2 text-dark text-hover-primary">
                                        #{task.id} - {task.title}
                                    </Link>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </Collapse>
        </div>
                
    )
}


export const TaskHeader = (props) => {
    const [showTaskDeleteAlert, setShowTaskDeleteAlert] = useState(false)

    const TaskWarningDeleteAlert = () => {
        return (
            <SweetAlert
                warning
                showCancel
                show={showTaskDeleteAlert}
                confirmBtnText="Удалить!"
                confirmBtnBsStyle="danger"
                title="Вы уверены?"
                onConfirm={()=>{props.deleteTask(); setShowTaskDeleteAlert(false);}}
                onCancel={()=>{setShowTaskDeleteAlert(false);}}
                btnSize={'sm'}
                >
                Удаление задачи предевед к безвозратной потере
            </SweetAlert>
        )
    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <div>
                    <span className='h2 fw-bold'>{props.task && props.task.title}</span>
                    <span className={`${props.task && props.task.status.css_color} ms-3`}>
                        {props.task && props.task.status.title}
                    </span>
                    <span className={`${props.task && props.task.priority.css_color} ms-3`}>
                        {props.task && props.task.priority.title}
                    </span>
                </div>
                <div className="text-end">
                    <button className='btn btn-sm btn-light-danger'>
                        Исполнить
                    </button>
                    <TaskParentAddButton parentTaskId={props.task && props.task.id}/>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-6'>
                <UserSymbolSquarDate user={props.task && props.task.author}/>
                <div className='d-flex'>
                    <span className='text-muted mt-2 me-4'>
                        Обновлено: {props.task && ConvertDateAndTime(props.task.updated_at)}
                    </span>
                    <span className='btn btn-icon btn-sm btn-white text-muted'>
                        {props.task && <FavoriteItem module_id={3} record_id={props.task && props.task.id} type_id={2} />}
                    </span>
                    <TaskEditButton task_id={props.task && props.task.id}/>
                    <span className='btn btn-icon btn-sm btn-white text-muted'>
                        <i className="bi bi-journals" style={{fontSize: '14pt'}}></i>
                    </span>
                    <span className='btn btn-icon btn-sm btn-white text-muted' onClick={()=>{setShowTaskDeleteAlert(true)}}>
                        <i className="bi bi-trash-fill" style={{fontSize: '14pt'}}></i>
                        {showTaskDeleteAlert && TaskWarningDeleteAlert()}
                    </span>
                </div>
            </div>
        </>
    )
}


export const TaskBody = (props) => {
    return (
        <span className="fs-6">
            <div className="ck-content" style={{minHeight: '0px'}} dangerouslySetInnerHTML={{__html: props.body}}/>
        </span>
    )
}