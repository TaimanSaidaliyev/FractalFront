import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const KnowlegeBase = ({start}) => {
    const parameters = useParams()
    const [favorite, setFavorite] = useState({react: false, redux: false, javascript: false})

    return (
        <div className='p-5'>
        <Tab.Container id="left-tabs-example" defaultActiveKey={start ? '0' : parameters.id}>
            <Row>
                <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                    <input className='form-control mb-4 me-2' placeholder='Поиск...'/>
                    <Nav.Item>
                        <Nav.Link eventKey="0" className='cursor-pointer'>Главная страница</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1" className='cursor-pointer'>React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" className='cursor-pointer ms-5'>Что такое UseEffect()</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" className='cursor-pointer ms-5'>Классы в React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4" className='cursor-pointer ms-5'>Def функции в React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="5" className='cursor-pointer'>Python</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="6" className='cursor-pointer ms-5'>О CreateStore</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="7" className='cursor-pointer ms-5'>Функция Dispatch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="8" className='cursor-pointer ms-5'>Как вызвать Параметр?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="9" className='cursor-pointer'>Redux</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="10" className='cursor-pointer ms-5'>Framework Django</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="11" className='cursor-pointer ms-5'>ORM операции</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="12" className='cursor-pointer ms-10'>Оператор Objects.get()</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="14" className='cursor-pointer ms-5'>Мастабирование данных</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="13" className='cursor-pointer'>Javascript</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="0">
                            <div className='text-center'>
                                <p className='h1'>База знаний</p>
                            </div>
                            <div className='text-start'>
                                <div className='d-flex justify-content-start w-100 mt-5 mb-10'>
                                    <div className='d-flex w-800px'>
                                        <div className='d-flex mt-3 me-4 fs-4 text-primary fw-bolder'>
                                            <i class="bi bi-search me-3 mt-1 fs-4"></i>
                                            Поиск
                                        </div>
                                        <input className='form-control' placeholder='Введите '/>
                                    </div>
                                </div>
                                <p>База знаний — это онлайн-библиотека для самообслуживания, в которой хранится информация о продукте, услуге, отделе или теме.</p>
                                <br/>
                                <p>Данные могут поступать в базу знаний откуда угодно. Обычно базу знаний пополняют и расширяют авторы, хорошо разбирающиеся в конкретных областях. Содержимое может варьироваться от входящих и исходящих документов отдела кадров или юридического отдела до объяснения работы продукта. База знаний может содержать ответы на часто задаваемые вопросы, справочники, руководства по устранению неисправностей, перечни процедур и другую информацию, необходимую команде.</p>
                                <br/>
                                <p>Многие базы знаний строятся на основе искусственного интеллекта, который может взаимодействовать с пользователем и реагировать на его запросы. Другие базы знаний являются просто упорядоченными справочниками. Существуют также машиночитаемые базы знаний, содержимое которых предназначено для считывания системой. Решения основываются на так называемом автоматизированном дедуктивном выводе. Когда пользователь вводит запрос, программное обеспечение помогает конкретизировать решение.</p>
                                

                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="1">
                            <div className='mb-5'>
                                <span className="h1">
                                    Что такое React?
                                    <button className='ms-3 btn btn-sm btn-primary' onClick={()=>(setFavorite({...favorite, react: true}))}>
                                        В изучение
                                    </button>
                                </span>
                            </div>
                            <span>
                                <p> <b><a href="https://ru.reactjs.org/">React</a> — это JavaScript-библиотека для создания пользовательских интерфейсов. </b>Обратите внимание, что это именно библиотека, а не фреймворк. React часто называют фреймворком, но&nbsp;это ошибка. Во-первых, его использование ни к чему вас не обязывает, не формирует «фрейм» проекта. Во-вторых, React выполняет единственную задачу: показывает на странице компонент интерфейса, синхронизируя его с данными приложения, и только этой библиотеки в общем случае недостаточно для того, чтобы полностью реализовать проект. </p>

                                <p> Вскоре после появления React и подобные ему решения (Vue.js, Svelte) практически захватили мир фронтенда: потому что они помогают решать&nbsp;проблемы, основываясь на идее&nbsp;декларативного программирования, а не на императивном&nbsp;подходе. </p>

                                <p> — <b>Декларативный подход</b> состоит в описании конечного результата (что мы хотим получить). </p>

                                <p> — При <b>императивном подходе</b>&nbsp;описываются&nbsp;конкретные&nbsp;шаги&nbsp;для достижения конечного результата (как мы хотим что-то получить). </p>

                                <p> Оказалось, что декларативный подход отлично подходит для создания интерфейсов, и он прижился в сообществе. Этот подход работает не только в вебе: сравнительно недавно компания Apple представила фреймворк <a href="https://developer.apple.com/xcode/swiftui/">SwiftUI</a>, основанный на тех же принципах. </p>
                            </span>
                        </Tab.Pane>
                        <Tab.Pane eventKey="9">
                            <div className='mb-5'>
                                <span className="h1">
                                    Redux и с чем его едят? 
                                    <button className='ms-3 btn btn-sm btn-primary' onClick={()=>(setFavorite({...favorite, redux: true}))}>
                                        В изучение
                                    </button>
                                </span>
                                
                            </div>
                            <p>Redux — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении (ML). Разработчики используют Python, потому что он эффективен, прост в изучении и работает на разных платформах. Программы на языке Python можно скачать бесплатно, они совместимы со всеми типами систем и повышают скорость разработки.</p>
                            <p>
                                <br/>
                                <b>В чем заключаются преимущества языка Python?</b>
                                
                                <br/>
                                <br/>
                                Язык Python имеет следующие преимущества:
                                <br/>
                                <ul>
                                    <li> Разработчики могут легко читать и понимать программы на Python, поскольку язык имеет базовый синтаксис, похожий на синтаксис английского. </li>
                                    <li>Python помогает разработчикам быть более продуктивными, поскольку они могут писать программы на Python, используя меньше строк кода, чем в других языках.</li>
                                    <li>Python имеет большую стандартную библиотеку, содержащую многократно используемые коды практически для любой задачи. В результате разработчикам не требуется писать код с нуля.</li>
                                    <li>Разработчики могут легко сочетать Python с другими популярными языками программирования: Java, C и C++.</li>
                                    <li>Активное сообщество Python состоит из миллионов поддерживающих разработчиков со всего мира. При возникновении проблем сообщество поможет в их решении.</li>
                                    <li>Кроме того, в Интернете доступно множество полезных ресурсов для изучения Python. Например, вы можете легко найти видеоролики, учебные пособия, документацию и руководства для разработчиков.</li>
                                    <li>Python можно переносить на различные операционные системы: Windows, macOS, Linux и Unix.</li>
                                </ul>
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="13">
                            <div className='mb-5'>
                                <span className="h1">
                                    JavaScript и с чем его едят? 
                                    <button className='ms-3 btn btn-sm btn-primary' onClick={()=>(setFavorite({...favorite, javascript: true}))}>
                                        В изучение
                                    </button>
                                </span>
                                
                            </div>
                            <p>JavaScript — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении (ML). Разработчики используют Python, потому что он эффективен, прост в изучении и работает на разных платформах. Программы на языке Python можно скачать бесплатно, они совместимы со всеми типами систем и повышают скорость разработки.</p>
                            <p>
                                <br/>
                                <b>В чем заключаются преимущества языка JavaScript?</b>
                                
                                <br/>
                                <br/>
                                Язык JavaScript имеет следующие преимущества:
                                <br/>
                                <ul>
                                    <li> Разработчики могут легко читать и понимать программы на Python, поскольку язык имеет базовый синтаксис, похожий на синтаксис английского. </li>
                                    <li>Python помогает разработчикам быть более продуктивными, поскольку они могут писать программы на Python, используя меньше строк кода, чем в других языках.</li>
                                    <li>Python имеет большую стандартную библиотеку, содержащую многократно используемые коды практически для любой задачи. В результате разработчикам не требуется писать код с нуля.</li>
                                    <li>Разработчики могут легко сочетать Python с другими популярными языками программирования: Java, C и C++.</li>
                                    <li>Активное сообщество Python состоит из миллионов поддерживающих разработчиков со всего мира. При возникновении проблем сообщество поможет в их решении.</li>
                                    <li>Кроме того, в Интернете доступно множество полезных ресурсов для изучения Python. Например, вы можете легко найти видеоролики, учебные пособия, документацию и руководства для разработчиков.</li>
                                    <li>Python можно переносить на различные операционные системы: Windows, macOS, Linux и Unix.</li>
                                </ul>
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
                <Col sm={2}>
                    <div className='text-start border p-4'>
                        <b className='h4 mb-2'>Навыки для изучения</b>
                            {favorite.react && 
                                <div className='mb-2 mt-2'>
                                    <span className='fs-5 text-primary'>- React</span>
                                </div>
                            }
                            {favorite.redux && 
                                <div className='mb-2'>
                                    <span className='fs-5 text-primary'>- Redux</span>
                                </div>
                            }
                            {favorite.javascript && 
                                <div className='mb-2'>
                                    <span className='fs-5 text-primary'>- Javascript</span>
                                </div>    
                            }
                            <div className='text-center'>
                                <a href='/pm/knowlegebase/testing' target='blank'>
                                    <button className='btn btn-sm btn-primary text-center'>
                                        Начать тестирование
                                    </button>
                                </a>
                            </div>
                    </div>
                </Col>
            </Row>
        </Tab.Container>
        </div>

    )
}
