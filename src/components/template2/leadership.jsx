import React from 'react'
import SectionHeader from './sectionHeader'
import { resume } from '../../data/resume'

const Leadership = () => {
    return (
        <div className='leadership'>
            <SectionHeader title={resume.headings.awards}/>
            {resume.awards.map(item => (
                <div className='record-container' style={{marginTop: '10px'}}>
                <div className='title'>
                    <div>{item.title}</div>
                    <div className='time-line'>{item.awarder}</div>
                </div>
                <div className='description-container'>
                    <div style={{display: 'flex'}}>
                        <div className='description' dangerouslySetInnerHTML={{ __html: item.summary }} />
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Leadership