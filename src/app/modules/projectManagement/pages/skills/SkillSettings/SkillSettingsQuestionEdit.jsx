import ProjectManagementService from '../../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react';
import { useFetching } from '../../../../../hooks/useFetching'

export const SkillSettingsQuestionEdit = ({id}) => {
    const [questionValue, setQuestionValue] = useState({})
    const [answers, setAnswers] = useState([])
    const [newAnswer, setNewAnswer] = useState('asdasdasd')
    const [toggle, setToggle] = useState(false)

    const [getQuestion] = useFetching(async () => {
        const response = await ProjectManagementService.getQuestion(id)
        setQuestionValue(response.data)
        setAnswers(response.data.answers)
    })

    const [setQuestionAnswer] = useFetching(async () => {
        const response = await ProjectManagementService.postAnswer(id, newAnswer)
        .then(()=>getQuestion())
    })
    
    const deleteQuestionAnswer = (id) => {
        ProjectManagementService.deleteAnswer(id)
        .then(()=>getQuestion())
    }

    useEffect(()=>{
        getQuestion()
    },[id])

    return (
        <>
            <span className='ms-1 fw-bolder'>Вопрос</span>
            <input value={questionValue.title} onChange={(e)=>setQuestionValue({questionValue, title: e.target.value})} className='form-control'/>

            <div className='mt-3'>
                <span className='ms-1 fw-bolder'>Варианты ответов</span>
                {answers && answers.map((item)=>
                    <div className='ms-1 mt-4 mb-4'>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="radio" name='answers' id={item.id}/>
                            <label class="form-check-label" for={item.id}>
                                {item.title}
                            </label>
                            <span className='text-danger float-end cursor-pointer' onClick={()=>{deleteQuestionAnswer(item.id)}}>Удалить</span>
                        </div>
                    </div>
                )}
                {toggle 
                ?   
                <>
                    <input className='form-control' placeholder='Введите ответ' onChange={(e)=>{setNewAnswer(e.target.value)}}/>
                    <button className='btn btn-primary btn-sm mt-3 me-2' onClick={()=>{setQuestionAnswer(); setToggle(!toggle)}} >+ Добавить</button>
                    <button className='btn btn-secondary btn-sm mt-3 me-2' onClick={()=>setToggle(!toggle)}>Отмена</button>
                </>
                :   <span className='text-success cursor-pointer' onClick={()=>{setToggle(!toggle)}}>+ добавить новый ответ</span>
                }
                <div className='mt-3'>
                    <span className='fw-bolder'>Рекомендация к изучению вопроса</span>
                    <textarea rows={5} className='form-control' value={questionValue.recommendation}/>
                </div>
                <div className='mt-3'>
                    <span className='fw-bolder'>Статья из базы знаний</span>
                    <select className='form-control' value={3}>
                        <option value={1}>Что такое React</option>
                        <option value={3}>Redux и с чем его едят</option>
                        <option>JavaScript и с чем его едят</option>
                        <option>Python имеет большую стандартную библиотеку</option>
                        <option>Windows, macOS</option>
                        <option>Декларативный подход</option>
                    </select>
                </div>
            </div>
        </>
    )
}
