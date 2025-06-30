import React from 'react'
import SectionHeader from './sectionHeader';

const Skills = ({resume}) => {
    return (
        <div className='skills'>
            <SectionHeader title={resume.headings.skills}/>
            <div className='skills-container'>
                {resume.skills.map((item, id) => (
                    <div key={id} className='skill-category-container'>
                        <div className='skill-category'>{item.name}:</div>
                        <div className='category-skills-container'>
                            {item.keywords.map((skill, sId) => (
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