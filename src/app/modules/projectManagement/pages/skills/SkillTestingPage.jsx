import { useFetching } from '../../../../hooks/useFetching'
import ProjectManagementService from '../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TimerWidget from '../../../../components/common/TimerWidget';


export const SkillTestingPage = () => {
    const [questions, setQuestions] = useState([])
    const [position, setPosition] = useState('')
    const [accessLvl, setAccessLvl] = useState(0)

    const [getQuestions, isGetQuestionsLoading, getQuestionsError] = useFetching(async () => {
        const response = await ProjectManagementService.getQuestions()
        setQuestions(response.data.project_position.skills)
        setPosition(response.data.project_position.title)
        setAccessLvl(response.data.project_position.access_lvl)
    })

    useEffect(()=>{
        getQuestions()
    },[])

    return (
        <div className='text-start'>
            <div className='mb-5'>
                <p className='fw-bolder fs-4'>Тестирование на должность <span className='text-primary'>{position}</span></p>
            </div>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column cursor-pointer">
                            {questions && questions.map((item, index)=>
                                <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {questions && questions.map((item, index)=>
                                <Tab.Pane eventKey={item.id}>
                                    {item && item.questions.map((item_sub_1)=>
                                        <div className='mb-5'>
                                            <span className='fw-bolder h4'>{item_sub_1.title}</span>
                                            {item_sub_1 && item_sub_1.answers.map((item_sub_2)=>
                                                <div class="form-check mt-2">
                                                    <input class="form-check-input" type="radio" name={item_sub_1.id} id={item_sub_2.id} defaultChecked={item_sub_1.right_answer.id === item_sub_2.id ? true : false}/>
                                                    <label class="form-check-label" for={item_sub_2.id}>
                                                        {item_sub_2.title}
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                        <a href='/pm/result/'>
                            <button className='btn btn-sm btn-primary'>Отправить</button>
                        </a>
                        <button className='btn btn-sm btn-light ms-2'>Отменить</button>
                    </Col>
                    <Col sm={1}>
                        <TimerWidget time={45}/>
                    </Col>
                </Row>
                </Tab.Container>
                
        </div>
    )
}