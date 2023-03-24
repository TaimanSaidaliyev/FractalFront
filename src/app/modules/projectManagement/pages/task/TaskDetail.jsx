import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TaskSidebar } from './components/TaskSidebar'
import { TimeTracking, AttachedFiles, RelatedTasks, TaskHeader, TaskBody } from './widgets/TaskBodyWidgets'
import { useFetching } from '../../../../hooks/useFetching'
import ProjectManagementService from '../../../../API/ProjectManagentService'
import { LoadingIndicator } from '../../../../components/UI/LoadingIndicator'
import { Link } from 'react-router-dom'
import ToastJsx from '../../../../components/common/ToastJsx'


export const TaskDetail = () => {
    const navigate = useNavigate()
    const parameters = useParams()
    const [task, setTask] = useState()
    const [taskHierarchy, setTaskHierarchy] = useState([])
    const [timetracking, setTimeTracking] = useState()
    const [newTimeTrackingValue, setNewTimeTrackingValue] = useState({})
    const [timeTrackingCount, setTimeTrackingCount] = useState(0)
    const [timeTrackingId, setTimeTrackingId] = useState(null)
    const [taskParametersPost, setTaskParametersPost] = useState({})

    const [getTask, isTaskLoading] = useFetching(async () => {
        const response = await ProjectManagementService.getTaskById(parameters.project_id, parameters.task_id)
        setTask(response.data.task_detail)
        setTaskHierarchy(response.data.task_hierarchy)
    })

    const [deleteTask] = useFetching(async () => {
        await ProjectManagementService.deleteTaskById(parameters.project_id, parameters.task_id)
        .then(()=>{
            ToastJsx('Задача успешно удалена', 'success')
            navigate('/pm')
        })
        .catch((error)=>ToastJsx(error, 'error'))
    })

    const [getTimeTrackingList] = useFetching(async () => {
        const response = await ProjectManagementService.getTimeTrackingListById(parameters.project_id, parameters.task_id)
        setTimeTracking(response.data.time_tracking)
        setTimeTrackingCount(response.data.spent_time)
    })

    const [addTimeTracking] = useFetching(async () => {
        await ProjectManagementService.addTimeTracking(parameters.project_id, parameters.task_id, newTimeTrackingValue)
        .then(()=>{getTimeTrackingList(); ToastJsx('Время добавлено', 'success')})
        .catch((error)=>{ToastJsx(error.message, 'error')})
    })

    const [deleteTimeTracking] = useFetching (async () => {
        await ProjectManagementService.deleteTimeTracking(timeTrackingId)
        .then(()=>{getTimeTrackingList(); ToastJsx('Время успешно удалено', 'success')})
        .catch((error)=>{ToastJsx(error.message, 'error')})
    })

    const saveTimeTracking = () => {
        addTimeTracking()
        setNewTimeTrackingValue({})
    }

    const deleteTimeTrackingValue = (id) => {
        setTimeTrackingId(id)
    }

    const [putTask] = useFetching(async () => {
        await ProjectManagementService.setTaskPut(parameters.task_id, taskParametersPost)
        .then(()=>{
            getTask()
            ToastJsx('Прогресс успешно обновлен', 'success')
        })
    })

    useEffect(()=>{
        if(timeTrackingId) {
            deleteTimeTracking()
        }
    }, [timeTrackingId])

    useEffect(()=>{
        getTask()
        getTimeTrackingList()
    },[parameters])

    return (
        <div className='d-flex flex-column flex-md-row card card-md-stretch mb-5 mb-md-8' >
            {isTaskLoading 
            ? <LoadingIndicator/> 
            : 
            <>
                <div className='flex-lg-row-fluid me-xl-10 me-5 mb-10' >
                    <div className='ps-8 pt-8'>
                        <p className='text-primary'>
                            <Link to={'/pm'}>Перейти на главную страницу</Link>
                        </p>
                        <TaskHeader task={task} deleteTask={deleteTask}/>
                        <div className='mb-10'>
                            <TaskBody body={task ? task.description : ''}/>
                        </div>
                        <div>
                            {/* Загруженные файлы */}
                            <AttachedFiles record_id={parameters.task_id} module_id={3}/>
                            {/* Связанные задачи */}
                            <RelatedTasks related_tasks={task && task.related_tasks ? task.related_tasks : ''}/>
                            {/* Потрачено времени */}
                            <TimeTracking 
                                timetracking={timetracking} 
                                saveTimeTracking={saveTimeTracking} 
                                newTimeTrackingValue={newTimeTrackingValue} 
                                setNewTimeTrackingValue={setNewTimeTrackingValue} 
                                timeTrackingCount={timeTrackingCount}
                                deleteTimeTrackingValue={deleteTimeTrackingValue}
                            />
                        </div>
                    </div>
                </div>
                <div style={{borderLeft: '2px solid rgb(236, 236, 236)'}} className='ps-5' >
                    <div className='flex-column flex-lg-row-auto w-100 w-xl-400px ms-5 pt-8' >
                        <div className='mb-10'>
                            <TaskSidebar id={parameters.task_id} task={task} getTask={getTask} taskHierarchy={taskHierarchy} project_id={parameters.project_id}/>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
        
    )
}
