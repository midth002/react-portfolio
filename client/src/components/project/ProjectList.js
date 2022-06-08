import React from 'react';
import { projectList } from '../../utils/data';
import { useState, useEffect } from 'react';

const ProjectList = ({projects}) => {

  return (
    <div>
        {projects.map((project)=> 
            <div className="row">
                    <div className='col item'>
                        <img src={project.image} alt=""/>
                    </div>
                    <div className="col description">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <li>{}
                        </li>
                    </div>
            </div>
        )}
    </div>
  )
}

export default ProjectList