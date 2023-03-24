import { MyProgressBar } from '../../../../../components/UI/MyProgressBar'
import { UserSymbolSquarDate } from '../../widgets/UserSymbolSquarDate'
import { Link } from 'react-router-dom'
import { ConvertDate } from '../../../../../utils/ConvertTime'
import { useEffect, useRef, useState } from 'react'
import { useFetching } from '../../../../../hooks/useFetching'
import ProjectManagementService from '../../../../../API/ProjectManagentService'
import ToastJsx from '../../../../../components/common/ToastJsx'
import { Collapse } from 'react-bootstrap'

export const TaskSidebarWidgets = () => {
    return (
        <div>
            
        </div>
    )
}

export const DueTime = (props) =>{
    return (
        <div>
            <span className='h4 text-dark'>
                Сроки
            </span>
            <div className='d-flex mt-5'>
                <div>
                    <p className='text-muted'>Начало</p>
                    <p className='h4 text-dark'>{ConvertDate(props.task && props.task.bdate)}</p>
                    
                </div>
                <div className='ms-5'>
                    <p className='text-muted'>Срок</p>
                    <p className='h4 text-dark'>{ConvertDate(props.task && props.task.edate)}</p>
                </div>
            </div>
        </div>
    )
}

export const TaskProgress = (props) => {
    const [taskParametersPost, seTtaskParametersPost] = useState({})
    const [show, setShow] = useState(false)

    const [putTask] = useFetching(async () => {
        await ProjectManagementService.setTaskPut(props.task.id, taskParametersPost)
        .then(()=>{
            props.getTask()
            ToastJsx('Прогресс успешно обновлен', 'success')
        })
    })

    return (
        <>
            <p className='h4 text-dark'>
                Прогресс <i className="bi bi-pencil cursor-pointer" onClick={()=>setShow(!show)}></i>
            </p>
            <div className='text-center mb-2'>
                <span className='text-center h3'>
                    {props.task && props.task.progress}%
                </span>
            </div>
            
            <MyProgressBar value={props.task && props.task.progress}/>
            <Collapse in={show}>
                <div>
                    <div className='d-flex mt-5' style={{height: '35px'}}>
                        <input 
                            type='number' 
                            min='0' 
                            max='100' 
                            className='form-control form-control-sm' 
                            value={taskParametersPost.progress} 
                            placeholder={'Введите новое значение прогресса'} 
                            onChange={(e)=> seTtaskParametersPost({...taskParametersPost, progress: e.target.value})}
                        />
                        <button onClick={()=>putTask()} className='btn btn-primary btn-sm ms-2'>save</button>
                    </div>
                </div>
            </Collapse>
        </>
    )
}

export const TaskHierarchy = (props) => {
    return (
        <div>
            <p className='h4 text-dark'>
                Иерархия
            </p>
            {
                props.taskHierarchy.map((item, index)=>
                    <div style={{paddingLeft: 15*index}} key={item.id}>
                        <Link to={`/pm/task/${props.project_id}/${item.id}`} className='text-muted text-hover-primary'>{item.title}</Link>
                    </div>
            )}
        </div>
    )
}

export const ExecutorBlock = (props) => {
    return (
        <>
            <div className='pb-2'>
                <p className='h4 text-dark'>Исполнитель</p>
            </div>
            <UserSymbolSquarDate user={props.user}/>
        </>
    )
}

export const CoExecutorBlock = (props) => {
    return (
        <>
            <div className='pb-2'>
                <p className='h4 text-dark'>Со-исполнители</p>
            </div>
            {props.user && props.user.map((user)=>
                <UserSymbolSquarDate user={user} key={user.id}/>
            )}
            

        </>
    )
}

export const ViewersBlock = (props) => {
    return (
        <>
            <div className='pb-2'>
                <p className='h4 text-dark'>Наблюдатели</p>
            </div>
            {props.user && props.user.map((user)=>
                <UserSymbolSquarDate user={user} key={user.id}/>
            )}
        </>
    )
}