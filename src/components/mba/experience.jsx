import React from 'react'
import SectionHeader from './sectionHeader'

const Experience = ({resume}) => {
    return (
        <div className='experience'>
            <SectionHeader title={resume.headings.work}/>
            {resume.work.map((item) => (
                <div className='record-container'>
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