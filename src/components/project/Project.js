import { useState } from 'react';
import ProjectList from "./ProjectList";
import ContributedList from './ContributedList';
import { projectList, contributedList } from "../../utils/data";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Button } from "@mui/material";


const Project = () => {
  const [ toggle, setToggle ] = useState(false);


  const { ref, inView } = useInView();


  return (
    <Box id="projects" sx={{ width: '100%'}}>
      <Box sx={{ textAlign: 'center', mb: 5}}>
        <Typography variant="h2" ref={ref}>
          Projects
        </Typography>
        
        <Button 
          variant={`${!toggle ? "contained" : "outlined"}`}
          color="secondary" 
          sx={{mr: 2, mt: 4}}
          onClick={() => setToggle(false)}>
          Personal Projects
        </Button>

        <Button 
        variant={`${toggle ? "contained" : "outlined"}`}
        color="secondary"
        sx={{
          mt: 4, 
      
        }}
        onClick={() => setToggle(true)}>
          Contributed Projects
        </Button>
  
      </Box>

      {!toggle ? 
      
      (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflowX: 'hidden'}}>
            <ProjectList projects={projectList} />
        </Box>
      ): 
      (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflowX: 'hidden'}}>
            <ContributedList projects={contributedList} />
        </Box>

      )}
      

      


      

      
    </Box>
  );
};

export default Project;
