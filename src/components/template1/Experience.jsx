import React from 'react'
import SectionHeader from './SectionHeader'
import { experience } from '../../data/experience'

const Experience = () => {
    return (
        <div className='experience'>
            <SectionHeader title={"Experience"}/>
            {experience.map((item, id) => (
                <div  key={id}className='company-positions-container'>
                    {item.positions.map((position, pId) => (
                        <div key={pId} className='company-position'>
                            <div className='position-circle'></div>
                            <div className='position-content'>
                                <div className='position-title-container'>
                                    <div className='position-title'>{position.title}</div>
                                    <div className='position-timeline'>{position.start} - {position.end}</div>
                                </div>
                                <div className='company-title'>{item.company}</div>
                                <div className='position-description-container'>
                                    {position.description.map((des, dId) => (
                                        <div style={{display: 'flex'}}>
                                            <div className='bullet'></div>
                                            <div className='position-description' dangerouslySetInnerHTML={{ __html: des }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Experience