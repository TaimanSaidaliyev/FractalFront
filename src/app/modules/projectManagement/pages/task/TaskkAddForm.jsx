import { useEffect, useState } from "react";
import { useFetching } from "../../../../hooks/useFetching";
import ProjectManagementService from "../../../../API/ProjectManagentService";
import { MySelectInput } from "../../../../components/UI/MySelectInput";
import { MySelectUserInput } from "../../../../components/UI/MySelectUserInput";
import Multiselect from "multiselect-react-dropdown";
import { TaskParentInput } from "./widgets/TaskParentInput"
import ToastJsx from "../../../../components/common/ToastJsx";
import { Collapse } from "react-bootstrap";
import MyCKEditor from "../../../../components/UI/MyCKEditor";
import { useNavigate } from "react-router-dom";


export const TaskkAddForm = (props) => {
    const [taskParametersValues, setTaskParametersValues] = useState({})
    const [taskParametersPost, setTaskParametersPost] = useState({})
    const [participantsBool, setParticipantsBool] = useState(false)
    const [coExecutors, setCoExecutors] = useState([])
    const [viewers, setViewers] = useState([])
    const [taskId, setTaskId] = useState([])
    const navigate = useNavigate()


    const [getTask] = useFetching(async () => {
        const response = await ProjectManagementService.getTaskAddParameters(1)
        setTaskParametersValues(response.data)
    })

    const [getTaskDetail] = useFetching(async () => {
        const response = await ProjectManagementService.getTaskById(1, props.task_id)
        setTaskParametersPost(response.data.task_detail)
        setCoExecutors(response.data.task_detail.co_executor)
        setViewers(response.data.task_detail.viewers)
        setTaskId(response.data.task_detail.id)
    })

    const [setTask] = useFetching(async () => {
        await ProjectManagementService.setTaskAdd(1, taskParametersPost)
        .then(() => 
            {
                ToastJsx('Задача успешно добавлена', 'success')
                props.getTasks()
            })
    })

    const [putTask] = useFetching(async () => {
        await ProjectManagementService.setTaskPut(taskId, taskParametersPost)
        .then(() => 
            {
                ToastJsx('Задача успешно обновлена', 'success')
                navigate('/pm')
            })
    })

    useEffect(()=>{
        getTask()
        setTaskParametersPost({...taskParametersPost, parent: props.parent && props.parent})
        if(props.type==='edit'){
            getTaskDetail()
        }
    }, [])

    useEffect(()=>{
        console.log(taskParametersPost)
    },[taskParametersPost])

    const handleChange = (e, type) => {
        let exactId = e.map(selectedValue => selectedValue.id)
        if(type === 'co_executor'){
            setTaskParametersPost({...taskParametersPost, co_executor: exactId}) 
        }
        if(type === 'viewers'){
            setTaskParametersPost({...taskParametersPost, viewers: exactId}) 
        }

    }

    const additionalparticipants = () =>{
        if(participantsBool)
        {
            setTaskParametersPost({...taskParametersPost, co_executor: null, viewers: null})
        }
        setParticipantsBool(!participantsBool)
    } 

    const handleSave = () => {
        setTask()
    }

    const handlePut = () => {
        putTask()
    }

    return (
        <>
        <div className='d-flex flex-column flex-md-row card card-md-stretch' >
            <div className='flex-lg-row-fluid p-5' >

                <span>Название задачи</span>
                <input className="form-control" onChange={e=> setTaskParametersPost({...taskParametersPost, title: e.target.value})} value={taskParametersPost.title && taskParametersPost.title}/>
 
                <div className="mt-5">
                    <span>Родительская задача</span>
                    <TaskParentInput 
                        options={taskParametersValues.parent_tasks && taskParametersValues.parent_tasks} 
                        onChange={e=> setTaskParametersPost({...taskParametersPost, parent: e.target.value})}
                        value={taskParametersPost.parent && taskParametersPost.parent.id}
                    />
                </div>
                <div className="mt-5">
                    <span>Подробное описание</span>
                    <MyCKEditor onChange={contentValue => setTaskParametersPost({...taskParametersPost, description: contentValue})} value={taskParametersPost.description}/>
                </div>
            </div>
            <div className='ps-5' >
                <div className='flex-column flex-lg-row-auto w-100 w-xl-300px pt-5'>
                    <div className='mb-10 me-5'>
                        <span>Приоритет</span>
                        <MySelectInput 
                            value={taskParametersPost.priority && taskParametersPost.priority.id} 
                            onChange={e => setTaskParametersPost({...taskParametersPost, priority: e})} 
                            defaultValue='' 
                            options={taskParametersValues && taskParametersValues.priority}
                        />

                        <div className="mt-10 row">
                            <div className="col-xl-6">
                                <span>Дата начача</span>
                                <input 
                                    type="date" 
                                    className="form-control"
                                    value={taskParametersPost.bdate && taskParametersPost.bdate} 
                                    onChange={e => setTaskParametersPost({...taskParametersPost, bdate: e.target.value})} 
                                />
                            </div>
                            <div className="col-xl-6">
                                <span>Дата завершения</span>
                                <input 
                                    type="date" 
                                    className="form-control"
                                    value={taskParametersPost.edate && taskParametersPost.edate} 
                                    onChange={e => setTaskParametersPost({...taskParametersPost, edate: e.target.value})} 
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <span>Исполнитель</span>
                            <MySelectUserInput
                                value={taskParametersPost.executor && taskParametersPost.executor.id} 
                                onChange={e => setTaskParametersPost({...taskParametersPost, executor: e})} 
                                options={taskParametersValues.participants && taskParametersValues.participants.participants}
                            />
                        </div>
                        <div className="mt-10">
                            <span onClick={()=>additionalparticipants()} className='text-primary text-hover-underline fw-bolder cursor-pointer'>Добавить соучастников</span>
                        </div>
                        <Collapse in={participantsBool}>
                            <div>
                                <div className="mt-5">
                                    <span>Соисполнители</span>
                                    <Multiselect
                                        options={taskParametersValues.participants && taskParametersValues.participants.participants.map(person => ({ id: person.id, label: `${person.first_name} ${person.last_name}`}))}
                                        displayValue="label"
                                        placeholder="Выберите соисполнителя"
                                        onSelect={e => {handleChange(e, 'co_executor')}}
                                        onRemove={e => {handleChange(e, 'co_executor')}}
                                        selectedValues={coExecutors && coExecutors.map(person => ({ id: person.id, label: `${person.first_name} ${person.last_name}`}))}
                                    />
                                </div>

                                <div className="mt-10">
                                    <span>Наблюдатели</span>
                                    <Multiselect
                                        options={taskParametersValues.participants && taskParametersValues.participants.participants.map(person => ({ id: person.id, label: `${person.first_name} ${person.last_name}`}))}
                                        displayValue="label"
                                        placeholder="Выберите наблюдателей"
                                        onRemove={e => {handleChange(e, 'viewers')}}
                                        onSelect={e => {handleChange(e, 'viewers')}}
                                        selectedValues={viewers && viewers.map(person => ({ id: person.id, label: `${person.first_name} ${person.last_name}`}))}
                                    />
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-5 pt-0">
            <button className="btn btn-sm btn-secondary me-2" onClick={props.handleClose}>Отмена</button>
            {props.type==='edit' 
            ? <button className="btn btn-sm btn-primary" onClick={handlePut}>Сохранить</button> 
            : <button className="btn btn-sm btn-primary" onClick={handleSave}>Добавить</button> 
            }
            
        </div>   
        </>
    )
}
