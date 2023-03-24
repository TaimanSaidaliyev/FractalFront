import { DueTime, ExecutorBlock, CoExecutorBlock, TaskHierarchy, ViewersBlock, TaskProgress } from "../widgets/TaskSidebarWidgets"
import { TaskComments } from "../widgets/TaskBodyWidgets"


export const TaskSidebar = (props) => {
    return (
        <div className="me-10">
            <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#kt_tab_pane_1"
                    >
                        <i className="bi bi-question-circle"></i>
                        <span className="ms-1">Инфо</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#kt_tab_pane_2"
                    >
                        <i className="bi bi-chat-left-text"></i>
                        <span className="ms-2">Комментарии</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#kt_tab_pane_3"
                        >
                        <i className="bi bi-circle-fill"></i>
                        <span className="ms-2">Изменения</span>
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade active show"
                    id="kt_tab_pane_1"
                    role="tabpanel"
                >
                    <div>
                        <div className="mt-10">
                            <TaskProgress task={props.task} getTask={props.getTask}/>
                        </div>
                        <div className="mt-10">
                            <DueTime task={props.task}/>
                        </div>
                        <div className="mt-10">
                            {
                                props.taskHierarchy && props.taskHierarchy.length != 1
                                ? <TaskHierarchy taskHierarchy={props.taskHierarchy} project_id={props.project_id}/>
                                : ''
                            }
                            
                        </div>
                        <div className="mt-10">
                            {
                                <ExecutorBlock user={props.task && props.task.executor ? props.task.executor : ''}/>
                            }
                        </div>
                        <div className="mt-10">
                            {
                                props.task && props.task.co_executor.length
                                ? <CoExecutorBlock user={props.task && props.task.co_executor ? props.task.co_executor : ''}/>
                                : ''
                            }
                        </div>
                        <div className="mt-10">
                            {
                                props.task && props.task.viewers.length
                                ? <ViewersBlock user={props.task && props.task.viewers ? props.task.viewers : ''}/>
                                : ''
                            }
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                    <TaskComments id={props.task && props.task.id}/>
                </div>
                <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                    Sint sit mollit irure quis est nostrud cillum consequat Lorem
                    esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
                    Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
                    cupidatat. eserunt officia id Lorem nostrud aute id commodo elit
                    eiusmod enim irure amet eiusmod qui reprehenderit nostrud
                    tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
                    irure in labore cillum elit enim. Consequat aliquip incididunt
                    ipsum et minim laborum laborum laborum et cillum labore.
                    Deserunt adipisicing cillum id nulla minim nostrud labore
                    eiusmod et amet.
                </div>
            </div>
        </div>
    )
}
