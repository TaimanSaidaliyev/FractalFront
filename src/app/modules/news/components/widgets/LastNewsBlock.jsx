import { useState, useEffect } from 'react'
import { NewListItemv4 } from './NewListItem/NewListItemv4'
import { useFetching } from '../../../../hooks/useFetching'
import NewsService from '../../../../API/NewsService.js';

export const LastNewsBlock = () => {
    const [lastNews, setLastNews] = useState([])
    const [getLastNews, isLastNewsLoading, apiLastNewsError] = useFetching(async () => {
        const response = await NewsService.getNews3()
        setLastNews(response.data.lastNewsBlock)
    })
    
    useEffect(() => {
        getLastNews()
        return(()=>getLastNews())
    }, []);

    return (
        <div className='mb-10'>
            <div className="text-black mb-7 h4">Последние новости</div>
            {lastNews && lastNews.map((item, index) => 
                <NewListItemv4 item={item} key={item.id}/>
            )}
            
        </div>
    )
}
