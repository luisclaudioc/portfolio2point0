import React from 'react';
import ProjectDescription from './ProjectDescription';
import projectsData from '../../data/projects.json'


function Project() {

    const test = projectsData[0]

    return (
        <div className='Project'>
            <h2>{test.name}</h2>
            <div style={{display: "flex", alignItems: "center"}}>
                <img alt='project preview' src='/images/self-portrait.jpg' style={{width: "200px"}} />
                <ProjectDescription 
                    description={test.description} 
                    live={test['live-link']} 
                    github={test['github-link']} 
                    technologies={test.technologies}
                />
            </div>
        </div>
    )
}

export default Project;
