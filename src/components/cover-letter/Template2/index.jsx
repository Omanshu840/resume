import React, { useState } from 'react'
import Header from './header.jsx'
import Parse from 'parse/dist/parse.min.js';
import './css.js';
import Experience from './experience.jsx';
import { css } from './css.js';

const CoverLetterTemplate2 = ({data, showSaveButton}) => {
    const [company, setCompany] = useState("");

    const onSave = async () => {
        const Resume = new Parse.Object('Resume');
        Resume.set('Company', company);
        Resume.set('Type', "COVER_LETTER");
        Resume.set('Data', JSON.stringify(data));
        await Resume.save();
    }

    return (
        <div>
            <style>{css}</style>
            <Header resume={data}/>
            <Experience resume={data}/>

            {showSaveButton && 
                <div style={{marginTop: '100px'}}>
                    <input type="text" placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
                    <button onClick={() => onSave()}>Save</button>
                </div>
            }
        </div>
    )
}

export default CoverLetterTemplate2;