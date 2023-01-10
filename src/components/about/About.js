import {  useRef } from "react";
import { useIntersection } from 'react-use';
import me from "../../assets/images/LinkedInPicture2.jpg";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";



const About = () => {

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out", 
      stagger: {
        amount: 0.2
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
        amount: 0.2
      }
    });
  };

  // Checking to see when the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.3
  ? fadeOut(".fadeIn")
  : fadeIn(".fadeIn")




  return (
    <Grid container spacing={2}  sx={{ mb: 10 , pt: 10, justifyContent: 'center'}}>
      
        <Grid item 
            xs={10} 
            lg={4}
            ref={sectionRef}>
          <Typography className="fadeIn" variant="h2" sx={{ mt: 2 }}>
            About Me
          </Typography>

          <Typography className="fadeIn" sx={{ mt: 2 }}>
            I am a full stack software developer bringing knowledge across all
            stacks. I have experience as a IT support specialist so I have a
            jack of all trades. I am passionate about being a problem solver and
            what technology can do for our future. I have always enjoyed coding
            in my experience as I love the challenging aspects it can bring.
          </Typography>

          <Typography className="fadeIn" sx={{ mt: 2 }}>
            With a degree in Management Information Systems from the University
            Of Minnesota, I have gained knowledge not only in the technology
            world, but as well as the business world. I have been working on web
            development projects since 2017.
          </Typography>

          <Typography className="fadeIn" sx={{ mt: 2 }}>
            Aside from being a developer, I love getting outside and doing
            activities like hiking, biking, golfing and getting on the water for
            some fun. I am passionate about my work, but also a team member
            first. I always strive for the team succeed with having a positive
            attitude and being able to have high interpersonal skills.
          </Typography>
        </Grid>

        <Grid 
          item 
          xs={10}
          lg={3} 
          ref={sectionRef}
          sx={{ display: "flex", alignItems: "center", m: 5 }}
        >
          <Box
            component="img"
            src={me}
            className="fadeIn" 
            sx={{
              width: 300,
              height: 300,
              borderRadius: '50%'
            }}
          />
        </Grid>
    
    </Grid>
  );
};

export default About;
