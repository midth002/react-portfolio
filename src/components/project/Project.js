
import ProjectList from "./ProjectList";
import { projectList } from "../../utils/data";
import { useInView } from "react-intersection-observer";
import { Box, Container, Typography } from "@mui/material";


const Project = () => {

  const { ref, inView } = useInView();

  return (
    <Container id="projects" sx={{ width: '100%', mb: 10}}>
      <Box sx={{ textAlign: 'center'}}>
        <Typography variant="h2" ref={ref}>
          Projects
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflowX: 'hidden'}}>
      
        <ProjectList projects={projectList} />
       
      </Box>
    </Container>
  );
};

export default Project;
