import { useState } from "react"
import { SkillTestPage } from "./SkillWarningPage"

export const SkillWelcomePage = () => {
    const [startTest, setStartTest] = useState(false)
    return (
        <div className='text-center p-10'>
            {
                !startTest
                ? 
                <>
                    В проекте "Корпоративный портал" вам назначили должность 
                    <p className='text-primary fs-4 fw-bolder'>Младший Front-end разработчик</p>
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
