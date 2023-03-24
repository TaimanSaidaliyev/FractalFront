import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export const SeachBlock = () => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const searchNewByValue = () => {
        navigate('/news/view/all/', {state: {searchValue: searchValue, type: 'search'}})
    }

    return (    
        <div className="mb-10">
            <div className="h4 text-black mb-7">Поиск</div>
            <div className='d-flex input-group-sm'>
                <input className='form-control me-1' placeholder='Поиск новости ...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <div className='float-end'>
                    <button className='btn btn-sm btn-light ms-5' onClick={(e)=> searchNewByValue(e)}>Поиск</button>
                </div>
            </div>
        </div>
    )
}
