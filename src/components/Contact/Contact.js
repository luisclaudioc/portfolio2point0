import React from 'react';
import { ContactForm } from './ContactForm'

function Contact({ isActive }) {

    if (!isActive) {
        return null
    }
    
    return (
        <>
            <div className='Contact'>
                <h1>my_contact_info:</h1>
                <p><a className='link' href='tel:+351938349977'>+351 938 349 977</a></p>
                <p><a className='link' href='mailto:luisclaudioc@hotmail.com'>luisclaudioc@hotmail.com</a></p>
                <p>rua cidade de cardiff 17 r/c</p>
                <p style={{marginBottom: "20px"}}>1170-094, lisbon, portugal</p>
                <ContactForm />
                <h1>my_social_media:</h1>
                <p>Connect with me on <a href='google.com' className="link" target="_blank">LinkedIn</a>, <a href='google.com' className="link" target="_blank">GitHub</a> or <a href='google.com' className="link" target="_blank">Instagram</a></p>
            </div>

            <div style={{opacity: 0}}>.</div>
        </>
    )
}

export default Contact;
