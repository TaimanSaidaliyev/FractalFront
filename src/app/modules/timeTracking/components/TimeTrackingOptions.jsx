import { useEffect, useState } from 'react'
import { useFetching } from '../../../hooks/useFetching'
import TimeTrackingService from '../../../API/TimeTrackingService'
import ToastJsx from '../../../components/common/ToastJsx';
import { LoadingIndicator } from '../../../components/UI/LoadingIndicator';
import { Link } from 'react-router-dom';


export const TimeTrackingOptions = () => {
    const [properties, setProperties] = useState({})
    const [getProperties, isPropertiesLoading, isPropertiesErrors] = useFetching( async ()=>{
        const response = await (TimeTrackingService.getTimeTrackingProperties())
        setProperties(response.data)
    })

    const [postProperties, isPostPropertiesLoading, isPostPropertiesErrors] = useFetching( async ()=>{
        const response = await (TimeTrackingService.setTimeTrackingProperties(properties))
        .then((result)=>{ToastJsx('Параметры успешно сохранены', 'success')})
        .catch((error)=>{ToastJsx('Произошла ошибка, попробуйте по позже', 'error')})
    })

    useEffect(()=>{
        getProperties()
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault()
        postProperties()
    }

    return (
        <div className={`card card-xl-stretch p-10`}>
            {isPropertiesLoading 
            ? <LoadingIndicator/> 
            : <form onSubmit={handleSubmit}>
                <div className='row mb-6 w-500px'>
                    <h3 className='mb-10'>Настройки учета рабочего времени</h3>
                    <label className='col-lg-6 col-form-label fw-bold fs-6 mb-4'>
                        <span className='required'>Время начала дня</span>
                    </label>
                    <div className='col-lg-6 fv-row'>
                        <input type='time' className='form-control form-control-xs' value={properties.start_day_time && properties.start_day_time} onChange={e => setProperties({properties, start_day_time: e.target.value})} />
                    </div>
                    <label className='col-lg-6 col-form-label fw-bold fs-6 mb-4'>
                        <span className='required'>Время завершения дня</span>
                    </label>
                    <div className='col-lg-6 fv-row'>
                        <input type='time' className='form-control form-control-xs' value={properties.end_day_time && properties.end_day_time} onChange={e => setProperties({properties, end_day_time: e.target.value})} />
                    </div>

                    <label className='col-lg-6 col-form-label fw-bold fs-6 mb-4'>
                        <span className='required'>Начал обеденного перерыва</span>
                    </label>
                    <div className='col-lg-6 fv-row'>
                        <input type='time' className='form-control form-control-xs' value={properties.start_break_time && properties.start_break_time} onChange={e => setProperties({properties, start_break_time: e.target.value})} />
                    </div>
                    <label className='col-lg-6 col-form-label fw-bold fs-6 mb-4'>
                        <span className='required'>Окончание обеденного перерыва</span>
                    </label>
                    <div className='col-lg-6 fv-row'>
                        <input type='time' className='form-control form-control-xs' value={properties.end_break_time && properties.end_break_time} onChange={e => setProperties({properties, end_break_time: e.target.value})} />
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary btn-sm' type='submit'>Сохранить</button>
                    <Link to={'/timetracking/'} className='btn btn-light btn-sm ms-2'>Отменить</Link>
                </div>
            </form> 
            }           
        </div>
    )
}
