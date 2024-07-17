import React, { useState } from 'react';

export function ContactForm() {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        setName("");
        setEmail("");
        setMessage("");

        const xhr = new XMLHttpRequest();
        xhr.open("POST", e.target.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                alert("Form successfully submitted");
            } else {
                console.error("Form submission failed");
            }
        };
        xhr.send(formData);
    }
    
    return (
        <div className='contact-form'>
            <h1>contact_me_directly:</h1>
            <form action='https://getform.io/f/axojyonb' method='POST' onSubmit={handleSubmit}>
                <input name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='your name' required />
                <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='your email' required />
                <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='your message' required />
                <button type='submit' className='btn'>Send</button>
            </form>
        </div>
    )
}
