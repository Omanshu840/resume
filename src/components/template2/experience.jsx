import React from 'react'
import SectionHeader from './sectionHeader'
import { resume } from '../../data/resume'

const Experience = () => {
    return (
        <div className='experience'>
            <SectionHeader title={resume.headings.work}/>
            {resume.work.map((item) => (
                <div className='record-container' style={{marginTop: '10px'}}>
                    <div className='title'>
                        <div>{item.position}</div>
                        <div className='time-line'>{item.startDate} - {item.endDate}</div>
                    </div>
                    <div className='subtitle'>
                        <div>{item.company}</div>
                    </div>
                    <div className='description-container'>
                        {item.highlights.map((des, dId) => (
                            <div style={{display: 'flex'}}>
                                <div className='bullet'></div>
                                <div className='description' dangerouslySetInnerHTML={{ __html: des }} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience