import React from 'react';
import { projectList } from '../../utils/data';
import { useState, useEffect } from 'react';
import "./projectList.scss";

const ProjectList = ({projects}) => {



  return (
    <div>
        {projects.map((project)=> 
            
            <div className="row">
            
                    <div className="col-md-5 description">
                    <h3>{project.title}</h3>
                        <p class="summary">{project.description}</p>
                        <div>
                        <ul>
                        {project.tools.map((p) => 
                            <li>{p}</li>
                        )}
                        </ul>
                        </div>
                        <div className="btn-link-div">
                            <a className="live-link" href={project.url}>Live Link</a>
                            <a className="github-repo" href={project.github}>Repo</a>
                        </div>
                    </div>
                    <div className='col image'>
                        <img src={project.image} />
                    </div>
            </div>
        )}
    </div>
  )
}

export default ProjectList