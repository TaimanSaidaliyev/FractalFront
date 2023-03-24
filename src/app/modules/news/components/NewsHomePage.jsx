import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useFetching } from '../../../hooks/useFetching';
import NewsService from '../../../API/NewsService.js';
import { useIntl } from 'react-intl';
import { LastNew } from './widgets/LastNew';
import { NewListItemV1 } from './widgets/NewListItem/NewListItemV1';
import { NewListItemV2 } from './widgets/NewListItem/NewListItemV2';
import { LoadingIndicator } from '../../../components/UI/LoadingIndicator';


export default function NewsBlock() {
    const intl = useIntl()
    const [lastThreeNew, setLastThreeNew] = useState([])
    const [secondThreeNew, setLastSecondNew] = useState([])
    const [lastNew, setLastNew] = useState({})
    const [otherNews, setOtherNews] = useState([])

    const [getPosts, isLoading, apiError] = useFetching(async () => {
        const response = await NewsService.getNews3()
        setLastThreeNew(response.data.lastThreeNew)
        setLastSecondNew(response.data.secondThreeNew)
        setLastNew(response.data.lastNew)
        setOtherNews(response.data.news)
    })
    
    useEffect(() => {
        getPosts()
    }, []);

    const refresh_news = () => {
        getPosts()
    } 

    return (
        <div className="row container-fluid ps-0 pe-0 pt-10">
            <div className="card-header border-0">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">{intl.formatMessage({id: 'MENU.NEWS'})}</span>
                    <span className="text-muted mt-1 fw-bold fs-7">Всего новостей: {lastThreeNew.length}</span>
                </h3>
                <div className="card-toolbar">
                    <button size='sm' className='btn btn-bg-light btn-active-color-primary btn-sm' onClick={() => refresh_news()}>
                        <i className="bi bi-arrow-clockwise"></i> Обновить
                    </button>
                    <Link to={'/news/add/'}>
                        <Button size='sm' className='ms-1'>Добавить</Button>
                    </Link>
                </div>
            </div>
            {
                isLoading 
                ?
                <LoadingIndicator/> 
                : 
                <>
                <div className="row ms-2">
                    <div className="col-md-4">
                    {apiError ? apiError :
                        lastNew.length !== 0 
                        ?
                        <LastNew item={lastNew}/>
                        : <span>Новостей нет</span>
                    }
                    </div>   
                    <div className="col-md-4 justify-content-between d-flex flex-column">
                        {lastThreeNew.map((threeNew) =>
                            <NewListItemV1 item={threeNew} key={threeNew.id}/>
                        )}
                    </div>   
                    <div className="col-md-4 justify-content-between d-flex flex-column">
                        {secondThreeNew.map((threeNew) =>
                            <NewListItemV1 item={threeNew} key={threeNew.id}/>
                        )}
                    </div>   
                </div>
                <div className="row ms-2 mt-15"> 
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder text-dark">Остальные новости 
                            <Link to={'/news/view/all/'} className="text-primary h6 fw-normal ms-5">Все новости</Link>
                        </span>
                        <hr/>
                    </h3>
                    {otherNews.map((otherNew)=> 
                        <NewListItemV2 item={otherNew} key={otherNew.id}/>
                    )}
                </div>
                </>
            }
            
        </div>
    )
}
