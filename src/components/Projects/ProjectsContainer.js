import React from 'react';
import Project from './Project'

function Projects({ isActive }) {

    if (isActive !== "Projects") {
        return null
    }
    
    return (
        <div className='Projects'>
            <h1>latest_projects:</h1>
            <Project />
            <button type='button' className='btn'>Older</button>
        </div>
    )
}

export default Projects;
