import React from 'react'
import { resume } from '../../data/resume'

const Header = () => {
    return (
        <div className='header'>
            <div className='name'>
                {resume.basics.name}
            </div>
            <div className='contact'>
                <a href={resume.basics.email}>
                    {resume.basics.email}
                </a>
                {"|"}
                <a href={resume.basics.email}>
                    {resume.basics.phone}
                </a>
                {"|"}
                <a href={resume.basics.email}>
                    {resume.basics.website}
                </a>
            </div>
        </div>
    )
}

export default Header