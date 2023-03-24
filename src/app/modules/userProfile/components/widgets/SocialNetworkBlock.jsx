export const SocialNetworkBlock = (props) => {
    const socialMedia = props.profile
    return (
        <>
            {
                socialMedia.instagram &&
                <div className="d-flex align-items-center mb-7 mt-5">
                    <i className="bi bi-instagram me-5 fs-1 text-danger"></i>
                    <div className="d-flex flex-column">
                        <a href={`https://www.instagram.com/${socialMedia.instagram}`} className="text-dark text-hover-primary fs-6" target="_blank">
                            {socialMedia.instagram}
                        </a>
                    </div>
                </div>
            }
            {
                socialMedia.facebook &&
                <div className="d-flex align-items-center mb-7 mt-5">
                    <i className="bi bi-facebook me-5 fs-1 text-info"></i>
                    <div className="d-flex flex-column">
                        <a href={`https://www.facebook.com/${socialMedia.facebook}`} className="text-dark text-hover-primary fs-6 "  target="_blank">
                            {socialMedia.facebook}
                        </a>
                    </div>
                </div>
            }
            {
                socialMedia.skype &&
                <div className="d-flex align-items-center mb-7 mt-5">
                    <i className="bi bi-skype me-5 fs-1 text-primary"></i>
                    <div className="d-flex flex-column">
                        <a href={`https://www.skype.com/${socialMedia.skype}`}  className="text-dark text-hover-primary fs-6 "  target="_blank">
                            {socialMedia.skype}
                        </a>
                    </div>
                </div>
            }
            {
                socialMedia.linkedin &&
                <div className="d-flex align-items-center mb-7 mt-5">
                    <i className="bi bi-linkedin me-5 fs-1 text-primary"></i>
                    <div className="d-flex flex-column">
                        <a href={`https://www.linkedin.com/${socialMedia.linkedin}`} className="text-dark text-hover-primary fs-6 "  target="_blank">
                            {socialMedia.linkedin}
                        </a>
                    </div>
                </div>
            }
        </>
    )
}
