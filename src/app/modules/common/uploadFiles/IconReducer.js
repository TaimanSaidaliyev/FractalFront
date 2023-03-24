import { KTSVG } from "../../../../_metronic/helpers"

export const IconReducer = (type = 'file') => {
    let icon_url = ''
    let directory = '/media/svg/files'
    let class_name = 'svg-icon-1'
    switch (type){
        case '.ai':
            icon_url = <KTSVG path={`${directory}/ai.svg`} className={class_name} />
            break
        case '.css':
            icon_url = <KTSVG path={`${directory}/css.svg`} className={class_name} />
            break
        case '.doc':
            icon_url = <KTSVG path={`${directory}/doc.svg`} className={class_name} />
            break
        case '.docx':
            icon_url = <KTSVG path={`${directory}/doc.svg`} className={class_name} />
            break
        case '.pdf':
            icon_url = <KTSVG path={`${directory}/pdf.svg`} className={class_name} />
            break
        case '.sql':
            icon_url = <KTSVG path={`${directory}/sql.svg`} className={class_name} />
            break
        case '.tif':
            icon_url = <KTSVG path={`${directory}/tif.svg`} className={class_name} />
            break
        case '.xml':
            icon_url = <KTSVG path={`${directory}/xml.svg`} className={class_name} />
            break
        default:
            icon_url = <KTSVG path={`${directory}/upload.svg`} className={class_name} />
    }
    return icon_url
}
