import React from 'react'
import { basePath, templates } from '../data'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <h1 className='title'>Resume</h1>
            <div className='template-card-container'>
                {templates.map((template, index) => (
                    <div className='template-card box-shadow-1' onClick={() => navigate(`${basePath}/${index+1}`)}>
                        {template.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home