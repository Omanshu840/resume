import React from 'react'
import SectionHeader from './SectionHeader'
import { resume } from '../../data/resume'


const Education = () => {
    return (
        <div className='education'>
            <SectionHeader title={"Education"}/>
            <div>
                {resume.education.map((data, id) => (
                    <div key={id} className='education-item'>
                        <div className='education-left-container'>
                            <div className='item-title'>{data.studyType} in {data.area}</div>
                            <div className='item-subtitle'>{data.institution}</div>
                        </div>
                        <div className='education-right-container'>
                            <div className='education-date'>{data.startDate} - {data.endDate}</div>
                            <div className='grade'>{data.gpa}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education