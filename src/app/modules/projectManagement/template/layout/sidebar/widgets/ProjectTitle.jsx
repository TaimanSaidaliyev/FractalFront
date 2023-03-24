import { undefinedProject } from "../../../../../../utils/Undefined"

export const ProjectTitle = () => {
    const comment = {}
    return (
        <div>
            <div className="d-flex mt-5">
                <div className="cursor-pointer symbol symbol-30px symbol-md-40px me-5">
                    <img src={`${undefinedProject(comment.author_photo && comment.author_photo)}`} alt=""/>
                </div>
                <div className="d-flex flex-column flex-row-fluid">
                    <div className="d-flex align-items-center flex-wrap mb-1">
                        <a href="#" className="text-gray-800 text-hover-primary fw-bolder me-2">Fractal</a>
                    </div>
                    <span className="text-gray-800 fs-7 fw-normal pt-1">Удобный бизнес</span>
                </div>
            </div>
        </div>
    )
}
