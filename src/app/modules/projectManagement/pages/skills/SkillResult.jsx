import { MyProgressBar } from "../../../../components/UI/MyProgressBar"
import ProjectManagementService from '../../../../API/ProjectManagentService'
import { useNavigate } from "react-router-dom"


export const SkillResult = () => {
    const navigate = useNavigate()

    const setUp = () => {
        ProjectManagementService.setUpProject()
    }

    return (
        <div className="text-center p-5">
            <span className="h1 text-primary">Поздравляем!</span>
            <div className="">
                <p className="fs-3">Вы прошли тестирование и доступ к задачам проекта у вас есть!</p>
                <div className="mt-3">
                    <p className="fs-3 ">Вы набрали!</p>
                    <span className="fw-bolder text-warning" style={{fontSize:'48pt'}}>89%</span>
                </div>
                <p className="fs-3">Результаты по навыкам:</p>
                <div className="d-flex justify-content-center w-100 text-center mt-5">
                    <table className="w-300px">
                        <tr>
                            <td className="text-start fs-4">React</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><MyProgressBar value={85}/></td> 
                            <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>85% </td>   
                        </tr>
                        <tr>
                            <td className="text-start fs-4">Redux</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><MyProgressBar value={83}/></td> 
                            <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>81% </td>   
                        </tr>
                        <tr>
                            <td className="text-start fs-4">Javascript</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><MyProgressBar value={100}/></td> 
                            <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>100% </td>   
                        </tr>
                    </table>
                </div>
    
                    <button className="btn btn-sm btn-primary" onClick={()=>{setUp(); navigate('/pm')}}>
                        Перейти в проект
                    </button>

            </div>
        </div>
    )
}
