import React, { useState } from 'react'
import Template2 from './components/template2'
import Template1 from './components/template1'
import Home from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { basePath } from './data';

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
                            exact
                            path={basePath+`/1`}
                            element={<Template1/>}
                        />
                        <Route
                            path={basePath+`/2`}
                            element={<Template2/>}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App