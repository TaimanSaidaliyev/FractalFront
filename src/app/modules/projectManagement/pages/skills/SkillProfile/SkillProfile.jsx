import { useFetching } from "../../../../../hooks/useFetching"
import UserService from "../../../../../API/UserService"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FirstBlock } from "../../../../userProfile/components/widgets/FirstBlock"
import { SecondBlock } from "../../../../userProfile/components/widgets/SecondBlock"
import { StatisticsWidget4 } from "../../../../../../_metronic/partials/widgets"
import { MyProgressBar } from "../../../../../components/UI/MyProgressBar"
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


export const SkillProfile = () => {
    const parameters = useParams()
    const [user, setUser] = useState('')
    const [profile, setProfile] = useState('')
    const [userId, setUserId] = useState(parameters.id)

    const data = [
        {
            data: {
              battery: 1.0,
              design: 1.0,
              useful: 1.0,
              speed: 1.0,
              weight: 1.0
            },
            meta: { color: 'green' }
        },
        {
          data: {
            battery: 0.81,
            design: 0.89,
            useful: 1.0,
            speed: 0.68,
            weight: 0.29
          },
          meta: { color: 'red' }
        },
        
      ];
  
    const captions = {
        // columns
        battery: 'React',
        design: 'Redux',
        useful: 'Javascript',
        speed: 'Python',
        weight: 'Photoshop'
    };

    const [getUserInfo, isGetUserInfoLoading, isGetUserInfoError] =  useFetching( async ()=> {
        const response = await (UserService.getUserInfo(userId))
        setUser(response.data.user)
        setProfile(response.data.profile)
    })

    const [getCurrentUser, isGetCurrentUserLoading, isGetCirrentUserError] =  useFetching( async ()=> {
        const response = await (UserService.getCurrentUserInfo())
        setUser(response.data.user)
        setProfile(response.data.profile)
    })

    useEffect(()=>{
        if(userId)
        {
            getUserInfo()
        }
        else
        {
            getCurrentUser()
        }
        
    }, [])


    return (
        <div className="p-10">
            <div className="row">
                <div className="col-md-2">
                    <FirstBlock user={user} profile={profile}/>
                </div>
                <div className="col-md-4">
                    <SecondBlock user={user} profile={profile}/>
                </div>
                <div className="col-md-6">
                    <span className="text-dark fs-2 fw-bold">
                        Профессиональные навыки
                    </span>
                    <div className='row g-5 g-xl-8'>
                        <div className='col-xl-4'>
                        <StatisticsWidget4
                            className='card-xl-stretch mb-xl-8'
                            svgIcon='/media/icons/duotune/ecommerce/ecm002.svg'
                            color='info'
                            description='Всего задач'
                            change='81'
                        />
                        </div>

                        <div className='col-xl-4'>
                        <StatisticsWidget4
                            className='card-xl-stretch mb-xl-8'
                            svgIcon='/media/icons/duotune/general/gen025.svg'
                            color='success'
                            description='Выполнено'
                            change='68'
                        />
                        </div>

                        <div className='col-xl-4'>
                        <StatisticsWidget4
                            className='card-xl-stretch mb-5 mb-xl-8'
                            svgIcon='/media/icons/duotune/finance/fin006.svg'
                            color='primary'
                            description='В исполнении'
                            change='13'
                        />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <span className="text-dark fs-2">Навыки сотрудника</span>
                            <RadarChart
                                captions={captions}
                                data={data}
                                size={250}
                            />
                        </div>
                        <div className="col-md-8">
                            
                            <table className="w-100 mt-10">
                                <tr>
                                    <td className="text-start fs-4">React</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><MyProgressBar value={81}/></td> 
                                    <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>81% </td>   
                                </tr>
                                <tr>
                                    <td className="text-start fs-4">Redux</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><MyProgressBar value={89}/></td> 
                                    <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>89% </td>   
                                </tr>
                                <tr>
                                    <td className="text-start fs-4">Javascript</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><MyProgressBar value={100}/></td> 
                                    <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>100% </td>   
                                </tr>
                                <tr>
                                    <td className="text-start fs-4">Python</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><MyProgressBar value={68}/></td> 
                                    <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>68% </td>   
                                </tr>
                                <tr>
                                    <td className="text-start fs-4">Photoshop</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><MyProgressBar value={29}/></td> 
                                    <td style={{width: '20px', paddingLeft: '10px'}} className='fs-3'>29% </td>   
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
