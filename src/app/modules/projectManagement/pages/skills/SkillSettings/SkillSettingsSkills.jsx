import ProjectManagementService from '../../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react';
import { useFetching } from '../../../../../hooks/useFetching'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const SkillSettingsSkills = ({setSkill}) => {
    const [skillList, setSkillList] = useState([])
    const [show, setShow] = useState(false);
    const [skillName, setSkillName] = useState()
    const [selectedRow, setSelectedRow] = useState(1)

    const handleClose = () => {setShow(false);};
    const handleShow = () => {setShow(true);}

    const [getSkillList] = useFetching(async () => {
        const response = await ProjectManagementService.getSkillList()
        setSkillList(response.data)
    })

    const [setSkillFunc] = useFetching(async () => {
        const response = await ProjectManagementService.setSkill(1, skillName)
        .then(getSkillList)
    })

    const deleteSkill = (skill_id) => {
        ProjectManagementService.deleteSkill(skill_id)
        .then(()=>getSkillList())
    }

    useEffect(()=>{
        getSkillList()
    }, [])

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='h3 mt-3'>
                    Навыки
                </div>
                <div className='text-end'>
                    <Button variant="success" size={'sm'} onClick={()=>{handleShow()}}>
                        + Добавить
                    </Button>
                </div>
            </div>
            <Table className='mt-5' hover>
                <tbody>
                {skillList.map((item)=>
                    <tr className={item.id === selectedRow ? 'border-bottom bg-light-primary' : 'border-bottom'} >
                        <td className='text-center w-10px'>{item.id}</td>
                        <td className='text-start'>
                            <span onClick={()=>{setSkill(item.id); setSelectedRow(item.id)}} className='text-hover-primary cursor-pointer'>{item.title}</span>
                        </td>
                        <td className='text-center w-50px'>
                            <i className="bi bi-trash2-fill text-danger cursor-pointer" onClick={()=>{deleteSkill(item.id)}}></i>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить вопрос</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Название навыка</span>
                    <input className='form-control' value={skillName} onChange={(e)=>{setSkillName(e.target.value)}}/>
                </Modal.Body>
                <Modal.Footer>
                <Button size={'sm'} variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button size={'sm'} variant="primary" onClick={()=>{handleClose(); setSkillFunc()}}>
                    Сохранить изменения
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}
