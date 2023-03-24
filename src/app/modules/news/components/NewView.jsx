import { PageTitle } from '../../../../_metronic/layout/core'
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewsService from '../../../API/NewsService.js';
import { useFetching } from '../../../hooks/useFetching';
import {undefinedNewImage} from '../../../utils/Undefined';
import { readingTime } from '../../../utils/CommonUtils';
import { Link } from 'react-router-dom';
import { NewSidebar } from './widgets/NewSidebar';
import { undefinedAvatar } from '../../../utils/Undefined';
import Comments from '../../common/comments/Comments';
import { LikeItem } from '../../common/properties/Likes/LikeItem';
import { FavoriteItem } from '../../common/properties/Likes/FavoriteItem';
import { useNavigate } from 'react-router-dom';
import { LoadingIndicator } from '../../../components/UI/LoadingIndicator';
import ToastJsx from '../../../components/common/ToastJsx';
import '../../../components/UI/css/content-style.css'
import { BrowserRouter } from 'react-router-dom';


const NewView = () => {
    const parameters = useParams()
    const intl = useIntl()
    const navigate = useNavigate()
    const [post, setPost] = useState({}) 
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')
    const [authorProfile, setAuthorProfile] = useState('')
    const [viewDone, setViewDone] = useState(true)

    const [getPost, isLoading, apiError] = useFetching(async () => {
        const response = await NewsService.getNewById(parameters.id)
        setPost(response.data.new)
        setCategory(response.data.new.category)
        setAuthor(response.data.new.author)
        setAuthorProfile(response.data.author)
    })
    
    const setView = async () =>{
        setViewDone(true)
        await NewsService.setNewView(parameters.id)
        setViewDone(false)
    }

    const deletePostById = async (id) => {
        await NewsService.deleteNewById(id)
        .then(ToastJsx('Новость была удалена. Скоро вас перенаправит на главную страницу', 'error'))
        .then(setTimeout(() => {
            navigate(`/news/`)
        }, 3000))
    }

    useEffect(()=>{
        getPost()
        if(viewDone){
            setView()
        }
    }, [parameters])

    console.log("Routes:", JSON.stringify(BrowserRouter, null, 2));

    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.NEWS'})}</PageTitle>
            
            <div className="d-flex flex-column flex-xl-row card card-xl-stretch mb-5 mb-xl-8 p-10">           
                {isLoading ? <LoadingIndicator/> : 
                <>
                <div className="flex-lg-row-fluid me-xl-15 mb-10">
                    <div className="mb-5">
                        <div className="mb-8">
                            <div className="d-flex flex-wrap justify-content-between mb-6">
                                <div className='d-flex'>
                                    <div className="me-9 my-1 mt-2">
                                        <span className="svg-icon svg-icon-primary svg-icon-2 me-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                                                <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                                                <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                                                <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        <span className="fw-bolder text-gray-400">Дата: {post.created_at}</span>
                                    </div>
                                    <div className="">
                                        <span className={category.color && category.color + ' fw-bolder my-2'}>
                                            {category.title && category.title.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <FavoriteItem module_id={1} record_id={parameters.id} type_id={2} />
                                    <Link to={`/news/edit/${parameters.id}`} className="btn btn-bg-light btn-icon btn-active-color-primary btn-sm">
                                        <i className="bi bi-pencil"></i>
                                    </Link>
                                    <button className="btn btn-bg-danger btn-icon btn-active-color-primary btn-sm ms-2" onClick={()=> deletePostById(parameters.id)}>
                                        <i className="bi bi-trash2 text-white"></i>
                                    </button>
                                </div>
                            </div>
                            <span href="#" className="text-dark text-hover-primary fs-2 fw-bolder">{post.title}
                                <span className="fw-bolder text-muted fs-5 ps-1 ms-3">
                                    Минуты на чтение: {post.content && readingTime(post.content)} 
                                </span>
                            </span>
                        </div>
                        <div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-250px mb-5" style={{backgroundImage: `url(${undefinedNewImage(post.photo)})`}}>

                        </div>
                        <div className="d-flex fs-5 fw-bold text-gray-600">
                            <div className="ck-content" dangerouslySetInnerHTML={{__html: post.content}}/>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <LikeItem module_id={1} record_id={parameters.id} type_id={1} />
                        <a className={`btn btn-sm text-primary px-4 py-2 fw-bolder ms-2`}>
                            <span className="svg-icon svg-icon-2">
                                <i className="bi bi-chat-left-text-fill text-primary"></i>
                            </span>
                            16 Комментариев
                        </a>
                        <span className={`btn btn-sm text-muted px-4 py-2 fw-bolder ms-2`}>
                            <span className="svg-icon svg-icon-2">
                                <i className="bi bi-eye-fill"></i>
                            </span>
                            {post.views && post.views} Просмотров
                        </span>
                    </div>
                    <div className="d-flex align-items-center border-1 border-dashed card-rounded p-5 p-lg-5 mb-10">
                        <div className="text-center flex-shrink-0 me-7 me-lg-13">
                            <div className="symbol symbol-70px symbol-circle mb-2">
                                <img src={`${undefinedAvatar(authorProfile.photo && authorProfile.photo)}`}  className="" alt=""/> 
                            </div>
                            <div className="mb-0">
                                <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="text-gray-700 fw-bold text-hover-primary">
                                    {author && author.first_name + ' ' + author.last_name}
                                </a>
                                <span className="text-gray-400 fs-7 fw-semibold d-block mt-1">
                                {authorProfile && authorProfile.job_title.title}
                                </span>                   
                            </div>               
                        </div>
                        <div className="mb-0 fs-6"> 
                            <div className="text-muted fw-semibold lh-lg mb-2">
                                {authorProfile && authorProfile.quote}
                            </div>
                            <a href="/metronic8/demo1/../demo1/pages/user-profile/overview.html" className="fw-semibold link-primary">Author’s Profile</a>              
                        </div>
                    </div>
                    <div id='comments'>
                        <Comments module_id={1} record_id={parameters.id}/>
                    </div>
                </div>
                <div className="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">
                    <NewSidebar/>
                </div>
                </>
                }
            </div>

            
        </>
    )
}

export default NewView