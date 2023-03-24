import { Route, Routes } from 'react-router-dom'
import { MyUserProfile } from './components/MyUserProfile'

export default function UserProfile() {
    return (
        <div className={`card card-xl-stretch mb-5 mb-xl-8`}>
            <div className="p-10">
                <Routes>
                    <Route>
                        <Route index element={<MyUserProfile />}/>
                        <Route path={'/:id'} element={<MyUserProfile />}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}
