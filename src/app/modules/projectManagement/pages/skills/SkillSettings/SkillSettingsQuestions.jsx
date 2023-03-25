import { Table } from 'react-bootstrap';
import ProjectManagementService from '../../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SkillSettingsQuestionEdit } from './SkillSettingsQuestionEdit';
import { useFetching } from '../../../../../hooks/useFetching'

export const SkillSettingsQuestions = ({skill}) => {

    const [show, setShow] = useState(false);
    const [showEdit, setEditShow] = useState(false)
    const [questionId, setQuestionId] = useState()

    const [questionTitle, setQuestionTitle] = useState()
    const [questionRecommendation, setQuestionRecommendation] = useState()

    const [questions, setQuestions] = useState([])

    const handleClose = () => {setShow(false);};
    const handleShow = () => {setShow(true);}

    const handleEditClose = () => {setEditShow(false);};    

    const [getQuestions, isGetQuestionsLoading, getQuestionsError] = useFetching(async () => {
        const response = await ProjectManagementService.getAllQuestions(skill)
        setQuestions(response.data)
    })

    const deleteQuestion = (id) => {
        ProjectManagementService.deleteQuestion(id).then(()=>{
            getQuestions()
        })
    }

    const setQuestion = () => {
        ProjectManagementService.postQuestion(skill, questionTitle, questionRecommendation).then(()=>{
            getQuestions()
        })
    }

    useEffect(()=>{
        getQuestions()
    },[skill])
    
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div className='h3 mt-3'>
                    Вопросы
                </div>
                <div className='text-end'>
                    <Button variant="success" size={'sm'} onClick={handleShow}>
                        + Добавить
                    </Button>
                </div>
            </div>

            <Table hover className='mt-5'>
                <tbody>
                    {questions.map((item)=>
                    <tr className='border-bottom' key={item.id}>
                        <td className='w-25px'>
                            {item.id}
                        </td>
                        <td className='text-start text-hover-primary cursor-pointer'>
                            <span onClick={()=>{setEditShow(true); setQuestionId(item.id)}}>{item.title}</span>
                        </td>
                        <td className='text-center'>
                            <i className="bi bi-trash2-fill text-danger cursor-pointer" onClick={()=>{deleteQuestion(item.id)}}></i>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить вопрос</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className='fw-bolder'>Вопрос</span>
                    <input className='form-control' onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
                    <div className='mt-3'>
                        <span className='fw-bolder'>Рекомендация к изучению вопроса</span>
                        <textarea rows={5} className='form-control' value={questionRecommendation} onChange={(e)=>setQuestionRecommendation(e.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button size={'sm'} variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button size={'sm'} variant="primary" onClick={()=>{setQuestion(); handleClose()}}>
                    Сохранить изменения
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEdit} onHide={handleEditClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Редатирование вопроса</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SkillSettingsQuestionEdit id={questionId}/>
                </Modal.Body>
                <Modal.Footer>
                <Button size={'sm'} variant="secondary" onClick={()=>handleEditClose()}>
                    Закрыть
                </Button>
                <Button size={'sm'} variant="primary" onClick={()=>{handleEditClose()}}>
                    Сохранить изменения
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}