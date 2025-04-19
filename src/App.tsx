import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Divider1 from './components/common/Divider1';
import NavBar from './components/Header';
import IntroOverlay from './components/IntroOverlay';

const App = () => {
    return ( 
        <div className="BackgroundDiv">
            <IntroOverlay />
            <NavBar />
            <Hero />    
            <Divider1 />
            <Projects />

        </div>
    )
};

export default App;
