import { useEffect, useState } from "react"
import NewsService from "../../../../API/NewsService"
import { useFetching } from "../../../../hooks/useFetching"
import { Link } from 'react-router-dom';


export const CategoryBlock = () => {
    const [categories, setCategories] = useState([])
    const [getCategories, isCategoriesLoading, apiCategoriesError] = useFetching(async () => {
        const response = await NewsService.getCategories()
        setCategories(response.data.categories)
    })

    useEffect(()=> {
        getCategories()
        return(()=>getCategories())
    }, [])

    return (
        <div className="mb-10">
            <div className="text-black mb-7 h4">Категории</div>
            {categories.map((category)=>
                <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4" key={category.pk}>
                    <Link to={`/news/category/${category.pk}/`} className="text-muted text-hover-primary pe-2">{category.title}</Link>
                    <div className="m-0">{category.count}</div>
                </div>
            )}
        </div>
    )
}
