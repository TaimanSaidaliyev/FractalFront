import React from 'react'
import { MenuInner } from './widgets/MenuInner'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'

const Header = () => {
  return (
    <div
      className='header-menu align-items-stretch'
      data-kt-drawer='true'
      data-kt-drawer-name='header-menu'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_header_menu_mobile_toggle'
      data-kt-swapper='true'
      data-kt-swapper-mode='prepend'
      data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
    >
      <div
        className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
        id='#kt_header_menu'
        data-kt-menu='true'
      >
        <Link to='/pm'>
          <img
            alt='Logo'
            className='h-35px logo mt-4 me-10'
            src={toAbsoluteUrl('/media/logos/logo_light-mode_v2.png')}
          />
        </Link>
        <MenuInner />
        {/* <SearchInput/> */}
      </div>
    </div>
  )
}

export default Header