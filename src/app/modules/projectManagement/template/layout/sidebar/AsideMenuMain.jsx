/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import { AsideMenuItemWithSub } from '../../../../../../_metronic/layout/components/aside/AsideMenuItemWithSub'
import { AsideMenuItem } from '../../../../../../_metronic/layout/components/aside/AsideMenuItem'

export function AsideMenuMain() {
    const intl = useIntl()

    return (
        <>
          <div className='menu-item'>
              <div className='menu-content pb-2'>
                  <span className='menu-section text-primary text-uppercase fs-8 ls-1'>Задачи</span>
              </div>
          </div>
          <div className='bg-light-primary'>
            <AsideMenuItem
                to='/pm'
                icon='/media/icons/duotune/coding/cod002.svg'
                title='Назначенные мне'
                fontIcon='bi-app-indicator'
                badge='3'
            />
          </div>
          
          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Все задачи'
              fontIcon='bi-layers'
          />

          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Созданные мной'
              fontIcon='bi-layers'
          />

          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Сохраненные'
              fontIcon='bi-layers'
          />

          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Исполненные'
              fontIcon='bi-layers'
          />

          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Отслеживаемые'
              fontIcon='bi-layers'
          />

          <div className='menu-item'>
              <div className='menu-content mt-5 pb-2'>
                  <span className='menu-section text-primary text-uppercase fs-8 ls-1'>Инструменты</span>
              </div>
          </div>

          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Диаграмма Ганта'
              fontIcon='bi-layers'
          />
          
          <AsideMenuItem
              to='/apps/user-management/users'
              icon='/media/icons/duotune/general/gen051.svg'
              title='Кабан доска'
              fontIcon='bi-layers'
          />

          <div className='menu-item'>
              <div className='menu-content mt-5 pb-2'>
                  <span className='menu-section text-primary text-uppercase fs-8 ls-1'>Категории</span>
              </div>
          </div>

          <AsideMenuItem
              to='/apps/user-management/users'
              title='+  Категория'
              fontIcon='bi bi-plus-lg'
          />

          <div className='menu-item'>
              <div className='menu-content'>
                  <div className='separator mx-1 my-4'></div>
              </div>
          </div>
        
        </>
    )
}
