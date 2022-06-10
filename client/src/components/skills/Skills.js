import React from 'react';
import { useState } from 'react';
import "./skills.scss"; 
import topBun from "../../assets/images/top-bun.png";
import middle from "../../assets/images/middle-stack.png";
import bottomBun from "../../assets/images/bottom.png";
import burger from "../../assets/images/new-burger-icon.png";
import frontEndComputer from "../../assets/images/new-comp-icon.png";
import { frontEndArray, tools, backend } from "../../utils/tools.js";
import { faBluetooth } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faHtml5, faCss3, faBootstrap, faAngular, faJava, faNodeJs, faPython  } from "@fortawesome/free-brands-svg-icons"
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
    <div className="row skills-circle">
    

    {!changeList ? 
      
      <>

      <button onClick={handleClick}>Switch to Backend</button>
      <h4>Front-End</h4>
          <img src={frontEndComputer} />
        <FontAwesomeIcon className="deg0 icon" icon={faJs} />
        <FontAwesomeIcon className="deg45 icon" icon={faReact} />
        <FontAwesomeIcon className="deg135 icon" icon={faHtml5} />
        <FontAwesomeIcon className="deg180 icon" icon={faCss3} />
        <FontAwesomeIcon className="deg225 icon" icon={faBootstrap} />
        <FontAwesomeIcon className="deg315 icon" icon={faAngular} />
        </>
        : 
        <>
          <h4>Back-End</h4>
          <button onClick={handleClick}>Switch to Backend</button>
        </>
    }
    </div>
  </div>
  </div>
  )
}

export default Skills;