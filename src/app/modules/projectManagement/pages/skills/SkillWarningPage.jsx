import { useFetching } from '../../../../hooks/useFetching'
import ProjectManagementService from '../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react'
import { LoadingIndicator } from '../../../../components/UI/LoadingIndicator'
import { SkillTestingPage } from './SkillTestingPage'

export const SkillTestPage = () => {
    const [questions, setQuestions] = useState([])
    const [accessLvl, setAccessLvl] = useState(0)
    const [startTest, setStartTest] = useState(false)

    const [getAccessStatus, isGetAccessStatusLoading, getAccessStatusError] = useFetching(async () => {
        const response = await ProjectManagementService.getQuestions()
        setQuestions(response.data.project_position.skills)
        setAccessLvl(response.data.project_position.access_lvl)
    })

    useEffect(()=>{
        getAccessStatus()
    }, [])

    return (
        <>
        {!startTest 
            ?
                !isGetAccessStatusLoading 
                    ?
                    <div className='fs-4'>
                        Вопросы будут на знанение следующих навыков:
                        {questions && questions.map((item)=>
                            <span className='text-primary fs-3' key={item.id}>{item.title}, </span>
                        )}<br/>
                        <img src={'/media/undefined/timer.png'} style={{width: '200px'}}/>
                        <br/>
                        У вас есть <span className='text-success fw-bolder'>45</span> минут чтобы ответить на все вопросы.
                        <br/>
                        Проходной балл тестирования: <span className='text-primary fw-bolder'>{accessLvl}%</span>
                        <br/>
                        <button className='btn btn-primary mt-3' onClick={()=>{setStartTest(true)}}>Приступить!</button>
                        
                    </div> 
                    : <LoadingIndicator/>
                
            :
            <>
                <SkillTestingPage/>
            </>
        }
        </>
    )
}
