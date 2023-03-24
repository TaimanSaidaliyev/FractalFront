import clsx from 'clsx'
import { useLayout } from '../../../../../../_metronic/layout/core'
import {KTSVG} from '../../../../../../_metronic/helpers'
import { AsideMenu } from './AsideMenu'
import { ProjectTitle } from './widgets/ProjectTitle'

const AsideDefault = () => {
    const {config, classes} = useLayout()
    const {aside} = config

    return (
      <div
        id='kt_aside'
        className={clsx('aside', classes.aside.join(' ')) + ' shadow-none'}
        data-kt-drawer='true'
        data-kt-drawer-name='aside'
        data-kt-drawer-activate='{default: true, lg: false}'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'200px', '300px': '250px'}"
        data-kt-drawer-direction='start'
        data-kt-drawer-toggle='#kt_aside_mobile_toggle'
        style={{marginTop: '58px', borderRight: '2px solid #ECECEC', position: 'absolute'}}
      >

        {/* begin::Brand */}
        <div className='aside-logo flex-column-auto' id='kt_aside_logo'>
          {/* begin::Logo */}
          {aside.theme === 'light' && (
            <div className='logo'>
              <ProjectTitle/>
            </div>
          )}

          {/* begin::Aside toggler */}
          {aside.minimize && (
            <div
              id='kt_aside_toggle'
              className='btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle'
              data-kt-toggle='true'
              data-kt-toggle-state='active'
              data-kt-toggle-target='body'
              data-kt-toggle-name='aside-minimize'
            >
              <KTSVG
                path={'/media/icons/duotune/arrows/arr080.svg'}
                className={'svg-icon-1 rotate-180'} 
              />
            </div>
          )}
          {/* end::Aside toggler */}
        </div>
        {/* end::Brand */}

        {/* begin::Aside menu */}
        <div className='aside-menu flex-column-fluid'>
          <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
        </div>
        {/* end::Aside menu */}

      </div>
    )
}

export {AsideDefault}
