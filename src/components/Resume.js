import React, { useEffect, useState } from 'react'
import Parse from 'parse/dist/parse.min.js';
import { useParams } from 'react-router-dom';
import Template1 from './template1';
import Template2 from './template2';
import CoverLetterTemplate2 from './cover-letter/Template2';

const Resume = () => {
    const {TemplateId, Company, Type} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            
            const query = new Parse.Query('Resume');
            const entries = await query.find();
            console.log(entries);
            const entry = entries.filter(ent => (ent.attributes.Company===Company && ent.attributes.Type===Type))[0]
            setData(JSON.parse(entry.attributes.Data));
        }
        fetchData();
    }, [Company, Type])

    if(data) {
        if(Type==="RESUME") {
            switch(TemplateId) {
                case "1": {
                    return <Template1 data={data}/>
                }
                case "2": {
                    return <Template2 data={data}/>
                }
                default: return <></>;
            }
        } else {
            switch(TemplateId) {
                case "1": {
                    return <Template1 data={data}/>
                }
                case "2": {
                    return <CoverLetterTemplate2 data={data}/>
                }
                default: return <></>;
            }
        }
    } 
    else {
        return <></>;
    }
}

export default Resume