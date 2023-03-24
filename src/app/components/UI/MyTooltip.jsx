import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


export const MyTooltip = ({children, key, text}) => {
    return (
        <OverlayTrigger
                key={key}
                placement={'bottom'}
                overlay={
                    <Tooltip id={`tooltip-${'favorite'}`}>
                        {text}
                    </Tooltip>
                }
            >
                {children}
        </OverlayTrigger>
    )
}
