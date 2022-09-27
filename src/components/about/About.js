import React from 'react';
import me from "../../assets/images/LinkedInPicture2.jpg";

import { Box, Typography, Button, Grid, Container} from '@mui/material';

const About = () => {
  return (
    <Container>
    <Grid container spacing={1} id='about-me' sx={{ my: 5, overflowX: 'hidden', width: '50%' }}>

        <Grid item md={6} xs={10} lg={6}>
              <Typography variant="h2">About Me</Typography>
            
            <Typography>
                I am a aspiring software developer. I have experience as a IT support specialist so I have a jack of all trades. I am passionate about being a problem solver and what technology can do for our future. I have always enjoyed coding in my experience as I love the challenging aspects it can bring.  
            </Typography>
  
        </Grid>

        <Grid item md={4} lg={4} xs={8}>
        <Box 
            component="img"
          
            src={me}
            sx={{
              
              width: '75%',
              height: 'auto',
              ':before' : {
                backgroundColor: 'rgba(59, 211, 176, 0.40)',
                content: '""',
                display: 'block',
                height: '100%',
                position: 'absolute',
                width: '100%',
              },
              backgroundColor: 'rgba(59, 211, 176, 0.8)'
            }}
          />
        </Grid>
        
    
     

        


         
 
    </Grid>
    </Container>
  )
}

export default About;