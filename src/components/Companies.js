import React, { useEffect, useState } from 'react'
import Parse from 'parse/dist/parse.min.js';
import { useNavigate, useParams } from 'react-router-dom';
import { basePath } from '../data';

const Companies = () => {
    const {TemplateId} = useParams();
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const companies = [];
            const query = new Parse.Query('Company');
            const entries = await query.find();
            console.log(entries);
            entries.forEach(entry => {
                companies.push({
                    id: entry.id,
                    Name: entry.attributes.Name
                })
            })
            setCompanies(companies);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1 className='title'>Resume</h1>
            <div className='template-card-container'>
                {companies.map((company, index) => (
                    <>
                        <div className='template-card box-shadow-1' onClick={() => navigate(basePath+`/${TemplateId}/${company.Name}/RESUME`)}>
                            {company.Name} Resume
                        </div>
                        <div className='template-card box-shadow-1' onClick={() => navigate(basePath+`/${TemplateId}/${company.Name}/COVER_LETTER`)}>
                            {company.Name} Cover Letter
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Companies