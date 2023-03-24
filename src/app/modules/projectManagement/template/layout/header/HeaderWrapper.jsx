/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import { useLayout } from '../../../../../../_metronic/layout/core'
import Header from './Header'
import { DefaultTitle } from '../../../../../../_metronic/layout/components/header/page-title/DefaultTitle'
import { Topbar } from '../../../../../../_metronic/layout/components/header/Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      style={{background: '#ffffff', height: '55px'}}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
        style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}
      >
        {/* begin::Aside mobile toggle */}
        {aside.display && (
          <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
            <div
              className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
              id='kt_aside_mobile_toggle'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-2x mt-1' />
            </div>
          </div>
        )}
        {/* end::Aside mobile toggle */}
        {/* begin::Logo */}
        {!aside.display && (
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
            <Link to='/pm' className='d-lg-none'>
              <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-2.svg')} className='h-30px' />
            </Link>
          </div>
        )}
        {/* end::Logo */}

        {aside.display && (
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
            <Link to='/pm' className='d-lg-none'>
              <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-2.svg')} className='h-30px' />
            </Link>
          </div>
        )}

        {/* begin::Wrapper */}
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          {/* begin::Navbar */}
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          {header.left === 'page-title' && (
            <div className='d-flex align-items-center' id='kt_header_nav'>
              <DefaultTitle />
            </div>
          )}

          <div className='d-flex align-items-stretch flex-shrink-0'>
            <Topbar />
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  )
}
