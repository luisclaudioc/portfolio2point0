import React from 'react';

function ProjectDescription({ description, technologies, live, github }) {

    return (
        <div className='project-info'>
                <p>{description}</p>
                <h4>Technologies:</h4>
            <div style={{display: "flex"}}>
                {technologies.map((tech, index) => <div className='btn' key={index}>{tech}</div>)}
            </div>
            <h4>Links:</h4>
            <div style={{display: "flex"}}>
                {live ? <div className='btn'><a href={live}>Live</a></div> : ""}
                {github ? <div className='btn'><a href={github}>Github</a></div> : ""}
            </div>
        </div>
    )
}

export default ProjectDescription;
