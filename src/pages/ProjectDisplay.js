import React from 'react';
import { useParams } from "react-router-dom"
import { projectList } from '../helper/ProjectList';
//import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id];

    return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <p>
           <b> Technology Used: </b> {project.skills}
        </p>
        <a href={project.link} target='_blank'>
            {/* <GitHubIcon /> */}
            <button type='submit' > Get Code <span className='sp'>→</span> </button>
        </a>
    </div>
    )
}

export default ProjectDisplay;