import { useEffect, useState } from 'react';
import ProjectManagementService from '../../../../API/ProjectManagentService';
import { useFetching } from '../../../../hooks/useFetching';
import { TaskListTablByIdRow } from './components/TaskListTableByIdRow';
import { ParticipantsBubbleList } from './components/ParticipantsBubbleList';
import { FilterDropdown } from './components/FilterDropdown';
import { LoadingIndicator } from '../../../../components/UI/LoadingIndicator';
import _ from 'lodash'
import { TaskAddButton } from './components/TaskAddButton';
import { SkillWelcomePage } from '../skills/SkillWelcomePage';


export const TaskHierarchyList = () => {
    const [taskList, setTaskList] = useState([]);
    const [projectParticipant, setProjectParticipant] = useState([])
    const [accessStatus, setAccessStatus] = useState({})

    const [getTasks, isTasksLoading, TasksError] = useFetching(async () => {
        const response = await ProjectManagementService.getTasksByProject(1)
        setTaskList(response.data.task_list)
    })
  
    const [getProjectInformation, isGetProjectInformationLoading, getProjectInformationError] = useFetching(async () => {
        const response = await ProjectManagementService.getProjectInformationById(1)
        setProjectParticipant(_.unionBy(response.data.participants, response.data.moderators, response.data.managers, 'id'))
    })

    const [getAccessStatus, isGetAccessStatusLoading, getAccessStatusError] = useFetching(async () => {
        const response = await ProjectManagementService.getAccessSkillStatus()
        setAccessStatus(response.data)
    })

    useEffect(()=>{
        getTasks()
        getProjectInformation()
    },[])

    useEffect(()=>{
        getAccessStatus()
    },[])

    let tasks = taskList.map(function(task){
        return (
            <TaskListTablByIdRow item={task} children={task.children} key={task.id}/>
        )
    })

    return (
        <div>
            <div>
                <div className="card">
                    {accessStatus && accessStatus.is_access ? isTasksLoading 
                    ?<LoadingIndicator/>
                    :
                    <>
                    
                    <div className='card-header border-0 pt-5 pe-20'>
                        <h3 className='card-title align-items-start flex-column'>
                            <span className='card-label fw-bolder fs-3 mb-1'>Список задач</span>
                            <span className='text-muted mt-1 fw-bold fs-7'>Всего задач: {taskList.length}</span>
                        </h3>
                        <div className='d-flex'>
                            <ParticipantsBubbleList users={projectParticipant}/>
                            <div className='mt-3 ms-4 me-0'>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-color-primary btn-active-light'
                                    data-kt-menu-trigger='click'
                                    data-kt-menu-placement='bottom-end'
                                    data-kt-menu-flip='top-end'
                                >
                                <span className='text-dark fw-bolder'>
                                    <i className="bi bi-funnel-fill text-info"></i>
                                    Фильтр
                                </span>
                                </button>
                                <FilterDropdown />
                            </div>
                            <div className='mt-3 me-4'>
                                <button
                                    type='button'
                                    className='btn btn-sm btn-color-success btn-active-light'
                                >
                                    <span className='text-dark fw-bolder'>
                                        <i className="bi bi-person-check-fill me-1"></i>
                                        Мои задачи
                                    </span>
                                </button>
                            </div>
                            <div>
                                <div className="input-group border border-success rounded mt-3">
                                    <span className="input-group-text bg-white border-0 text-primary" >
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <input type="text" className="form-control form-control-sm border-0" aria-label="Username" aria-describedby="basic-addon1" placeholder='Поиск по проекту'/>
                                </div>
                            </div>
                            
                            <div>
                                <TaskAddButton getTasks={getTasks}/>
                            </div>
                        </div>
                    </div>
                    <div className='card-body py-3 pe-20'>
                        <div className='table-responsive'>
                            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 w-100 border-bottom-2'>
                                <thead>
                                <tr className='fw-bolder text-muted'>
                                    <th>#</th>
                                    <th className='min-w-120px border-start'>
                                        <i className="bi bi-list-task h3 text-muted"></i> 
                                        <span className='ms-3 h4 text-muted'>Задача</span>
                                    </th>
                                    <th className='min-w-150px text-center border-start'>
                                        <i className="bi bi-activity h3 text-muted"></i>
                                        <span className='ms-3 h4 text-muted'>Статус</span>
                                    </th>
                                    <th className='min-w-120px text-center border-start'>
                                        <i className="bi bi-people h3 text-muted"></i>
                                        <span className='ms-3 h4 text-muted'>Исполнитель</span>
                                    </th>
                                    <th className='min-w-120px text-center border-start'>
                                        <i className="bi bi-calendar-week h3 text-muted"></i>
                                        <span className='ms-3 h4 text-muted'>Срок</span>
                                    </th>
                                    <th className='min-w-150px text-center border-start'>
                                        <i className="bi bi-chevron-double-up h3 text-muted"></i>
                                        <span className='ms-3 h4 text-muted'>Приоритет</span>
                                    </th>
                                    <th className='min-w-100px text-center border-start'>
                                        <i className="bi bi-check2-circle h3 text-muted"></i>
                                        <span className='ms-3 h4 text-muted'>Прогресс</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    {tasks}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
                    : 
                    <SkillWelcomePage/>
                    }
                </div>
            </div>
        </div>
    )
}
