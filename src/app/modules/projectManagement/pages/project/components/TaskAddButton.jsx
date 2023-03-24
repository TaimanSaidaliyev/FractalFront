import { KTSVG } from "../../../../../../_metronic/helpers"
import { TaskkAddForm } from "../../task/TaskkAddForm"
import {Modal} from 'react-bootstrap';
import { useState } from "react";


export const TaskAddButton = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-primary btn-sm mt-3 ms-4" onClick={handleShow}>
                Создать задачу
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size={'xl'}
            >
                <Modal.Header closeButton className="p-3 ps-5 pe-5">
                <Modal.Title>Создать задачу</Modal.Title>
                </Modal.Header>
                <Modal.Body className="m-0 p-0">
                    <TaskkAddForm getTasks={props.getTasks} handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}


export const TaskParentAddButton = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-sm btn-light-primary ms-2" onClick={handleShow}>
                Создать подзадачу
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size={'xl'}
            >
                <Modal.Header closeButton className="p-3 ps-5 pe-5">
                <Modal.Title>Создать подзадачу</Modal.Title>
                </Modal.Header>
                <Modal.Body className="m-0 p-0">
                    <TaskkAddForm parent={props.parentTaskId} getTasks={props.getTasks} handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}


export const TaskEditButton = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span className='btn btn-icon btn-sm btn-white text-muted' onClick={handleShow}>
                <i className="bi bi-pencil-square" style={{fontSize: '14pt'}}></i>
            </span>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size={'xl'}
            >
                <Modal.Header closeButton className="p-3 ps-5 pe-5">
                <Modal.Title>Создать подзадачу</Modal.Title>
                </Modal.Header>
                <Modal.Body className="m-0 p-0">
                    <TaskkAddForm getTasks={props.getTasks} handleClose={handleClose} task_id={props.task_id} type={'edit'}/>
                </Modal.Body>
            </Modal>
        </>
    )
}
