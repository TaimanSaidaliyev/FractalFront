import { Table, Button } from 'react-bootstrap';
import { useFetching } from '../../../../../hooks/useFetching'
import ProjectManagementService from '../../../../../API/ProjectManagentService'
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const SkillSettingsPoistion = () => {
    const [positionList, setPositionList] = useState([])
    const [positionTitle, setPositionTitle] = useState()
    const [accessLvl, setAccessLvl] = useState()
    const [show, setShow] = useState(false);
    const [skillList, setSkillList] = useState([])
    const [showSkillsAdd, setShowSkillsAdd] = useState([])

    const handleClose = () => {setShow(false)};

    const [getPositionList] = useFetching(async () => {
        const response = await ProjectManagementService.getPositionList()
        setPositionList(response.data)
        console.log(response.data)
    })

    const [getSkillListFunc] = useFetching(async () => {
        const response = await ProjectManagementService.getSkillList()
        setSkillList(response.data)
        console.log(response.data)
    })

    const deletePosition = (position_id) => {
        ProjectManagementService.deletePosition(position_id)
        .then(()=>getPositionList())
    }

    const addPositionFunc = () => {
        ProjectManagementService.addPosition(1, positionTitle, accessLvl)
        .then(()=>getPositionList())
    }

    const addSkillToPositionFunc = (position_id, skill_id) => {
        ProjectManagementService.addSkillToPosition(position_id, skill_id)
        .then(()=>getPositionList())
    }

    const deleteSkillToPositionFunc = (position_id, skill_id) => {
        ProjectManagementService.deleteSkillToPosition(position_id, skill_id)
        .then(()=>getPositionList())
    }

    useEffect(()=>{
        getPositionList()
        getSkillListFunc()
    },[])

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='h3 ms-2 mt-3'>
                    Должность на проекте
                </div>
                <div className='text-end'>
                    <Button variant="success" size={'sm'} onClick={()=>{setShow(true)}}>
                        + Добавить
                    </Button>
                </div>
            </div>
            
            <Table hover className='mt-5 w-100 ms-2'>
                <thead>
                    <tr className='fw-bolder'>
                        <th>ID</th>
                        <th>Наименование должности</th>
                        <th className='text-center'>Порог вхождения</th>
                        <th>Навыки</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {positionList.map((item, index)=>
                    <tr className='border-bottom' key={item.id}>
                        <td className='w-10px'>
                            {item.id}
                        </td>
                        <td className='text-start text-hover-primary cursor-pointer'>
                            <span>{item.title}</span>
                        </td>
                        <td className='text-primary fs-3'>
                            {item.access_lvl}%
                        </td>
                        <td className='w-300px'>
                            <div className='d-flex'>
                            {item.skills.map((item_sub_1)=>
                                <>
                                    <span className='badge badge-secondary fs-5 me-2'>
                                        {item_sub_1.title} 
                                        <i class="bi bi-x fs-3 cursor-pointer text-danger" onClick={()=>{deleteSkillToPositionFunc(item.id, item_sub_1.id)}}></i>
                                    </span>
                                </>
                            )}
                            {item.skills.length === 0 && <span className='text-danger'>Необходимо добавить навыки</span>}
                            {
                                showSkillsAdd[index] 
                                ?
                                <select className='form-control w-200px' onChange={(e)=>{addSkillToPositionFunc(item.id, e.target.value)}} onBlur={()=>setShowSkillsAdd([])}>
                                    {skillList.map((skill)=>
                                    <option value={skill.id}>{skill.title}</option>
                                    )}
                                </select>
                                :
                                <span className='text-success h2 cursor-pointer' onClick={(e)=>{setShowSkillsAdd({showSkillsAdd, [index]: !showSkillsAdd[index]})}}>+</span>
                            }
                            </div>
                        </td>
                        <td className='text-center w-50px'>
                            <i className="bi bi-trash2-fill text-danger cursor-pointer" onClick={()=>{deletePosition(item.id)}}></i>
                        </td>
                    </tr>
                    )}
                    
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить вопрос</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-8'>
                            <span className='ms-1'>Наименование позиции</span>
                            <input className='form-control' value={positionTitle} onChange={(e)=>{setPositionTitle(e.target.value)}}/>
                        </div>
                        <div className='col-md-4'>
                            <span className='ms-1'>Порог прохождения</span>
                            <input className='form-control' value={accessLvl} onChange={(e)=>{setAccessLvl(e.target.value)}}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button size={'sm'} variant="secondary" onClick={()=>handleClose()}>
                    Закрыть
                </Button>
                <Button size={'sm'} variant="primary" onClick={()=>{addPositionFunc(); handleClose()}}>
                    Сохранить изменения
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
