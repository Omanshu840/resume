import React from 'react'
import SectionHeader from './sectionHeader'
import { resume } from '../../data/resume'

const Projects = () => {
    return (
        <div className='projects'>
            <SectionHeader title={resume.headings.projects}/>
            {resume.projects.map(project => (
                <div className='record-container' style={{marginTop: '10px'}}>
                <div className='title'>
                    <div>{project.name}</div>
                    <div className='time-line'>{project.url}</div>
                </div>
                <div className='description-container'>
                    <div style={{display: 'flex'}}>
                        <div className='description' dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    <div>
                        Tech Stack:{" "}
                        {project.keywords.map(skill => (
                            <>{skill}{" "}</>
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Projects