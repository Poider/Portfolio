import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Divider1 from './components/common/Divider1';
import Divider2 from './components/common/Divider2';
import NavBar from './components/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Testimonials from './sections/Testimonials';
import IntroOverlay from './components/IntroOverlay';
import Divider3 from './components/common/Divider3';
import Divider4 from './components/common/Divider4';
import ContactForm from './sections/ContactForm';
import Footer from './sections/Footer';
import DividerFooter from './components/common/DividerFooter';
// import your new ThankYou page:
import ThankYou from './sections/ThankYou';
import './App.css'
import { Analytics } from '@vercel/analytics/react';

const MainPage = () => (
    <div className="BackgroundDiv" id="experience">
        <div className="navSpacer" />

        <IntroOverlay />
        <NavBar />
        <Hero />
        <Divider1 />
        <About />
        <Divider2 />
        <Projects />
        <Divider3 />
        <Skills />
        <Contact />
        <Divider4 />
        <Testimonials />
        <ContactForm />
        <DividerFooter />
        <Footer />
    </div>
);

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
        <Analytics />    
        </>
    );
};

export default App;
