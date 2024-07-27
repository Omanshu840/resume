import React from 'react'

const SectionHeader = ({title}) => {
    return (
        <div style={{display: 'flex'}}>
            <div className='section-header'>
                {title}
            </div>
        </div>
    )
}

export default SectionHeader