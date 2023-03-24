import { Route, Routes } from 'react-router-dom'
import { TimeTrackingList } from './components/TimeTrackingList'
import { TimeTrackingOptions } from './components/TimeTrackingOptions'


export default function TimeTracking() {
    return (
        <div className='card mb-5 mb-xl-8'>
            <Routes>
                <Route>
                    <Route index element={<TimeTrackingList />}/>
                    <Route path='/properties/' element={<TimeTrackingOptions />}/>
                </Route>
            </Routes>
        </div>
    )
}
