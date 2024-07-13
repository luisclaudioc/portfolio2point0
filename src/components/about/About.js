import React from 'react';

function About({ isActive }) {

    if (isActive !== "About") {
        return null
    }

    return (
    <div className='About'>
        <img alt="self portrait" src='/images/self-portrait.jpg'/>
        <div>
            <h1>more_about_me:</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."</p>
        </div>
    </div>
    );
}

export default About;
