import { useRef } from "react";
import { useIntersection } from 'react-use';
import { gsap } from "gsap";
import { GitHub, OpenInBrowser } from "@mui/icons-material";
import {
  Grid,
  Typography,
  List,
  ListItem,
  Stack,
  Box,
  Paper,
  Button,
} from "@mui/material";
import "./projectPaper.css";

 

const ContributedList = ({ projects }) => {

  const projectRef = useRef(null);

  const intersection = useIntersection(projectRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out", 
      stagger: {
        amount: 0.3
      }
    });
  };

  // Animation for fading out 
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out", 
      stagger: {
        amount: 0.7
      }
    });
  };

  // Checking to see when the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
  ? fadeOut(".fadeIn-project")
  : fadeIn(".fadeIn-project")



  return (
    <Grid
      container
      spacing={3}
      sx={{ my: 5, justifyContent: 'center'}}
      ref={projectRef}
    >

 

    { projects.map((project, i) => (
      <Grid 
      item 
      key={i}
      xs={11}
      md={8}
      lg={5}
     
      sx={{
        width: '100%',
        height: 400,
        justifyContent: 'center',
        
     }} 
      
      >
      <Paper
       className="contributed-paper fadeIn-project"
       elevation={3}
       sx={{
         backgroundImage: `url(${project.image})`,
         height: "100%",
         boxShadow: `0 6px 12px 0 #233554`,
         backgroundSize: "100% 100%",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         
       }}
     > 
     
     <Stack
         spacing={1}
         sx={{ display: "flex", jusitfyContent: "center" }}
         className="project-paper-content"
       >
         <Typography color="white" variant="body1" sx={{px: 5}}>
           {project.description}
         </Typography>

         <List component={Stack} direction="row" sx={{ px: 2, pb: 0 }}>
           {project.tools.map((p) => (
             <ListItem
               sx={{
                 fontSize: 12,
                 flexWrap: "nowrap",
                 display: "flex",
                 justifyContent: "center",
                 color: "#cbd0e4",
                 borderRadius: 2,
                 textAlign: "center",
                 padding: 0.5,
               }}
             >
               <Typography
                 variant="body1"
                 sx={{
                   fontStyle:
                     '"SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"',
                   fontSize: 16,

                   color: "#fffff",
                 }}
               >
                 {p}
               </Typography>
             </ListItem>
           ))}
         </List>

         <Box sx={{ display: "flex", justifyContent: "center" }}>
           
           <Button
             href={project.url}
             target="_blank"
             sx={{
               bgcolor: "#233554",
               "&:hover": {
                 bgcolor: "#9198e5",
               },
             }}
             variant="contained"
             endIcon={<OpenInBrowser />}
           >
             Link
           </Button>
         </Box>
       </Stack>

       <Box
         sx={{
           backgroundImage: `linear-gradient(to right bottom, #e66465, #9198e5);`,
           color: "white",
           position: "relative",
           top: "88%",
           py: 1.5,
           textAlign: "center",
           width: "100%",
          
         }}
       >
         <Typography
           variant="subtitle"
           sx={{ fontSize: 15, fontWeight: 800 }}
         >
           {project.title}
         </Typography>
       </Box>    
     
     </Paper>
     </Grid>
    ))}
     
    </Grid>
  );
};

export default ContributedList;
