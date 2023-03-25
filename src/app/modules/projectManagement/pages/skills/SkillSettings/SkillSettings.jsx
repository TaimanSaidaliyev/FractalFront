import { useState, useEffect } from 'react';
import { SkillSettingsPoistion } from './SkillSettingsPoistion';
import { SkillSettingsQuestions } from './SkillSettingsQuestions';
import { SkillSettingsSkills } from './SkillSettingsSkills';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const SkillSettings = () => {
    const [skill, setSkill] = useState(1)
    const [key, setKey] = useState('home');


    useEffect(()=>{
        console.log(skill)
    },[skill])
    return (
        <div className='text-center p-10'>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                >
                <Tab eventKey="home" title="Должность">
                    <SkillSettingsPoistion />
                </Tab>
                <Tab eventKey="profile" title="Навыки">
                    <div className='row'>
                        <div className='col-md-4 ps-5 pe-5'>
                            <SkillSettingsSkills setSkill={setSkill}/>
                        </div>
                        <div className='col-md-6 ps-5 pe-5'>
                            <SkillSettingsQuestions skill={skill}/>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}
