import { useEffect, useState } from "react"
import { SkillTestPage } from "./SkillWarningPage"
import { useFetching } from '../../../../hooks/useFetching'
import ProjectManagementService from '../../../../API/ProjectManagentService'

export const SkillWelcomePage = () => {
    const [startTest, setStartTest] = useState(false)
    const [position, setPosition] = useState()

    const [getAccessStatus, isGetAccessStatusLoading, getAccessStatusError] = useFetching(async () => {
        const response = await ProjectManagementService.getQuestions()
        setPosition(response.data.project_position.title)
    })

    useEffect(()=>{
        getAccessStatus()
    }, [])
    return (
        <div className='text-center p-10'>
            {
                !startTest
                ? 
                <>
                    В проекте "Корпоративный портал" вам назначили должность 
                    <p className='text-primary fs-4 fw-bolder'>{position}</p>
                    <img src={'/media/undefined/skill_human.png'} style={{width: '200px'}}/>
                    <p className='mb-3'>Для работы в данном проекте вам необходимо пройти тест на <br/>
                    знание навыков в соответствии с должностной инструкцией</p>
                    <button className='btn btn-primary' onClick={()=> {setStartTest(1)}}>Начать тестирование</button>
                </>
                : <SkillTestPage/>
            }
            
        </div>
    )
}
