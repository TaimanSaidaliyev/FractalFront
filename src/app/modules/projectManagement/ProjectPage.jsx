import { Route, Routes } from 'react-router-dom'
import { TaskHierarchyList } from './pages/project/TaskHierarchyList'
import { TaskDetail } from './pages/task/TaskDetail'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../store'
import { TaskkAddForm } from './pages/task/TaskkAddForm'
import { SkillSettings } from './pages/skills/SkillSettings/SkillSettings'
import { KnowlegeBase } from './pages/skills/KnowlegeBase/KnowlegeBase'
import { SkillResult } from './pages/skills/SkillResult'

const store = createStore(reducer)

export default function ProjectPage() {
    
    return (
        <div className='card mb-5 mb-xl-8'>
            <Provider store={store}>
                <Routes>
                    <Route index element={<TaskHierarchyList />}/>
                    <Route path='/task/:project_id/:task_id' element={<TaskDetail />}/>
                    <Route path='/result/' element={<SkillResult />}/>
                    <Route path='/task/:project_id/add_task' element={<TaskkAddForm />}/>
                    <Route path='/:project_id/skill/settings' element={<SkillSettings />}/>
                    <Route path='/knowlegebase/:id' element={<KnowlegeBase />}/>
                </Routes>
            </Provider>
        </div>
    )
}