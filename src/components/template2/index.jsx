import React from 'react'
import Header from './header'
import './css.css';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Leadership from './leadership';

const Template2 = () => {
    return (
        <div>
            <Header/>
            <Education/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Leadership/>
        </div>
    )
}

export default Template2