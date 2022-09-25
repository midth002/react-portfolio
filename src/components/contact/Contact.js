import { useState } from "react";
import "./contact.css";
import { Box, Button, Stack, Typography, Link, Tooltip, IconButton, Paper } from "@mui/material";
import { GitHub, OpenInBrowser } from "@mui/icons-material";
import { ArrowCircleUp } from "@mui/icons-material";
import mountain from '../../assets/images/mountain-background.jpeg';


const backgroundHead = {
  backgroundImage: 'url('+ mountain+')'
  }





const Contact = () => {

  const [ hover, setHover ] = useState(false); 




  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", my: 3 }}
      id="contact-me"
    >
      <Stack
        spacing={4}
        sx={{ justifyContent: "center", width: "40%", textAlign: "center" }}
      >
        <Typography variant="h3">Get In Touch</Typography>
        <Box>
          <Link
            href="mailto: midthun23@gmail.com"
            className="email-link"
            underline="hover"
          >
            midthun23@gmail.com
          </Link>
        </Box>

        <Box>
          <Typography variant="p">
            I am currently looking for a new opportunity. Whether you want to
            email me questions or connect with me, I will try my best to get
            back to you!
          </Typography>
        </Box>

        <Button variant="outlined">
          <Link href="mailto: midthun23@gmail.com" underline="none">
            Say Hello
          </Link>
        </Button>
        <Box>
          <Typography variant="p">
            <Link
              href="https://github.com/midth002/react-portfolio"
              underline="hover"
            >
              Designed and Built by Andrew Midthun
            </Link>
          </Typography>

          <Tooltip
          title="Back to the top"
          placement="right"
          sx={{ml:1}}
        >
        <IconButton>
          <ArrowCircleUp fontSize="large" sx={{color: '#3bd3b0'}}/>
        </IconButton>
          
        </Tooltip>

        </Box>
        
        <Paper 
        className="project-paper"
        style={{ backgroundImage: `url(${mountain})`, height: '500px' }}>
            
       
        <Typography color="white" variant="p" className="project-paper-content">This section will include short description for each project</Typography>

        <Stack spacing={1} direction="row" sx={{ display: 'flex', jusitfyContent: 'center'}} className="project-paper-links">
          <Button
            variant="contained"  
            endIcon={<GitHub />} 
          >
          Github
          </Button>
          <Button
             variant="contained"  
              endIcon={<OpenInBrowser />} 
          >Link</Button>
        </Stack>
       

        </Paper>


        <Paper 
      
      className="project-paper"
      style={{ backgroundImage: `url(${mountain})`, height: '500px' }}>
          
     
      <Typography color="white" variant="p" className="project-paper-content">This section will include short description for each project</Typography>

      <Stack spacing={1} direction="row" sx={{ display: 'flex', jusitfyContent: 'center'}} className="project-paper-links">
        <Button
          variant="contained"  
          endIcon={<GitHub />} 
        >
        Github
        </Button>
        <Button
           variant="contained"  
            endIcon={<OpenInBrowser />} 
        >Link</Button>
      </Stack>
     

      </Paper>


        

        
      </Stack>
    </Box>
  );
};

export default Contact;
