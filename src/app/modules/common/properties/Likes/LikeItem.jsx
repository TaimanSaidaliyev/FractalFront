import CommonService from '../../../../API/CommonService'
import { useEffect, useState } from 'react'
import { useFetching } from '../../../../hooks/useFetching'
import ToastJsx from '../../../../components/common/ToastJsx'

export const LikeItem = (props) => {
    const [likeValue, setLikeValue] = useState(false)
    const [likesCount, setLikesCount] = useState(0)
    const [setLike, setLikeIsLoading, setLikeError] = useFetching(async () => {
        const response = await CommonService.setPropertyByRecord(props.type_id, props.module_id, props.record_id)
    })

    const [getLike, getLikeIsLoading, getLikeError] = useFetching(async () => {
        const response = await CommonService.getPropertyByRecord(props.type_id, props.module_id, props.record_id)
        setLikesCount(response.data.count)
        setLikeValue(response.data.like.isBool)
        return (response.data.count, response.data.like.isBool)
        
    })

    const isLikedItem = () => {
        setLikeValue(!likeValue)
        setLike()
        setLikesCount(likeValue ? likesCount - 1 : likesCount + 1)
        if(!likeValue){
            ToastJsx('Вы поставили лайк', 'like')
            console.log('like')
        }
        
    } 

    useEffect(()=>{
        getLike()
        return (()=>getLike())
    }, [props])

    return (
        <>
            <a onClick={()=>isLikedItem()} className={`btn btn-sm btn-light ${likeValue ? 'btn-light-danger' : 'btn-color-muted'} btn-active-light-danger px-4 py-2 fw-bolder`}>
                <span className="svg-icon svg-icon-2">
                    <i className="bi bi-heart-fill"></i>
                </span>
                {likesCount && likesCount} Нравится
            </a>
        </>
    )
}
