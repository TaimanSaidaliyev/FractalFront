import { useFetching } from "../../../../app/hooks/useFetching"
import TimeTrackingService from "../../../../app/API/TimeTrackingService"
import { useState, useEffect } from "react"


export const TimeTracking = () => {
    const [timeTrackingStatusValue, setTimeTrackingStatusValue] = useState(0)

    const [getTimeTrackingStatus, isLoading, apiError] = useFetching(async () => {
        const response = await TimeTrackingService.getTimeTrackingStatus()
        setTimeTrackingStatusValue(response.data.time_tracking_status)
    })

    const [setTimeTrackingStatus, isSetLoading, apiSetError] = useFetching(async () => {
        const response = await TimeTrackingService.setTimeTrackingStatus()
        .then(()=>{getTimeTrackingStatus()})
    })

    useEffect(()=>{
        getTimeTrackingStatus()
    },[])


    return (
        <>
            <button className='btn btn-outline-light'
                data-kt-menu-trigger='click'
                data-kt-menu-attach='parent'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='bottom'
                disabled={timeTrackingStatusValue == 3 && 'disabled'} onClick={()=>setTimeTrackingStatus()}
            >
            <i className="bi bi-play-circle-fill text-primary"></i>
                <span className='text-primary'>
                    {timeTrackingStatusValue && timeTrackingStatusValue == 1 && <>Начать день</>}
                    {timeTrackingStatusValue && timeTrackingStatusValue == 2 && <>Завершить день</>}
                    {timeTrackingStatusValue && timeTrackingStatusValue == 3 && <>День завершен</>}
                </span>
            </button>
            {/* <div className='menu menu-sub menu-sub-dropdown menu-column w-225px w-lg-225px p-7' data-kt-menu='true'>
                <div className="d-flex flex-stack flex-wrap">
                    <div className="d-flex align-items-center pe-2">
                        <div className="fs-5 fw-bolder">
                            <span className="text-gray-700 text-hover-primary">Cтатус</span>
                        </div>
                    </div>
                    {timeTrackingStatusValue && timeTrackingStatusValue == 1 && 
                        <span className="badge badge-success fw-bolder my-2">День не начат</span>
                    }
                    {timeTrackingStatusValue && timeTrackingStatusValue == 2 && 
                        <span className="badge badge-success fw-bolder my-2">В работе</span>
                    }
                    {timeTrackingStatusValue && timeTrackingStatusValue == 1 && 
                        <span className="badge badge-success fw-bolder my-2">В работе</span>
                    }
                    
                </div>

                <button className="btn btn-sm btn-outline-light mt-5" onClick={()=>setTimeTrackingStatus()}>
                    Начать день
                </button>

            </div> */}
        </>
    )
}
