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
  Zoom,
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
        <Zoom
          in={inView}
          timeout={1500}
          style={{ transitionDelay: inView ? "250ms" : "0ms" }}
        >
          <Grid item xs={10}  md={4} sx={{ justifyContent: "center" }}>
            <Card
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              sx={{
                width: "100%",
                justifyContent: "center",
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: `0 6px 12px 0 #233554`,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                height="250"
                sx={{ opacity: 0.7 }}
              />

              <CardContent
                sx={{
                  backgroundImage: `linear-gradient(to right bottom, #112240, #004a6e, #007695, #00a4b0, #3bd3bd);`,
                  color: "white",
                }}
              >
                <Typography
                  variant="subtitle"
                  sx={{ fontSize: 15, fontWeight: 800 }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 12 }}>
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
                        color: "grey",
                        borderRadius: 2,
                        // border: '2px solid white',
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

                <Box>
                  <Tooltip title="Github Repo">
                    <IconButton aria-label="Github Repo">
                      <GitHub />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Live Link">
                    <IconButton aria-label="Github Repo">
                      <OpenInBrowser />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Zoom>
      ))}
    </Grid>
  );
};

export default ProjectList;
