// src/components/Testimonials.jsx
import React from 'react'
import '../styles/Testimonials.css'
import man from '../assets/icons/man.png'
import woman from '../assets/icons/woman.png'

//placeholder 
const testimonials = [
    {
        id: 1,
        name: 'Nabil Si Hammou',
        profession: 'Chief Innovation Officer',
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
    // …add more testimonials here
]

export default function Testimonials() {
    return (
        <div className="testimonialWrapper" >
            <div className="TestimonialsMain">
                <div>
                    <h1>Testimonials</h1>
                    <h2 className="TestimonialIntro">What Others Say About Mouad</h2>
                </div>
            {testimonials.map(({ id, name, profession, company, image, text }) => (
                <div key={id} className="singleTestimonialWrapper">
                    <div className="testimonialCard">
                        <div className="testimonialHeader">
                            <div className="profile">
                                <img src={image} alt={name} className="profileImg" />
                                <div className="profileInfo">
                                    <span className="name">{name}</span>
                                    <span className="profession">{profession}</span>
                                </div>
                            </div>
                            <span className="company">{company}</span>
                        </div>
                        <p className="testimonialText">{text}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
