import { useState, useEffect } from "react";
import CommonService from "../../../API/CommonService";
import { useFetching } from "../../../hooks/useFetching";
import { CommentType1 } from "./CommentType1";
import ToastJsx from "../../../components/common/ToastJsx";


export default function Comments(props) 
{   
    const [comments, setComments] = useState([])
    const [addCommentValue, setAddCommentValue] = useState({})
    const [state, setState] = useState(true)
    const record_id = props.record_id
    const module_id = props.module_id

    const stateTracking = () => {
        setState(!state)
    }

    const [getComments, commentsIsLoading, commentsError] = useFetching(async () => {
        const response = await CommonService.getCommentsByModuleRecord(record_id, module_id)
        setComments(response.data.comments)
    })

    const [addComment, addCommentIsLoading, addCommentError] = useFetching(() => {
        CommonService.addCommentsByModuleRecord(record_id, module_id, addCommentValue)
        .then((success)=>{
            ToastJsx('Ваш комментарий был успешно добавлен', 'success')
            getComments()
        })
        .catch((error) => {
            ToastJsx(error, 'success')
            console.log(error)
        })
        
    }) 

    useEffect(()=>{
        getComments()
        return(()=>getComments())
    }, [record_id, state])

    function handleKeyDown(event) {
        if (event.ctrlKey && event.keyCode === 13) 
        {
          event.preventDefault();
          saveComment(event);
        }
    }
    
    const deleteComment = (comment_id) => {
        CommonService.deleteCommentsById(comment_id)
        .then(ToastJsx('Комментарий был удален', 'error'))
        .then(getComments())
        .catch(error => {console.log(error)})
        stateTracking()
    }

    const saveComment = (event) => {
        event.preventDefault();
        addComment()

        setAddCommentValue({...addCommentValue, title: ''})
        stateTracking()
    }

    const editionComment = (id, value) => {
        CommonService.editCommentsByModuleRecord(record_id, module_id, id, value)
        .then(getComments())
        .then(setState(!state))
    }


    return (
        <>
            <form onSubmit={saveComment}>
                <div className="separator mb-4"></div>
                <textarea 
                    className="form-control resize-none min-h-25px mb-2" 
                    placeholder='Для сохранения комментария нажмите Ctrl+Enter' 
                    value={addCommentValue.title} 
                    onChange={(e)=>setAddCommentValue({...addCommentValue, title: e.target.value})} 
                    onKeyDown={handleKeyDown}
                />
                <button className="btn btn-sm btn-primary mb-5">Сохранить</button>
            </form>
            {comments
                ? comments.map((comment) => 
                    <CommentType1 comment={comment} key={comment.id} editionComment={editionComment} deleteComment={deleteComment} getComments={getComments}/>
                )
                :
                    <span>Комментарии отсутствют</span>
            }
            

        </>
    )
}
