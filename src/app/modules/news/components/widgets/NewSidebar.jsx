import { CategoryBlock } from './CategoryBlock'
import { LastNewsBlock } from './LastNewsBlock'
import { SeachBlock } from './SeachBlock'

export const NewSidebar = (props) => {
    return (
        <>
            <div className="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">
                <SeachBlock/>
                <CategoryBlock/>
                <LastNewsBlock/>
            </div>
        </>
    )
}
