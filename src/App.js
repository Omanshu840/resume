import React, { useEffect, useState } from 'react'
import Template2 from './components/template2'
import Template1 from './components/template1'
import Home from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { basePath } from './data';
import Parse from 'parse/dist/parse.min.js';
import { resume } from './data/resume';
import Companies from './components/Companies';
import Resume from './components/Resume';
import CoverLetterTemplate2 from './components/cover-letter/Template2';
import { coverLetter } from './data/cover-letter';
import { mba_resume } from './data/mba-resume';
import MBATemplate from './components/mba';

const PARSE_APPLICATION_ID = 'il2ZrwdroDrghevfubRT5U3BVBKSJhoNuMdrTXdn';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'ulIL2pDsHy5gaK5R9dcoGA2nprD0ifW9BwGaaf8A';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const App = () => {
    const [template, setTemplate] = useState("2");

    return (
        <div className='app'>
            <div className='app-child'>
                <BrowserRouter>
                    <Routes>
                        <Route
                            exact
                            path={basePath+"/"}
                            element={<Home/>}
                        />
                        <Route
                            path={basePath+"/:TemplateId/Company"}
                            element={<Companies/>}
                        />
                        <Route
                            path={basePath+"/:TemplateId/:Company/:Type"}
                            element={<Resume/>}
                        />
                        <Route
                            exact
                            path={basePath+`/1`}
                            element={<Template1 data={resume} showSaveButton={true}/>}
                        />
                        <Route
                            path={basePath+`/2`}
                            element={<Template2 data={resume} showSaveButton={true}/>}
                        />
                        <Route
                            path={basePath+'/CoverLetter/2'}
                            element={<CoverLetterTemplate2 data={coverLetter} showSaveButton={true}/>}
                        />
                        <Route
                            path={basePath+'/MBA'}
                            element={<MBATemplate data={mba_resume} showSaveButton={false}/>}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App