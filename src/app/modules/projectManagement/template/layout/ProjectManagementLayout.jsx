import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import { AsideDefault } from './sidebar/AsideDefault'
import { Footer } from '../../../../../_metronic/layout/components/Footer'
import { HeaderWrapper } from './header/HeaderWrapper'
import { Toolbar } from '../../../../../_metronic/layout/components/toolbar/Toolbar'
import { ScrollTop } from '../../../../../_metronic/layout/components/ScrollTop'
import { Content } from './content/Content'
import { PageDataProvider } from '../../../../../_metronic/layout/core'
import {useLocation} from 'react-router-dom'
import {DrawerMessenger, ActivityDrawer, Main, InviteUsers, UpgradePlan} from '../../../../../_metronic/partials'

import { MenuComponent } from '../../../../../_metronic/assets/ts/components'

const ProjectManagementLayout = () => {
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
        MenuComponent.reinitialization()
        }, 500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
        MenuComponent.reinitialization()
        }, 500)
    }, [location.key])

    return (
        <PageDataProvider>
            <HeaderWrapper />
            <div className='page d-flex flex-row flex-column-fluid'>
                <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
                    <AsideDefault />
                        <div id='kt_content' className='d-flex flex-column flex-column-fluid'>
                            {/* <Toolbar /> */}
                            <div className='post d-flex flex-column-fluid' id='kt_post'>
                                <Content>
                                    <Outlet />
                                </Content>
                            </div>
                        </div>
                    <Footer />
                </div>
            </div>
            <ScrollTop />
        </PageDataProvider>
    )
}

export {ProjectManagementLayout}
