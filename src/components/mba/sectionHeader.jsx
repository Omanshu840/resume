import React from 'react'

const SectionHeader = ({title}) => {
    return (
        <div className='section-header'>
            <div className='underline'></div>
            <div>{title}</div>
            <div className='underline'></div>
        </div>
    )
}

export default SectionHeader