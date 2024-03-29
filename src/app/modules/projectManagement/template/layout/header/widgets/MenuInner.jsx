import { MenuItem } from '../../../../../../../_metronic/layout/components/header/MenuItem'
import { MenuInnerWithSub } from '../../../../../../../_metronic/layout/components/header/MenuInnerWithSub'
import {useIntl} from 'react-intl'

export function MenuInner() {
    const intl = useIntl()
    return (
        <>
        <MenuItem title='Главная' to='/pm' />
        <MenuInnerWithSub
            title='Задачи'
            to='/crafted'
            menuPlacement='bottom-start'
            menuTrigger='click'
            hasArrow={true}
        >
            {/* PAGES */}
            <MenuInnerWithSub
            title='Pages'
            to='/crafted/pages'
            fontIcon='bi-archive'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
            >
            <MenuInnerWithSub
                title='Profile'
                to='/crafted/pages/profile'
                hasArrow={true}
                hasBullet={true}
                menuPlacement='right-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
            >
                <MenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
                <MenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
                <MenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
                <MenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
                <MenuItem
                to='/crafted/pages/profile/connections'
                title='Connections'
                hasBullet={true}
                />
            </MenuInnerWithSub>
            <MenuInnerWithSub
                title='Wizards'
                to='/crafted/pages/wizards'
                hasArrow={true}
                hasBullet={true}
                menuPlacement='right-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
            >
                <MenuItem to='/crafted/pages/wizards/horizontal' title='Horizontal' hasBullet={true} />
                <MenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
            </MenuInnerWithSub>
            </MenuInnerWithSub>

            {/* ACCOUNT */}
            <MenuInnerWithSub
            title='Accounts'
            to='/crafted/accounts'
            fontIcon='bi-person'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
            >
            <MenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
            <MenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
            </MenuInnerWithSub>

            {/* ERRORS */}
            <MenuInnerWithSub
            title='Errors'
            to='/error'
            fontIcon='bi-sticky'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
            >
            <MenuItem to='/error/404' title='Error 404' hasBullet={true} />
            <MenuItem to='/error/500' title='Error 500' hasBullet={true} />
            </MenuInnerWithSub>

            {/* Widgets */}
            <MenuInnerWithSub
            title='Widgets'
            to='/crafted/widgets'
            fontIcon='bi-layers'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
            >
            <MenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
            <MenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
            <MenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
            <MenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
            <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
            <MenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
            </MenuInnerWithSub>
        </MenuInnerWithSub>

        <MenuInnerWithSub 
            title='Участники' 
            to='/apps' 
            menuPlacement='bottom-start' 
            menuTrigger='click'
            hasArrow='true'
        >
            {/* PAGES */}
            
            <MenuItem
                icon='/media/icons/duotune/general/gen051.svg'
                to='/pm/profile'
                title='Мой профайл'
            />
        </MenuInnerWithSub>

        <MenuInnerWithSub 
            title='Отчеты' 
            to='/apps' 
            menuPlacement='bottom-start' 
            menuTrigger='click'
            hasArrow='true'
        >
            {/* PAGES */}
            
            <MenuItem
            icon='/media/icons/duotune/general/gen051.svg'
            to='/apps/user-management/users'
            title='User management'
            />
        </MenuInnerWithSub>

        <MenuInnerWithSub 
            title='Настройки' 
            to='/apps' 
            menuPlacement='bottom-start' 
            menuTrigger='click'
            hasArrow='true'
        >
            {/* PAGES */}
            
            <MenuItem
                icon='/media/icons/duotune/general/gen051.svg'
                to='/pm/1/skill/settings'
                title='Настройки грейдирования'
            />
            <MenuItem
                icon='/media/icons/duotune/general/gen051.svg'
                to='/pm/1/skill/'
                title='Настройки проекта'
            />
        </MenuInnerWithSub>
        <MenuItem title='База знаний' to='/pm/knowlegebase' />
        </>
    )
}
