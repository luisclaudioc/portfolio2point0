import React from 'react';

function About({ isActive }) {

    if (isActive !== "About") {
        return null
    }

    return (
    <div className='About'>
        <div style={{margin: "20px"}}>
            <h1>more_about_me:</h1>
            <p>Hey there, I am a mechanical engineer, originally from Brazil, but currently based in Portugal. After years dedicated to a successful career managing industrial production, where my analytical and problem-solving skills were constantly tested, I found great passion in web and software development.</p>
            <p>Since 2023, I have dived deep into the world of development, mastering HTML, JavaScript, Node.js, React, Python, and more. I have built several personal projects, including a Fullstack app to track workout plans. You can find this one and many others in the next section of this website.</p>
            <p>Since I started, I have not stopped learning new technologies and creating new things. I am greatly moved by the prospect of understanding something I did not, and how things work. I am a great and fast learner. Also, I am fluent in English, taught myself Spanish, and I am now on my path to becoming fluent in German.</p>
            <p>When I am not coding or learning languages, I really enjoy playing volleyball, traveling, and trying new restaurants. I appreciate getting lost in good aspects of culture and letting my imagination flow. Feel free to explore my work, and do not hesitate to contact me!</p>
        </div>
        <img alt="self portrait" src='/images/self-portrait.jpg'/>
    </div>
    );
}

export default About;
