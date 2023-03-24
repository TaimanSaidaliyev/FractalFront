import { useEffect, useState } from "react";
import { undefinedAvatar } from "../../../utils/Undefined";
import ToastJsx from "../../../components/common/ToastJsx";

export const CommentType1 = (props) => {
    const comment = props.comment
    const [editStatus, setEditStatus] = useState(false)
    const [editField, setEditField] = useState({title: comment.title}) 

    const saveEditedComment = () =>{
        props.editionComment(comment.id, editField)
        setEditStatus(!editStatus)
        ToastJsx('Комментарий был успешно отредактирован', 'success')
    }

    useEffect(()=>{
        props.getComments()
    }, [])

    return (
        <>
            <div className="d-flex mb-5" key={comment.id}>
                <div className="symbol symbol-45px me-5">
                    <img src={`${undefinedAvatar(comment.author_photo && comment.author_photo)}`} alt=""/>
                </div>
                <div className="d-flex flex-column flex-row-fluid">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bolder me-2">{comment.author && comment.author.first_name + ' ' + comment.author.last_name}</a>
                        <span className="text-gray-400 fw-bold fs-7">{comment.created_at}</span>
                        <div className="ms-auto">
                            {
                                editStatus 
                                ?   <a onClick={()=>setEditStatus(!editStatus)} className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7 me-2 cursor-pointer">Отменить редактирование</a>
                                :   
                                <>
                                    <a onClick={()=>setEditStatus(!editStatus)} className="ms-auto text-gray-400 text-hover-primary fw-bold fs-7 me-2 cursor-pointer">
                                        <i className="bi bi-pencil"></i>
                                    </a>
                                    <a onClick={()=>props.deleteComment(comment.id)} className="ms-auto text-danger text-hover-danger fw-bold fs-7 cursor-pointer">
                                        <i className="bi bi-trash"></i>
                                    </a>
                                </>
                            }
                        </div>
                    </div>
                    {editStatus 
                        ? 
                            <>
                                <textarea className="form-control" placeholder='Введите комментарий' value={editField.title} onChange={(e)=>setEditField({...editField, title: e.target.value})}/>
                                <div className="text-end mt-2">
                                    <button className="btn btn-primary btn-sm" onClick={() => saveEditedComment()}>Save</button>
                                </div>
                            </>
                        :   <span className="text-gray-800 fs-7 fw-normal pt-1">{comment.title}</span>
                        }
                </div>
            </div>
        </>
    )
}
