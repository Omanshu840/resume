import React from 'react'
import Header from './Header'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import './css.js';
import { css } from './css.js'

const Template1 = () => {
    return (
        <>
            <style>{css}</style>
            <Header/>
            <Education/>
            <Skills/>
            <Experience/>
            <Projects/>
        </>
    )
}

export default Template1