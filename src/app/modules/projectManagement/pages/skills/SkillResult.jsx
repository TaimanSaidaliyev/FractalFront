import { MyProgressBar } from "../../../../components/UI/MyProgressBar"
import ProjectManagementService from '../../../../API/ProjectManagentService'
import UserService from "../../../../API/UserService"
import { useFetching } from '../../../../hooks/useFetching'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Materials } from "./SkillResult/Materials"


export const SkillResult = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState({})
    const setUp = () => {
        if(profile.id !== 6){
            ProjectManagementService.setUpProject()
        }
    }

    const [getCurrentUserInfoFunc, isLoading] = useFetching(async () => {
        const response = await UserService.getCurrentUserInfo()
        setProfile(response.data.user)
        console.log(response.data.user)
    })

    useEffect(()=>{
        getCurrentUserInfoFunc()
    },[])
    return (
        <div className="text-center p-5">
            {
                !isLoading && profile && profile.id !== 6 
                ?
                <>
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
                </>
                :
                profile.id === 6 
                ?
                <div className="row">
                    <div className="col-md-8">
                        <span className="h1 text-primary">Тест не пройден!</span>
                            <div className="">
                                <p className="fs-4">Мы сожалеем что так получилось, но доступа к ресурсам проекта у вас нет.</p>
                                <p className="fs-4">Советуем вам подкрепить текущие навыки используя материалы, которые указаны в правой части экрана.</p>
                                <p className="fs-4">Позже вы можете пересдать тест и испытаться свои знания повторно.</p>
                                <div className="mt-3">
                                    <p className="fs-4">Вы набрали!</p>
                                    <span className="fw-bolder text-danger" style={{fontSize:'48pt'}}>52%</span>
                                </div>
                                <p className="fs-3">Результаты по навыкам:</p>
                                <div className="d-flex justify-content-center w-100 text-center mt-5">
                                    <table className="w-300px">
                                        <tr>
                                            <td className="text-start fs-4">React</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><MyProgressBar value={29}/></td> 
                                            <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>29% </td>   
                                        </tr>
                                        <tr>
                                            <td className="text-start fs-4">Redux</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><MyProgressBar value={55}/></td> 
                                            <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>55% </td>   
                                        </tr>
                                        <tr>
                                            <td className="text-start fs-4">Javascript</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><MyProgressBar value={71}/></td> 
                                            <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>71% </td>   
                                        </tr>
                                    </table>
                                </div>
                                <button className="btn btn-sm btn-primary" onClick={()=>{setUp(); navigate('/pm/knowlegebase')}}>
                                    В базу знаний
                                </button>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <Materials/>
                    </div>
                </div>
                :''
            }
            
        </div>
    )
}
