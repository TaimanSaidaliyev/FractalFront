import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl';
import NewsHomePage from './components/NewsHomePage';

export default function NewsPage() {
    const intl = useIntl()
    return (
        <div>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.NEWS'})}</PageTitle>
            <div className={`card card-xl-stretch mb-5 mb-xl-8`}>
                <div className="pb-10">
                    <div className="card-header border-0">
                        <NewsHomePage/>
                    </div>
                </div>
            </div>
        </div>
    )
}
