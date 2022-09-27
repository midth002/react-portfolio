import { useInView } from "react-intersection-observer";
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

const ProjectList = ({ projects }) => {
  const { ref, inView } = useInView();

 

  return (
    <Grid
      ref={ref}
      container
      spacing={4}
      sx={{ justifyContent: "center", width:'100%', mb: 5}}
    >
      {projects.map((project) => (
        <Grid item xs={12} md={4} lg={5} sx={{ width: '100%'}}>
          <Box 
          sx={{
              width: '100%',
              height: 400,
          }}>
          <Paper
            ref={ref}
            className="project-paper"
            elevation={3} 
            style={{
              backgroundImage: `url(${project.image})`,
              height: '100%',
              boxShadow: `0 6px 12px 0 #233554`,
              backgroundSize: 'cover',
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
                width: "35%",
                
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
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
