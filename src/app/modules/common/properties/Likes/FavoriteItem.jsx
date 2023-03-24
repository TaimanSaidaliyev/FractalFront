import CommonService from '../../../../API/CommonService'
import { useEffect, useState } from 'react'
import { useFetching } from '../../../../hooks/useFetching'
import { MyTooltip } from '../../../../components/UI/MyTooltip'
import ToastJsx from '../../../../components/common/ToastJsx'


export const FavoriteItem = (props) => {
    const [favoriteValue, setFavoriteValue] = useState(false)

    const [setFavorite, setFavoriteIsLoading, setFavoriteError] = useFetching(async () => {
        const response = await CommonService.setPropertyByRecord(props.type_id, props.module_id, props.record_id)
        .then(()=>
        {
            if(!favoriteValue){
                ToastJsx('Добавлено в избранное', 'success')
            }
            
        })
        .catch((error)=>
        {
            ToastJsx(error.message, 'error')
        })
    })

    const [getFavorite, getFavoriteIsLoading, getFavoriteError] = useFetching(async () => {
        const response = await CommonService.getPropertyByRecord(props.type_id, props.module_id, props.record_id)
        setFavoriteValue(response.data.like.isBool)
    })

    const isFavoriteItem = () => {
        setFavoriteValue(!favoriteValue)
        setFavorite()
    } 

    useEffect(()=>{
        getFavorite()
        return (()=>
            getFavorite()
        )
    }, [props])

    return (
        <>
            <MyTooltip key='favorite' text={favoriteValue ? 'Добавлено в избранное' : 'Добавить в избранное'}>
                <a onClick={()=>isFavoriteItem()} className={`btn btn-sm btn-icon btn-bg-light ${favoriteValue ? 'btn-light-success' : 'btn-color-muted'} btn-active-light-success me-2 fw-bolder`}>
                    <span className="svg-icon svg-icon-2">
                        <i className="bi bi-star-fill"></i>
                    </span>
                </a>
            </MyTooltip>
        </>
    )
}
