import { useFetching } from '../../../../hooks/useFetching'
import ProjectManagementService from '../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react'
import { LoadingIndicator } from '../../../../components/UI/LoadingIndicator'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


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
            {/* {questions && questions.map((item, index)=>
                <>
                    <div className={index === 0 ? '' : 'mt-10'}>
                        <span className={index === 1 ? 'text-primary fs-3' : 'text-primary fs-3 mt-10'} key={item.id}>{item.title}</span>
                    </div>
                    
                    <div>
                        {item && item.questions.map((item_sub_1)=>
                            <div className='mt-5'>
                                <span className='fw-bolder h4'>{item_sub_1.title}</span>
                                {item_sub_1 && item_sub_1.answers.map((item_sub_2)=>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name={item_sub_1.id} id={item_sub_2.id}/>
                                        <label class="form-check-label" for={item_sub_2.id}>
                                            {item_sub_2.title}
                                        </label>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </>
            )} */}
            <div className='mb-5'>
                <p className='fw-bolder fs-4'>Тестирование на должность <span className='text-primary'>{position}</span></p>
            </div>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            {questions && questions.map((item, index)=>
                                <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                            )}
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            {questions && questions.map((item, index)=>
                                <Tab.Pane eventKey={item.id}>
                                    {item && item.questions.map((item_sub_1)=>
                                        <div className='mb-5'>
                                            <span className='fw-bolder h4'>{item_sub_1.title}</span>
                                            {item_sub_1 && item_sub_1.answers.map((item_sub_2)=>
                                                <div class="form-check mt-2">
                                                    <input class="form-check-input" type="radio" name={item_sub_1.id} id={item_sub_2.id}/>
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
                    </Col>
                </Row>
                </Tab.Container>
        </div>
    )
}