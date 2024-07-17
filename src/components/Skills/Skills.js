import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faHtml5, faCss3Alt, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'; 

function Skills({ isActive }) {

    if (!isActive) {
        return null
    }

    library.add(faJs, faPython, faHtml5, faCss3Alt, faReact, faNodeJs);
    
    return (
        <div className='Skills'>
            <div>
                <h1>some_skills:</h1>
                <ul>
                    <li><strong>Programming Languages:</strong> JavaScript, Python</li>
                    <li><strong>Front-End Development:</strong> HTML, CSS, React, Redux, jQuery</li>
                    <li><strong>Back-End Development:</strong> Node.js, Express, MongoDB, PostgreSQL</li>
                    <li><strong>Data Analysis and Visualization:</strong> Numpy, Pandas, Data Visualization, D3.js</li>
                </ul>
            </div>
            <div className='icons'>
                <FontAwesomeIcon icon={faJs} size="4x" />
                <FontAwesomeIcon icon={faPython} size="4x" />
                <FontAwesomeIcon icon={faHtml5} size="4x" />
                <FontAwesomeIcon icon={faCss3Alt} size="4x" />
                <FontAwesomeIcon icon={faReact} size="4x" />
                <FontAwesomeIcon icon={faNodeJs} size="4x" />
            </div>
        </div>
    )
}

export default Skills;
