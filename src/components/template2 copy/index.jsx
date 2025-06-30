import React, { useState } from 'react'
import Header from './header.jsx'
import './css.js';
import Education from './education.jsx';
import Experience from './experience.jsx';
import Skills from './skills.jsx';
import Projects from './projects.jsx';
import Leadership from './leadership.jsx';
import { css } from './css.js';
import parseMin from 'parse/dist/parse.min.js';

const Template2 = ({data, showSaveButton}) => {
    const [company, setCompany] = useState("");

    const onSave = async () => {
        const Resume = new parseMin.Object('Resume');
        Resume.set('Company', company);
        Resume.set('Type', "RESUME");
        Resume.set('Data', JSON.stringify(data));
        await Resume.save();
    }

    return (
        <div>
            <style>{css}</style>
            <Header resume={data}/>
            <Experience resume={data}/>
            <Education resume={data}/>
            <Skills resume={data}/>
            <Projects resume={data}/>
            <Leadership resume={data}/>

            {showSaveButton && 
                <div style={{marginTop: '100px'}}>
                    <input type="text" placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
                    <button onClick={() => onSave()}>Save</button>
                </div>
            }
        </div>
    )
}

export default Template2