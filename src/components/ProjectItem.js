import React from 'react';
import { useHistory } from 'react-router-dom';

const ProjectItem = ({ image , name , id }) => {
  
  const history = useHistory();

  return (
    <div 
        className='projectItem' 
        onClick={() => {
            history.push(`/project/${id}`);
        }}
          >
        <div className='bgImage' style={{backgroundImage: `url(${image})`}} />
        <h1> { name } </h1>
    </div>
  )
}

export default ProjectItem;