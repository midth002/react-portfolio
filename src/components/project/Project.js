import { useState } from "react";
import ProjectList from "./ProjectList";
import "./project.scss";
import { projectList } from "../../utils/data";
import { useInView } from "react-intersection-observer";
import { Box, Stack } from "@mui/material";


const Project = () => {

  const { ref, inView } = useInView();

  return (
    <Box className="projects" id="projects" sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      <Box className="project-title-container">
        <h1 ref={ref} className={inView ? "project-title" : ""}>
          Projects
        </h1>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
      
        <ProjectList projects={projectList} />
       
      </Box>
    </Box>
  );
};

export default Project;
