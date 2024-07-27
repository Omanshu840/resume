import React from 'react'
import SectionHeader from './SectionHeader'
import { projects } from '../../data/projects'

const Projects = () => {
    return (
        <div className='projects'>
            <SectionHeader title={'Projects'}/>
                {projects.map((project, pId) => (
                    <div className='project-container' key={pId}>
                        <div className='project-header'>
                            <div className='project-name'>{project.name}</div>
                            <div className='project-group'>{project.group}</div>
                        </div>
                        <div className='project-description-container'>
                            {project.description.map((description, dId) => (
                                <div key={dId} dangerouslySetInnerHTML={{ __html: description }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Projects