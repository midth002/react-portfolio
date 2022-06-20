import React from 'react';
import ProjectList from './ProjectList';
import './project.scss';
import { projectList } from '../../utils/data';


const Project = () => {

  console.log(projectList)

  return (
    <div className='projects' id='projects'>
      <div><h1>Projects</h1></div>
        
        <div className="container">
            <ProjectList projects={projectList}/>
        </div>
    </div>
 
  )
}

export default Project