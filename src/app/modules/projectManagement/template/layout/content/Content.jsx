import clsx from "clsx"
import { useEffect } from "react"
import { useLayout } from "../../../../../../_metronic/layout/core"
import { DrawerComponent } from "../../../../../../_metronic/assets/ts/components"
import { useLocation } from "react-router-dom"

export const Content = ({children}) => {
    const {classes} = useLayout()
    const location = useLocation()
    useEffect(() => {
      DrawerComponent.hideAll()
    }, [location])

    return (
        <div id='kt_content_container' className={'w-100 bg-white'}>
            {children}
        </div>
    )
}
