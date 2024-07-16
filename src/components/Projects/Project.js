import React from 'react';
import ProjectDescription from './ProjectDescription';


function Project({ data }) {

    return (
        <div className='Project'>
            <div style={{display: "flex", alignItems: "center"}}>
                <img alt={`${data.name} preview`} src={data.img} style={{width: "400px"}} />
                <ProjectDescription 
                    name={data.name}
                    description={data.description} 
                    live={data['live-link']} 
                    github={data['github-link']} 
                    technologies={data.technologies}
                />
            </div>
        </div>
    )
}

export default Project;
