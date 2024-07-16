import React from 'react';

function ProjectDescription({ name, description, technologies, live, github }) {

    return (
        <div className='project-info'>
            <h2>{name}</h2>
            <div style={{display: "flex", flexWrap: "wrap", marginLeft: "-3px"}}>
                    {technologies.map((tech, index) => <div className='tech green' key={index}>{tech}</div>)}
            </div>
            <p className='description'>{description}</p>
            <div style={{display: "flex", marginLeft: "-3px"}}>
                {live ? <div className='btn'><a href={live} target='_blank' rel="noopener noreferrer">Live</a></div> : ""}
                {github ? <div className='btn'><a href={github} target='_blank' rel="noopener noreferrer">Github</a></div> : ""}
            </div>
        </div>
    )
}

export default ProjectDescription;
