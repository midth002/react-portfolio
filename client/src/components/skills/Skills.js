import React from 'react';
import { useState } from 'react';
import "./skills.scss"; 
import topBun from "../../assets/images/top-bun.png";
import middle from "../../assets/images/middle-stack.png";
import bottomBun from "../../assets/images/bottom.png";
import { frontEndArray, tools, backend } from "../../utils/tools.js";

 const Skills = () => {

    const [ showList, setList ] = useState('');

    const handleClick = (event) => {
        const theTarget = event.target;
        setList(theTarget);
       
        console.log(frontEndArray);
    }


  return (
    <div className="skills" id="skills">
    <div className="container">
    <div>
      <h2 className="skills-title">SKILLS</h2>
    </div>
    <div className="row">
      <div className="col burger">
      <h4>Hover the burger image to display the full-stack skills.</h4>
       <div className="top-burger" onClick={handleClick} value={'frontend'}  >
          <img src={topBun} alt="top" />
      </div>
      <div className="middle-burger" value="tools">
        <img src={middle} alt="middle" />
      </div>
      <div className="bottom-burger" value="backend">
        <img src={bottomBun} alt="bottom" />
      </div>
      </div>
      <div className="col skills-list">

        <div className="icon-div">
        
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Skills;