// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Testimonials.css';
import man from '../assets/icons/man.png';
import woman from '../assets/icons/woman.png';
const testimonials = [
    {
        id: 1,
        name: 'Nabil Si Hammou',
        profession: 'Creative Director, Interactive Designer & Developer',
        company: 'OCPA SA.',
        image: man,
        text: `Mouad's reliability and versatility were critical during tight deadlines. His innovative backend, DevOps, and AI solutions consistently surpassed our expectations.`,
    },
    {
        id: 2,
        name: 'Mayssoun Messaoudi',
        profession: 'Business Analysis Lead',
        company: 'OCPA SA.',
        image: woman,
        text: `Working with Mouad El Ammari has been exceptionally rewarding. His innovative use of overlooked data transformed our ETL and backend automation, significantly enhancing operational efficiency. His creativity and proactive problem-solving consistently delivered impressive results.`,
    },
    // �add more testimonials here
];
export default function Testimonials() {
    return (React.createElement("div", { className: "testimonialWrapper" },
        React.createElement("div", { className: "TestimonialsMain" },
            React.createElement("div", null,
                React.createElement("h1", null, "Testimonials"),
                React.createElement("h2", { className: "TestimonialIntro" }, "What Others Say About Mouad")),
            testimonials.map(({ id, name, profession, company, image, text }) => (React.createElement("div", { key: id, className: "singleTestimonialWrapper" },
                React.createElement("div", { className: "testimonialCard" },
                    React.createElement("div", { className: "testimonialHeader" },
                        React.createElement("div", { className: "profile" },
                            React.createElement("img", { src: image, alt: name, className: "profileImg" }),
                            React.createElement("div", { className: "profileInfo" },
                                React.createElement("span", { className: "name" }, name),
                                React.createElement("span", { className: "profession" }, profession))),
                        React.createElement("span", { className: "company" }, company)),
                    React.createElement("p", { className: "testimonialText" }, text))))))));
}
