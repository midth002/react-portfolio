import React, { useState } from 'react';
import "./skills.scss"; 
// import { frontend, tools, backend } from "../../utils/tools";
 



 const SkillsList = ({skills}) => {

   const [ skillList, setSkillList ] = useState('');
 
    const getFrontend = (frontend) => {
        frontend.map((front) => {
            setSkillList(front)
        })
        return skillList;
    }

    const gettools = (tools) => {
        tools.map((tool) => {
            setSkillList(tool)
        })
        return skillList;
    }

    const getBackend = (backend) => {
        backend.map((back) => {
            setSkillList(back)
        })
        return skillList;
    }

  return (
    <div>
        <ul></ul>
    </div>
  )
}

export default SkillsList;