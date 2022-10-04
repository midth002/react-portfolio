import React from "react";
import "./skills.scss";
import aws from "../../assets/icons/aws-logo.webp";
import bootstrap from "../../assets/icons/bootstrap-logo.webp";
import css from "../../assets/icons/css-logo.webp";
import html from "../../assets/icons/HTML5-logo.webp";
import javascript from "../../assets/icons/JavaScript-logo.webp";
import materialUI from "../../assets/icons/material-ui.webp";
import mongoDB from "../../assets/icons/mongoDB-logo.webp";
import mySQL from "../../assets/icons/mySQL-logo.png";
import nextJS from "../../assets/icons/NextJS-logo.webp";
import nodeJS from "../../assets/icons/nodejs-logo.webp";
import react from "../../assets/icons/React-logo.webp";
import express from "../../assets/icons/express-logo.webp";
import sql from "../../assets/icons/sql-logo.webp";
import typescript from "../../assets/icons/typescript-logo.webp";
import { useInView } from "react-intersection-observer";
import { Box, Typography, Grow, Tooltip, Grid } from "@mui/material";

const Skills = () => {
  const { ref, inView } = useInView();

  const frontendItems = [
    {
      title: "Javascript",
      height: 60,
      width: 60,
      src: javascript,
    },
    {
      title: "HTML",
      height: 60,
      width: 60,
      src: html,
    },
    {
      title: "React",
      height: 60,
      width: 70,
      src: react,
    },
    {
      title: "CSS",
      height: 60,
      width: 45,
      src: css,
    },
    {
      title: "Typescript",
      height: 60,
      width: 60,
      src: typescript,
    },
  ];

  const backendItems = [
    {
      title: "NodeJS",
      height: 60,
      width: 75,
      src: nodeJS,
    },
    {
      title: "SQL",
      height: 60,
      width: 70,
      src: sql,
    },
    {
      title: "mySQL",
      height: 60,
      width: 70,
      src: mySQL,
    },
    {
      title: "MongoDB",
      height: 60,
      width: 80,
      src: mongoDB,
    },
    {
      title: "AWS",
      height: 60,
      width: 85,
      src: aws,
    },
  ];

  const toolItems = [
    {
      title: "Bootstrap",
      height: 60,
      width: 60,
      src: bootstrap,
    },
    {
      title: "Material-UI",
      height: 60,
      width: 85,
      src: materialUI,
    },
    {
      title: "NextJS",
      height: 60,
      width: 75,
      src: nextJS,
    },
    {
      title: "Node Express",
      height: 60,
      width: 95,
      src: express,
    },
  ];

  return (
   
      <Box ref={ref} id="skills" className={inView ? "container skills" : ""} sx={{ display: "flex", my: 10 }}>
        <Box
          ref={ref}
          className={inView ? "skills-title" : ""}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            mt: 5,
            mb: 5,
          }}
        >
          <h2>SKILLS</h2>
        </Box>

        <Box sx={{ width: "100%", mb: 5 }}>
          <Typography variant="h6">Front End</Typography>
        </Box>

        <Grid container spacing={1}  sx={{ mb: 5, justifyContent: 'center', width: '100%'}}>
          {frontendItems.map((item) => (
            <Grid item xs={4} md={2} lg={2}>
            <Tooltip title={item.title} arrow>
              <Grow
                in={inView}
                timeout={3000}
                style={{ transitionDelay: inView ? "250ms" : "0ms" }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.src}
                    sx={{
                      width: item.width,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.3)",
                      },
                    }}
                  />
                </Box>
              </Grow>
            </Tooltip>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ width: "100%", mb: 5 }}>
          <Typography variant="h6">Back End</Typography>
        </Box>

        <Grid container spacing={1} sx={{ mb: 5, justifyContent: 'center', width: '80%' }}>
          {backendItems.map((item) => (
            <Grid item xs={4} md={2}>
            <Tooltip title={item.title} arrow>
              <Grow
                in={inView}
                timeout={3000}
                style={{ transitionDelay: inView ? "1000ms" : "0ms" }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.src}
                    sx={{
                      width: item.width,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.3)",
                      },
                    }}
                  />
                </Box>
              </Grow>
            </Tooltip>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ width: "100%", mb: 5 }}>
          <Typography variant="h6">Frameworks</Typography>
        </Box>

        <Grid container spacing={1} sx={{ mb: 5, justifyContent: 'center', width: '80%' }}>
          {toolItems.map((item) => (
            <Grid item xs={4} md={2}>
            <Tooltip title={item.title} arrow>
              <Grow
                in={inView}
                timeout={3000}
                style={{ transitionDelay: inView ? "2000ms" : "0ms" }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.src}
                    sx={{
                      width: item.width,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.3)",
                      },
                    }}
                  />
                </Box>
              </Grow>
            </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default Skills;
