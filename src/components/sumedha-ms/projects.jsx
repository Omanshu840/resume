import React from 'react'
import SectionHeader from './sectionHeader';

const Projects = ({resume}) => {
    return (
        <div className='projects'>
            <SectionHeader title={resume.headings.projects}/>
            {resume.projects.map(project => (
                <div className='record-container'>
                <div className='title'>
                    <div>{project.name}</div>
                    <div className='time-line'><a href={project.url}>{project.url}</a></div>
                </div>
                <div className='description-container'>
                    {project.description.map(des => (
                        <div style={{display: 'flex'}}>
                            <div className='bullet'></div>
                            <div className='description' dangerouslySetInnerHTML={{ __html: des }} />
                        </div>
                    ))}
                </div>
            </div>
            ))}
        </div>
    )
}

export default Projects