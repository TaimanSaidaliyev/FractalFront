import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';
import { PageTitle } from '../../../../_metronic/layout/core'
import NewsService from '../../../API/NewsService.js';
import { UploadImage } from '../../../utils/UploadImage';
import { useFetching } from '../../../hooks/useFetching';
import { MySelectInput } from '../../../components/UI/MySelectInput';
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ToastJsx from '../../../components/common/ToastJsx';
import MyCKEditor from '../../../components/UI/MyCKEditor';
import { LoadingIndicator } from '../../../components/UI/LoadingIndicator';



const NewAddSimple = (props) => {
    const intl = useIntl()
    const [newPost, setNewPost] = useState({title: '', content: '', is_published: 1, category: null, photo: null})
    const formData = new FormData()
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const parameters = useParams()

    const [getCategories, isCategoriesLoading, apiCategoriesError] = useFetching(async () => {
        const response = await NewsService.getCategories()
        setCategories(response.data.categories)
    })

    const [getNew, isGetNewLoading, errorGetNew] = useFetching(async () => {
        const response = await NewsService.getNewById(parameters.id)
        setNewPost(response.data.new)
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        for (var prop in newPost) {
            if( newPost.hasOwnProperty( prop ) ) {
                formData.append(prop, newPost[prop])
            }
        }

        if(props.type==='add'){
            const response = await NewsService.addNew(formData)
            .then((result) => {
                ToastJsx('Новость была добавлена, скоро вас перенаправит на страницу данной новости', 'success')
                setTimeout(() => {
                    navigate(`/news/view/${result.data.post.pk}`)
                }, 3000)
            })
            .catch((error) => {
                ToastJsx(error.message, 'error')
            })
        }
        else if (props.type==='edit'){
            const response = await NewsService.editNew(formData, parameters.id)
            .then((result) => {
                ToastJsx('Новость была обновлена, скоро вас перенаправит на страницу данной новости', 'success')
                setTimeout(() => {
                    navigate(`/news/view/${parameters.id}`)
                }, 3000)
            })
            .catch((error) => {
                ToastJsx(error.message, 'error')
            })
        }
    };

    useEffect(()=>{
        getCategories()
        if(props.type === 'edit')
        {
            getNew()
        }
    },[])
    
    function uploadImage (image) {
        setNewPost({...newPost, photo: image})
    }

    return (
        <>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.NEWS'})}</PageTitle>
        <div className={`card card-xl-stretch mb-5 mb-xl-8 p-10`}>
            {isGetNewLoading ? 
            <LoadingIndicator/>
            : 
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-9'>
                        <p className='h5 mb-5'>Добавить новость</p>
                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label fw-bold fs-6'>
                                <span className='required'>Заголовок</span>
                            </label>
                            <div className='col-lg-10 fv-row'>
                                <input type='text' className='form-control form-control-lg' placeholder='Введите название статьи' value={newPost.title && newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label fw-bold fs-6'>
                                <span className='required'>Содержимое</span>
                            </label>

                            <div className='col-lg-10 fv-row'>
                                <MyCKEditor value={newPost.content && newPost.content} onChange={contentValue => setNewPost({...newPost, content: contentValue})} />
                                {/* <textarea className='form-control form-control-lg' placeholder='Подробное описание новости' value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} rows="20"/> */}
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-3'>
                        <p className='h5 fw-light mb-5'>Категория</p>
                        <MySelectInput 
                            value={newPost.category && newPost.category.id} 
                            onChange={selectedCategory => setNewPost({...newPost, category: selectedCategory})} 
                            defaultValue='' 
                            options={categories}
                        />
                        <p className='h5 fw-light mb-5 mt-5'>Статус видимости</p>
                        <MySelectInput 
                            value={newPost.is_published && newPost.is_published} 
                            onChange={selectedPuslished => setNewPost({...newPost, is_published: selectedPuslished})} 
                            defaultValue='' 
                            options={[{pk: 1, title: 'Опубликовано'}, {pk: 0, title: 'Черновик'}]}
                        />
                        <p className='h5 mb-5 mt-5'>Изображение</p>
                        <UploadImage value={newPost.photo} uploadImage={uploadImage}/>
                    </div>
                </div>
                <button type="submit" className='btn btn-primary btn-sm'>Сохранить</button>
            </form>
            }
            
        </div>
        </>
    );
};

export default NewAddSimple;
