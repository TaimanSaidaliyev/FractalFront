import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';
import { PageTitle } from '../../../../_metronic/layout/core'
import NewsService from '../../../API/NewsService.js';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../../hooks/useFetching';

const NewEdit = () => {
    const parameters = useParams()

    const intl = useIntl()
    const [newPost, setNewPost] = useState({title: '', content: '', is_published: false, category: null, photo: null})
    const formData = new FormData()

    const [getNew, isNewLoading, apiNewError] = useFetching(async () => {
        const response = await NewsService.getNewById(parameters.id)
        setNewPost(response.new)
        console.log(response.new.photo)
    })

    useEffect(()=>{
        getNew(parameters.id)
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        for (var prop in newPost) {
            if( newPost.hasOwnProperty( prop ) ) {
                formData.append(prop, newPost[prop])
            }
        }
        NewsService.editNew(formData, parameters.id)
    };

    return (
        <>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.NEWS'})}</PageTitle>
        <div className={`card card-xl-stretch mb-5 mb-xl-8 p-10`}>
            <form onSubmit={handleSubmit}>
            <div className='row mb-6'>
                <label className='col-lg-1 col-form-label fw-bold fs-6'>
                    <span className='required'>Title</span>
                </label>

                <div className='col-lg-11 fv-row'>
                    <input type='text' className='form-control form-control-lg form-control-solid' placeholder='Enter new title' value={newPost && newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
                </div>
                </div>
                <div className='row mb-6'>
                    <label className='col-lg-1 col-form-label fw-bold fs-6'>
                        <span className='required'>Content</span>
                    </label>

                    <div className='col-lg-11 fv-row'>
                        <textarea className='form-control form-control-lg form-control-solid' rows={15} placeholder='Location for content' value={newPost && newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
                    </div>
                </div>
                <div className='row mb-0'>
                    <label className='col-lg-1 col-form-label fw-bold fs-6'>Is published</label>
                    <div className='col-lg-11 d-flex align-items-start mt-2'>
                        <div className='form-check form-check-solid form-switch fv-row'>
                            <input className='form-check-input w-45px h-30px' type='checkbox' id='allowmarketing' value={newPost && newPost.is_published} onChange={e => setNewPost({...newPost, is_published: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className='row mb-6 mt-5'>
                    <label className='col-lg-1 col-form-label fw-bold fs-6'>
                        <span className='required'>Category</span>
                    </label>
                    <div className='col-lg-11 fv-row'>
                        <select className='form-select form-select-solid form-select-lg fw-bold' value={newPost && newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})}>
                            <option value='1'>Наука</option>
                            <option value='2'>Спорт</option>
                            <option value='2'>Животные</option>
                        </select>
                    </div>
                </div>
                <input type="file" value={newPost.photo} onChange={e => setNewPost({...newPost, photo: e.target.files[0]})} />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
};

export default NewEdit;
