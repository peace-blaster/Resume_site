// libs
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Home from './Home';
import Skills from './Skills';
import SampleWork from './SampleWork';
import Experience from './Experience';
import Contact from './Contact';
import Resume from './Resume';

function AppRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/SampleWork' element={<SampleWork />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Resume' element={<Resume />} />
            {/* if none of the above match, then redirect to home */}
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
