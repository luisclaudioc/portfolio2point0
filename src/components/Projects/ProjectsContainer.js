import React from 'react';

function Projects({ isActive }) {

    if (isActive !== "Projects") {
        return null
    }
    
    return <div className='Projects'>Projects Section: Junior Developer.</div>;
}

export default Projects;
