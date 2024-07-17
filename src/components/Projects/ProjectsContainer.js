import React, { useState, useEffect } from 'react';
import Project from './Project'
import projectsData from '../../data/projects.json'

function Projects({ isActive }) {

    const [ visibleProjectsCount, setVisibleProjectsCount ] = useState(2);

    useEffect(() => {
        if (!isActive) {
            setVisibleProjectsCount(2);
        }
    }, [isActive])

    const loadMoreProjects = () => {
        setVisibleProjectsCount(prevCount => Math.min(prevCount + 2, sortedProjects.length));
    }

    if (!isActive) {
        return null
    }

    const sortedProjects = projectsData.sort((a, b) => b.id - a.id);
    
    return (
        <div className='Projects'>
            <h1>latest_projects:</h1>
            {sortedProjects.slice(0, visibleProjectsCount).map(project => <Project key={project.id} data={project} />)}
            {visibleProjectsCount < sortedProjects.length && (
                <button type='button' onClick={loadMoreProjects} className='btn'>Older</button>
            )}
        </div>
    )
}

export default Projects;
