// src/components/Testimonials.jsx
import React from 'react'
import '../styles/Testimonials.css'
import man from '../assets/icons/man.png'
import woman from '../assets/icons/woman.png'

const testimonials = [
    {
        id: 1,
        name: 'Niccolò Miranda',
        profession: 'Creative Director, Interactive Designer & Developer',
        company: 'Freelancer Inc.',
        image: man,
        text: `Niccolò Miranda is a Creative Director, Interactive Designer & Developer currently based in Amsterdam. As a multidisciplinary freelancer, he pairs a broad range of creative leadership experience in art direction, UI/UX design, front-end development, and motion design to help companies and agencies around the world achieve their goals.`,
    },
    {
        id: 2,
        name: 'Jane Doe',
        profession: 'Senior UX Researcher',
        company: 'Acme Co.',
        image: woman,
        text: `Jane’s user-first mindset helped us triple our task-completion rates. She ran deep research, synthesized insights, and led wireframing sessions that turned into the final polished flows you see in our app today.`,
    },
    // …add more testimonials here
]

export default function Testimonials() {
    return (
        <div className="testimonialWrapper" >
        <div className="TestimonialsMain">
            <h2 className="TestimonialIntro">Hear It From others</h2>
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
