
import ProjectList from "./ProjectList";
import { projectList } from "../../utils/data";
import { useInView } from "react-intersection-observer";
import { Box} from "@mui/material";


const Project = () => {

  const { ref, inView } = useInView();

  return (
    <Box  id="projects" sx={{overflowX: 'hidden', mb: 10}}>
      <Box className="project-title-container" sx={{ textAlign: 'center'}}>
        <h1 ref={ref} className={inView ? "project-title" : ""}>
          Projects
        </h1>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflowX: 'hidden'}}>
      
        <ProjectList projects={projectList} />
       
      </Box>
    </Box>
  );
};

export default Project;
