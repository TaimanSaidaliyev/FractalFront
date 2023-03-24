import React, { useState, useEffect } from 'react'
import { useFetching } from '../../../hooks/useFetching'
import TimeTrackingService from '../../../API/TimeTrackingService'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { undefinedAvatar } from '../../../utils/Undefined'
import { getConvertedMinutes } from '../../../utils/TimeOperations'
import { Link } from 'react-router-dom'


export const TimeTrackingList = () => {
    const [timeTrackingList, setTimeTrackingList] = useState([])

    const [timeTrackingProperty, setTimeTrackingProperty] = useState({})

    const [getProperties, isPropertiesLoading, isPropertiesErrors] = useFetching( async ()=>{
        const response = await (TimeTrackingService.getTimeTrackingProperties())
        setTimeTrackingProperty(response.data)
    })

    const [getTimeTrackingList, isGetTimeTrackingList, isGetTimeTrackingListError] =  useFetching(async ()=> {
        const response = await (TimeTrackingService.getTimeTrackingList())
        setTimeTrackingList(response.data.time_tracking_list)
        console.log(response.data.time_tracking_list)
    })

    const [setDescription, isSetDescriptionLoading, isSetDesciptionError] = useFetching( async (record_id, description)=>{
        await (TimeTrackingService.setTimeTrackingDescription(record_id, description))
    })

    const [descriptionField, setDescriptionField] = useState({})

    const addDescription = (id, description) =>{
        setDescription(id, description)
    }

    useEffect(()=>{
        getTimeTrackingList()
        getProperties()
    }, [])

    return (
        <div>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Учет времени</span>
                    <span className='text-muted mt-1 fw-bold fs-7'>Таблица посещаемости сотрудников компании</span>
                </h3>
                <div className='card-toolbar' data-bs-toggle='tooltip' data-bs-placement='top' data-bs-trigger='hover' title='Click to add a user'>
                    <Link to={'/timetracking/properties/'} className='btn btn-sm btn-light-success'>
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' /> Настройки
                    </Link>
                </div>
            </div>
            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                        <thead>
                            <tr className='fw-bolder text-muted'>
                                <th className='min-w-150px'>Сотрудник</th>
                                <th className='min-w-140px text-center'>Начало дня</th>
                                <th className='min-w-120px text-center'>Завершение дня</th>
                                <th className='min-w-120px text-center'>Причина</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeTrackingList && timeTrackingList.map((item)=>
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='symbol symbol-45px me-5'>
                                            <img src={`${undefinedAvatar(item.userPhoto && item.userPhoto)}`} alt='' />
                                        </div>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'> {item.user.first_name} {item.user.last_name} </a>
                                            <span className='text-muted fw-bold text-muted d-block fs-7'> {item.jobTitle} </span>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    <span className='fw-bold d-block fs-7'> 
                                        {
                                            item.start_time !== null ?
                                            getConvertedMinutes('01/01/2000 ' + timeTrackingProperty.start_day_time) < getConvertedMinutes('01/01/2000 ' + item.start_time)
                                            ? <span className='badge badge-danger'>{item.start_time}</span> 
                                            : <span className='badge badge-success'>{item.start_time}</span>
                                            : <span className='badge badge-light'>Не приступил к работе</span> 
                                        } 
                                    </span>
                                </td>
                                <td className='text-center'>
                                    <span className='fw-bold d-block fs-7'> 
                                        {   
                                            item.end_time !== null ?
                                            getConvertedMinutes('01/01/2000 ' + timeTrackingProperty.end_day_time) > getConvertedMinutes('01/01/2000 ' + item.end_time)
                                            ? <span className='badge badge-danger'>{item.end_time}</span> 
                                            : <span className='badge badge-success'>{item.end_time}</span>
                                            : <span className='badge badge-light'>Еще не завершил</span>
                                        }
                                    </span>
                                </td>
                                <td className='text-center'>
                                    <span className='fw-bold d-block fs-7'> В связи с утренними пробками пришлось опоздать 
                                        <i className="bi bi-pencil cursor-pointer ms-1" 
                                            onClick={(e)=>{setDescriptionField({descriptionField, [item.id]: !descriptionField[item.id]})}}>
                                        </i>
                                    </span>
                                    {
                                        descriptionField[item.id] && 
                                        <textarea value={item.description} onChange={(e)=>setTimeTrackingList([...timeTrackingList, {}])}/>
                                    }
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
