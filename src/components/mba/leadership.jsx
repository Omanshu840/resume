import React from 'react'
import SectionHeader from './sectionHeader';
import Section from './section';

const Leadership = ({resume}) => {
    return (
        <div className='leadership'>
            <Section title={resume.headings.awards} items={resume.awards} isSingleLine={true}/>
        </div>
    )
}

export default Leadership