import { undefinedNewImage, undefinedAvatar } from "../../../../../utils/Undefined";
import { Link } from 'react-router-dom';

export const NewListItemV3 = (props) => {
    const item = props.item

    return (
        <div className="card card-flush h-xl-100">
            <div className="card-body p-0 pb-10">  
                <div className="row gx-9 h-100">
                    <div className="col-sm-4 mb-10 mb-sm-0">    
                        <div className="d-block overlay h-50">        
                            <div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-200px h-100" style={{backgroundImage: `url(${undefinedNewImage(item.photo && item.photo)})`}}>                    
                            </div> 
                        </div>  
                    </div>
                    <div className="col-sm-8">
                        <div className="d-flex flex-column h-100">
                            <div className="mb-7">
                                <div className="mb-6">
                                    <span className="text-gray-400 fs-7 fw-bold me-2 d-block lh-1 pb-1">ID новости: {item.id && item.id}</span>
                                    <Link to={`/news/view/${item.id}`} className="text-gray-800 text-hover-primary fs-1 fw-bold">{item.title && item.title}</Link>
                                </div>
                                <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                                    <div className="d-flex align-items-center me-5 me-xl-13">
                                        <div className="symbol symbol-30px symbol-circle me-3">                                                   
                                            <img src={undefinedAvatar()}/>                                                    
                                        </div>
                                        <div className="m-0">                            
                                            <span className="fw-semibold text-gray-400 d-block fs-8">Автор статьи</span>
                                            <span className="fw-bold text-gray-800 text-hover-primary fs-7 fw-bolder">{item.author && item.author.first_name + ' ' + item.author.last_name}</span>
                                        </div>
                                    </div>                    
                                    <div className="d-flex align-items-center">
                                        <div className="symbol symbol-30px symbol-circle me-3">
                                            <span className="symbol-label bg-success">
                                                <span className="svg-icon svg-icon-5 svg-icon-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor"></path>
                                                <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor"></path>
                                                </svg>
                                                </span>
                                            </span>                
                                        </div>
                                        <div className="m-0">                            
                                            <span className="fw-semibold text-gray-400 d-block fs-8">Дата публикации</span>
                                            <span className="fw-bold text-gray-800 text-hover-primary fs-7 fw-bolder">{item.created_at && item.created_at}</span>
                                        </div>
                                    </div>                      
                                </div>
                            </div>
                            <div className="d-flex flex-column pb-7 text-muted">
                                {item.content && item.content.substring(0, 450).replace(/(<([^>]+)>)/gi, "")}
                            </div>
                            <div className="d-flex flex-stack mt-auto bd-highlight">  
                                <Link to={`/news/view/${item.id}`} className="btn btn-primary btn-sm flex-shrink-0 me-3">Подробнее</Link>
                                <Link to={`/news/category/${item.category.id}`}>
                                    <span className={item.category.color + ' fw-bolder my-2'}>
                                        {item.category.title.toUpperCase()}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
