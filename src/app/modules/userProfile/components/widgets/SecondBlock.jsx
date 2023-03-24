import { undefinedCertificate } from "../../../../utils/Undefined"

export const SecondBlock = (props) => {
    const user = props.user
    const profile = props.profile 

    return (
        <div className="mx-5 mb-10">
            <span className="text-dark fs-2 fw-bold">
                Информация о сотруднике
            </span>
            <span className={`${profile.status && profile.status.color} fw-bolder ms-5`}>
                {profile.status && profile.status.title}
            </span>
            <span className="ms-4">
                <i className="bi bi-pencil-fill fs-3 text-muted"></i>
            </span>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Департамент:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.department && profile.department.title}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Мобильный телефон:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.telephone && profile.telephone}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Email:
                </div>
                <div className="col-sm-8 fs-5">
                    {user.email && user.email}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    ИИН:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.person_id && profile.person_id}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    День рождения:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.birth_date && profile.birth_date}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Дата начала работы:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.start_date && profile.start_date}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Образование:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.education && profile.education}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    О себе:
                </div>
                <div className="col-sm-8 fs-5">
                    {profile.bio && profile.bio}
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Сертификаты:
                </div>
                <div className="col-sm-8 fs-5">
                    <div className="cursor-pointer symbol symbol-75px symbol-md-75px">
                        {
                            profile.certificate &&
                            profile.certificate.map(
                                (certificate_item) =>
                                    <img src={`${undefinedCertificate(certificate_item.image)}`} key={certificate_item.id} alt="metronic" className="me-2 mt-2 border"/>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 fs-5 fw-bolder">
                    Награды:
                </div>
                <div className="col-sm-8 fs-5">
                    <div className="cursor-pointer symbol symbol-75px symbol-md-75px">
                        {
                            profile.honor &&
                            profile.honor.map(
                                (honor_item) =>
                                    <img src={`${undefinedCertificate(honor_item.image)}`} key={honor_item.id} alt="metronic" className="me-2 mt-2 border"/>
                                )
                        }
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
