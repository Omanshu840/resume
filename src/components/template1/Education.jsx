import React from 'react'
import SectionHeader from './SectionHeader'
import { education } from '../../data/education'


const Education = () => {
    return (
        <div className='education'>
            <SectionHeader title={"Education"}/>
            <div>
                {education.map((data, id) => (
                    <div key={id} className='education-item'>
                        <div className='education-left-container'>
                            <div className='item-title'>{data.degree}</div>
                            <div className='item-subtitle'>{data.institute}</div>
                        </div>
                        <div className='education-right-container'>
                            <div className='education-date'>{data.startDate} - {data.endDate}</div>
                            <div className='grade'>{data.grade}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education