import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helper/ProjectList';

import "../styles/Project.css"

const Project = () => {
    return (
        <div className="projects" >
            <h1 className='projectTitle'>My Personal Projects</h1>
            <div className='projectList'>
                {
                    projectList.map((project) => {
                        return <ProjectItem 
                                    name={project.name} 
                                    image={project.image} 
                                    id={project.id}
                                    link={project.link}
                                     />
                    })
                }
            </div>
        </div>
    )
}

export default Project;