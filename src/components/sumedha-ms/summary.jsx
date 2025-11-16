import React from 'react'
import SectionHeader from './sectionHeader'

const Summary = ({resume}) => {
    return (
        <div className='experience'>
            <SectionHeader title={resume.headings.summary}/>
            <div className='record-container'>
                <div className='description-container'>
                    <div style={{display: 'flex'}}>
                        <div className='description' dangerouslySetInnerHTML={{ __html: resume.summary }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary