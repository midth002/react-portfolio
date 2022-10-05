import { useState, useRef, useEffect } from "react";
import me from "../../assets/images/LinkedInPicture2.jpg";
import { Box, Typography, Grid, Container } from "@mui/material";

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
    <Grid
      container
      spacing={1}
      id="about-me"
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      sx={{
        my: 5,
        overflowX: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      ref={domRef}
    >
      {props.children}
    </Grid>
  );
}

const About = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <FadeInSection>
        <Grid item md={6} xs={10} lg={6}>
          <Typography variant="h2" sx={{ mt: 2 }}>
            About Me
          </Typography>

          <Typography sx={{ mt: 2 }}>
            I am a full stack software developer bringing knowledge across all
            stacks. I have experience as a IT support specialist so I have a
            jack of all trades. I am passionate about being a problem solver and
            what technology can do for our future. I have always enjoyed coding
            in my experience as I love the challenging aspects it can bring.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            With a degree in Management Information Systems from the University
            Of Minnesota, I have gained knowledge not only in the technology
            world, but as well as the business world. I have been working on web
            development projects since 2017.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Aside from being a developer, I love getting outside and doing
            activities like hiking, biking, golfing and getting on the water for
            some fun. I am passionate about my work, but also a team member
            first. I always strive for the team succeed with having a positive
            attitude and being able to have high interpersonal skills.
          </Typography>
        </Grid>

        <Grid
          item
          md={4}
          lg={4}
          xs={8}
          sx={{ display: "flex", alignItems: "center", m: 5 }}
        >
          <Box
            component="img"
            src={me}
            sx={{
              width: "75%",
              height: "auto",
              ":before": {
                backgroundColor: "rgba(59, 211, 176, 0.40)",
                content: '""',
                display: "block",
                height: "100%",
                position: "absolute",
                width: "100%",
              },
              backgroundColor: "rgba(59, 211, 176, 0.8)",
            }}
          />
        </Grid>
      </FadeInSection>
    </Container>
  );
};

export default About;
