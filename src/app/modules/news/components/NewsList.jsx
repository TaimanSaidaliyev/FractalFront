import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { useFetching } from '../../../hooks/useFetching';
import NewsService from '../../../API/NewsService.js';
import { NewListItemV3 } from './widgets/NewListItem/NewListItemV3';
import { NewSidebar } from './widgets/NewSidebar';
import { useParams } from 'react-router-dom';

export const NewsList = (props) => {
    const intl = useIntl()
    const parameters = useParams()
    const [news, setNews] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const searchParameters = useLocation().state
    const [getNews, isNewsLoading, apiNewsError] = useFetching(async () => {
        const response = await (props.type === 'all' 
        ? NewsService.getAllNews(searchParameters && {params: {searchValue: searchParameters.searchValue}}) 
        : NewsService.getNewByCategory(parameters.id))
        setNews(response.data.news)
    })

    const searchNewByValue = (e) => {
        e.preventDefault()
        getNews()
        console.log(searchValue)
    }
    
    useEffect(() => {
        getNews()
    }, [parameters, searchParameters])

    return (
        <div className="d-flex flex-column flex-xl-row card card-xl-stretch mb-5 mb-xl-8 p-10">
            <div className="flex-lg-row-fluid me-xl-15">
                <div className="card-header border-0 p-0">
                    <div className="row container-fluid ps-0 pe-0">
                        <div className="card-header border-0 p-5 pe-0 pt-3">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bolder text-dark">{intl.formatMessage({id: 'MENU.NEWS'})}</span>
                                <span className="text-muted mt-1 fw-bold fs-7">Всего новостей:</span>
                            </h3>
                            <div className="card-toolbar">
                                <button className='btn btn-bg-light btn-active-color-primary btn-sm'>
                                    <i className="bi bi-arrow-clockwise"></i> Обновить
                                </button>
                                <Link to={'/news/add/'}>
                                    <button className='btn btn-primary btn-sm ms-1'>Добавить</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {news && news.map((item) => 
                        <NewListItemV3 item={item} key={item.id}/>
                    )}
                </div>
            </div>
            <div className="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">
                <NewSidebar searchValue={searchValue} setSearchValue={setSearchValue} searchNewByValue={searchNewByValue}/>
            </div>
        </div>
    )
}
