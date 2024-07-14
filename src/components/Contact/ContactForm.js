import React, { useState } from 'react';

export function ContactForm() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    }
    
    return (
        <div className='contact-form'>
            <h1>contact_me_directly:</h1>
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='your name' />
                <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='your email' />
                <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='your message' />
                <button type='submit' className='btn'>Send</button>
            </form>
        </div>
    )
}
