import React from 'react';
import ProjectList from './ProjectList';
import { projectList } from '../../utils/data';

const Project = () => {
  return (
    <div className='projects' id='projects'>
        <h1>Projects</h1>
        <div className="container">
            <ProjectList projects={projectList}/>
        </div>
    </div>
 
  )
}

export default Project