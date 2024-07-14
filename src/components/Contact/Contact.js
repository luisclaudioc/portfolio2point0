import React from 'react';
import { ContactForm } from './ContactForm'

function Contact({ isActive }) {

    if (isActive !== "Contact") {
        return null
    }
    
    return (
        <>
            <div className='Contact'>
                <div className='contact-one'>
                    <div>
                        <h1>my_contact_info:</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='google.com' className="link" target="_blank">LinkedIn</a>, <a href='google.com' className="link" target="_blank">GitHub</a> or <a href='google.com' className="link" target="_blank">Instagram</a></p>
                    </div>
                    <div className='contact-info'>
                        <p>+351 938 349 977</p>
                        <p>luisclaudioc@hotmail.com</p>
                        <p>rua cidade de cardiff 17 r/c</p>
                        <p>1170-094, lisboa, pt</p>
                    </div>
                </div>
                <ContactForm />
            </div>

            <div style={{opacity: 0}}>.</div>
        </>
    )
}

export default Contact;
