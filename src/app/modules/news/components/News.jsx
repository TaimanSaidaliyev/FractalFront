import { Route, Routes } from 'react-router-dom'
import NewsPage from '../NewsPage'
import NewAddSimple from './NewAddSimple'
import NewLogin from './NewLogin'
import { NewsList } from './NewsList'
import NewTest from './NewTest'
import NewView from './NewView'


export default function News() {

    return (
        <div>
            <Routes>
                <Route>
                    <Route index element={<NewsPage />}/>
                    <Route path="add" element={<NewAddSimple type='add'/>}/>
                    <Route path="view/:id" element={<NewView/>}/>
                    <Route path="edit/:id" element={<NewAddSimple type={'edit'}/>}/>
                    <Route path="view/all" element={<NewsList type={'all'} />}/>
                    <Route path="category/:id/" element={<NewsList type={'category'}/>}/>
                    <Route path="login" element={<NewLogin/>}/>
                    <Route path="photo" element={<NewTest/>}/>
                </Route>
            </Routes>
        </div>
    )
}
