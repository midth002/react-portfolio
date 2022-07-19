import React from 'react';
import { useState } from 'react';
import "./skills.scss"; 

import backEnd from '../../assets/images/backend-icon.png';
import { frontEndArray, tools, backend } from "../../utils/tools.js";
import { faBluetooth } from '@fortawesome/free-solid-svg-icons';
import graphQl from '../../assets/icons/graphql.svg';
import mySQL from '../../assets/icons/mysql_icon.png';
import { faJs, faReact, faHtml5, faCss3, faBootstrap, faAngular, faJava, faNodeJs, faPython, faAws  } from "@fortawesome/free-brands-svg-icons"
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const Skills = () => {

    const [changeList, setChangeList ] = useState(false);

    const handleClick = () => {
      if (changeList) {
        setChangeList(false);
      } else {
        setChangeList(true);
      }
       
    }


  return (
    <div className="skills" id="skills">
    <div className="container">
    <div className='skills-title'>
      <h2>SKILLS</h2>
    </div>
{/* 
    {!changeList ? 
      <div className="message">
      <h6>Click the picture to change to <span>backend</span> skills.</h6>
      </div>
      :
      <div className='message'>
      <h6>Click the picture to change to <span>frontend</span> skills.</h6>
      </div>
    } */}
    <div className="row skills-circle">

  
    
    <div className="row">

 

    {!changeList ? 
      
      <>
     
      {/* <div className="iconPic" onClick={handleClick}>
          <img src={frontEnd} />
        </div> */}
        <div className="skills-section col"> 
        <div className="icon-div deg0 ">
        <FontAwesomeIcon className="icon" icon={faJs} />
        <span className="caption">Javascript</span>
        </div>
        <div className="icon-div deg45">
        <FontAwesomeIcon className="icon" icon={faReact} />
        <span className="caption">React</span>
        </div>
        <div className="icon-div deg135">
        <FontAwesomeIcon className="icon" icon={faHtml5} />
        <span className="caption row">HTML</span>
        </div>
        <div className="icon-div deg180">
        <FontAwesomeIcon className="icon" icon={faCss3} />
        <span className="caption row">CSS</span>
        </div>
        <div className="icon-div deg225">
        <FontAwesomeIcon className="icon" icon={faBootstrap} />
        <span className="caption row">Bootstrap</span>
        </div>
        <div className="icon-div deg315">
        <FontAwesomeIcon className="icon" icon={faAngular} />
        <span className="caption row">Angular</span>
        </div>
        <div className="icon-div deg45">
        <FontAwesomeIcon className="icon" icon={faJava} />
        <span className="caption">Java</span>
        </div>
        <div className="icon-div deg135">
        <FontAwesomeIcon className="icon" icon={faNodeJs} />
        <span className="caption row">NodeJs</span>
        </div>
        <div className="icon-div deg0 ">
        <FontAwesomeIcon className="icon" icon={faPython} />
        <span className="caption">Python</span>
        </div>
        <div className="icon-div deg0 ">
        <FontAwesomeIcon className="icon" icon={faAws} />
        <span className="caption">AWS</span>
        </div>
        </div>
        
        </>
       
        : 
        <>
          
        <div className="iconPic" onClick={handleClick}>
          <img src={backEnd} />
        </div>
        <div className="skills-section col"> 
        
       
        </div>

        </>
    }
    </div>
    </div>
  </div>
  </div>
  )
}

export default Skills;