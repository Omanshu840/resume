import React from 'react'
import SectionHeader from './sectionHeader'

const Experience = ({resume}) => {
    return (
        <div className='experience'>
            <SectionHeader title={resume.headings.coverLetter}/>
            <div>Dear {resume.coverLetter.recipient},</div>
            <div className='description-container'>
                {resume.coverLetter.paras.map((des, dId) => (
                    <div className='description' dangerouslySetInnerHTML={{ __html: des }} />
                ))}
            </div>
            <div class="mb-1 description">Sincerely,</div>
            <div class="mb-1">Omanshu Mahawar</div>
            <div>Senior Full Stack Software Engineer</div>
        </div>
    )
}

export default Experience