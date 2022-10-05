import { useState, useEffect, useRef } from 'react';
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


function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
        setVisible(entry.isIntersecting);
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <Grid item xs={12} md={4} lg={5} sx={{ display: 'flex', justifyContent: 'center'}}
    ref={domRef}
    className={`fade-in-section-right ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
   </Grid>
  );
}





const ProjectList = ({ projects }) => {


 

  return (
    <Grid
      
      container
      spacing={4}
      sx={{ justifyContent: "center",  my: 8}}
    >
      {projects.map((project) => (
        <FadeInSection>
          <Box 
          sx={{
              width: 500,
              height: 350,
              position: 'relative',
              '@media (max-width: 500px)' : {
                    width: 300
                    } 
          }}>
          <Paper
           
            className="project-paper"
            elevation={3} 
            sx={{
              backgroundImage: `url(${project.image})`,
              height: '100%',
              boxShadow: `0 6px 12px 0 #233554`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat",
            }}
          >
            <Stack
              spacing={1}
              sx={{ display: "flex", jusitfyContent: "center" }}
              className="project-paper-content"
            >
              <Typography color="white" variant="body1">
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
                      color: '#cbd0e4',
                      borderRadius: 2,
                      textAlign: "center",
                      padding: 0.5,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: '"SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"',
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
                  href={project.github}
                  target="_blank"
                  sx={{
                    mr: 2,
                    bgcolor: "#233554",
                    "&:hover": {
                      bgcolor: "#3bd3b0",
                    },
                  }}
                  variant="contained"
                  endIcon={<GitHub />}
                >
                  Github
                </Button>
                <Button
                  href={project.url}
                  target="_blank"
                  sx={{
                    bgcolor: "#233554",
                    "&:hover": {
                      bgcolor: "#3bd3b0",
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
                backgroundImage: `linear-gradient(to right bottom, #112240, #004a6e, #007695, #00a4b0, #3bd3bd);`,
                color: "white",
                position: "relative",
                top: "87%",
                py: 1.5,
                textAlign: "center",
                width: "40%",
                borderTopRightRadius: "10px",
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
          </Box>
        </FadeInSection>
      ))}
    </Grid>
  );
};

export default ProjectList;
