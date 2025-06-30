import React from 'react'
import SectionHeader from './SectionHeader'
import { resume } from '../../data/resume'

const Projects = () => {
    return (
        <div className='projects'>
            <SectionHeader title={'Projects'}/>
                {resume.projects.map((project, pId) => (
                    <div className='project-container' key={pId}>
                        <div className='project-header'>
                            <div className='project-name'>{project.name}</div>
                            <div className='project-group'>{project.url}</div>
                        </div>
                        <div className='project-description-container'>
                            <div dangerouslySetInnerHTML={{ __html: project.description }} />
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