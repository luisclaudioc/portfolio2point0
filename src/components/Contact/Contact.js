import React from 'react';
import { ContactForm } from './ContactForm'

function Contact({ isActive }) {

    if (isActive !== "Contact") {
        return null
    }
    
    return (
        <>
            <div className='Contact'>
                <h1>my_contact_info:</h1>
                <p className='contact-data'>+351 938 349 977 - luisclaudioc@hotmail.com - rua cidade de cardiff 17 r/c 1170-094, lisbon, portugal</p>
                <ContactForm />
                <h1>my_social_media:</h1>
                <p>Connect with me on <a href='google.com' className="link" target="_blank">LinkedIn</a>, <a href='google.com' className="link" target="_blank">GitHub</a> or <a href='google.com' className="link" target="_blank">Instagram</a></p>
            </div>

            <div style={{opacity: 0}}>.</div>
        </>
    )
}

export default Contact;
