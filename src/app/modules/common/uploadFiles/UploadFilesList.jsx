import { useEffect, useState } from "react"
import { useFetching } from "../../../hooks/useFetching"
import CommonService from "../../../API/CommonService"
import { UserWidgets } from "../../../components/UI/UserWidgets"
import { IconReducer } from "./IconReducer"
import { BACK_HOST } from "../../../API/APISettings"
import { formatBytes } from "../../../utils/FileSize"
import { ConvertDate } from "../../../utils/ConvertTime"


export const UploadFilesList = ({type=1, record_id=1, module_id=3}) => {
    const [files, setFiles] = useState([])
    
    const [getFiles, getFilesIsLoading, getFilesError] = useFetching(async () => {
        const response = await CommonService.getFilesByRecordModule(module_id, record_id)
        setFiles(response.data)
    })

    useEffect(()=>{
        getFiles()
    },[])

    if(type === 1){
        return (
            <>
            {files && <span>Файлов нет</span>}
            <table className="table table-hover">
                <tbody>
                {files && files.map((file)=>
                    <tr key={file.id}>
                        <td style={{width: '25px'}}>
                            {IconReducer(file.property && file.property.file_extension)}
                        </td>
                        <td>
                            <a href={BACK_HOST + file.attached_file} className='text-dark text-hover-primary' download >{file.property && file.property.file_name}</a>
                        </td>
                        <td>
                            {formatBytes(file.property && file.property.file_size)}
                        </td>
                        <td>
                            {ConvertDate(file.uploaded_at && file.uploaded_at)}
                        </td>
                        <td>
                            <UserWidgets user_id={file.user && file.user.id}/>
                        </td>
                    </tr>
                )}
            </tbody>
            </table>
            </>
        )
    }
    else if(type === 2){
        return (
            <div className="d-inline-flex hover-scroll-x w-100">
                {files && files.map((file)=>
                <div key={file.id} className="w-200px h-100px border rounded me-5 p-3 bg-hover-light-primary">
                    <div className="d-flex justify-content-between mb-2">
                        <div>{IconReducer(file.property && file.property.file_extension)}</div>
                        <div>{formatBytes(file.property && file.property.file_size)}</div>
                    </div>
                    <div>
                        <a href={BACK_HOST + file.attached_file} className='text-dark text-hover-primary' download >{file.property && file.property.file_name}</a>
                    </div>
                </div>
                )}
            </div>
        )
    }
}
