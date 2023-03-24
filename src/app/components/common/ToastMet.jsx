import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastMet = (props) => {
    const position = 'bottom-end'

    return (
        <ToastContainer className="p-3 position-fixed" position={position} style={{zIndex: 101}} >
            <Toast bg={props.color} show={props.show} closebutton={true} onClose={()=>props.setShowToastMet(false)}>
                <Toast.Header>
                    <img
                      src="/media/system/checkmark-flat.png"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.body}</Toast.Body>
            </Toast>
        </ToastContainer> 
    )
};

export default ToastMet;
