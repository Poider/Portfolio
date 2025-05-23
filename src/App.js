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
import './App.css';
const MainPage = () => (React.createElement("div", { className: "BackgroundDiv", id: "experience" },
    React.createElement("div", { className: "navSpacer" }),
    React.createElement(IntroOverlay, null),
    React.createElement(NavBar, null),
    React.createElement(Hero, null),
    React.createElement(Divider1, null),
    React.createElement(About, null),
    React.createElement(Divider2, null),
    React.createElement(Projects, null),
    React.createElement(Divider3, null),
    React.createElement(Skills, null),
    React.createElement(Contact, null),
    React.createElement(Divider4, null),
    React.createElement(Testimonials, null),
    React.createElement(ContactForm, null),
    React.createElement(DividerFooter, null),
    React.createElement(Footer, null)));
const App = () => {
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(MainPage, null) }),
            React.createElement(Route, { path: "/thank-you", element: React.createElement(ThankYou, null) }))));
};
export default App;
