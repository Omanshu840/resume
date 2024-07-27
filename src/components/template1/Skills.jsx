import React from 'react'
import SectionHeader from './SectionHeader'
import { skills } from '../../data/skills'

const Skills = () => {
    return (
        <div>
            <SectionHeader title={"Skills"}/>
            <div className='skills-container'>
                {skills.map((item, id) => (
                    <div key={id} className='skill-category-container'>
                        <div className='skill-category'>{item.category}:</div>
                        <div className='category-skills-container'>
                            {item.skills.map((skill, sId) => (
                                <div key={sId} className='skill'>{skill}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills