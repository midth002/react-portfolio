import "./projectList.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { GitHub, OpenInBrowser } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  Stack,
  Box,
  IconButton,
  Tooltip,
  Paper
} from "@mui/material";

const ProjectList = ({ projects }) => {
  const { ref, inView } = useInView();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Grid
      ref={ref}
      container
      spacing={4}
      sx={{ justifyContent: "center", p: 5 }}
    >
      {projects.map((project) => (
        
          <Grid item xs={10}  md={6} sx={{ justifyContent: "center" }}>


          <Paper 
          ref={ref}
        className="project-paper"
        style={{ 
          backgroundImage: `url(${project.image})`, 
          height: '350px',
          boxShadow: `0 6px 12px 0 #233554`, 
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          
          }}>

             

              <Box
                sx={{
                  backgroundImage: `linear-gradient(to right bottom, #112240, #004a6e, #007695, #00a4b0, #3bd3bd);`,
                  color: "white",
                  position: 'relative',
                  top: '85%', 
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="subtitle"
                  sx={{ fontSize: 15, fontWeight: 800 }}
                >
                  {project.title}
                </Typography>
              
                <List component={Stack} direction="row" sx={{ px: 2, pb: 0 }}>
                  {project.tools.map((p) => (
                    <ListItem
                      sx={{
                        fontSize: 12,
                        flexWrap: "nowrap",
                        display: "flex",
                        justifyContent: "center",
                        color: "grey",
                        borderRadius: 2,
                        textAlign: "center",
                        padding: 0.5,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "oblique",
                          fontSize: 12,
                          color: "#fffff",
                        }}
                      >
                        {p}
                      </Typography>
                    </ListItem>
                  ))}
                </List>

                </Box>
            </Paper>
          </Grid>
       
      ))}
    </Grid>
  );
};

export default ProjectList;
