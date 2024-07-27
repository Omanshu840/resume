import React from 'react'
import SectionHeader from './sectionHeader'
import { resume } from '../../data/resume'

const Education = () => {
    return (
        <div className='education'>
            <SectionHeader title={resume.headings.education}/>
            {resume.education.map((item) => (
                <div className='record-container'>
                    <div className='title'>
                        <div>{item.institution}</div>
                        <div className='time-line'>{item.startDate} - {item.endDate}</div>
                    </div>
                    <div className='subtitle'>
                        <div>{item.studyType} in {item.area}</div>
                        <div className='gpa'>{item.gpa}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education