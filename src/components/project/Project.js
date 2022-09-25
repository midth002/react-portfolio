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
      <div className="project-title-container">
        <h1 ref={ref} className={inView ? "project-title" : ""}>
          Projects
        </h1>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '93%'}}>
      <Stack direction="row" spacing={2}>
        <ProjectList projects={projectList} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Project;
