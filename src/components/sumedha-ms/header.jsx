import React from 'react';

const Header = ({resume}) => {
    return (
        <div className='header'>
            <div className='name'>
                {resume.basics.name}
            </div>
            <div className='title'>
                {resume.basics.title}
            </div>
            <div className='contact'>
                <a href={`mailto:${resume.basics.email}`}>
                    {resume.basics.email}
                </a>
                {"|"}
                <a href={`tel:${resume.basics.phone}`}>
                    {resume.basics.phone}
                </a>
                {/* {"|"}
                <a href={`https://www.${resume.basics.linkedIn}`}>
                    {resume.basics.linkedIn}
                </a>
                {"|"}
                <a href={`https://${resume.basics.website}`}>
                    {resume.basics.website}
                </a> */}
                {"|"}
                <div>
                    India
                </div>
            </div>
        </div>
    )
}

export default Header