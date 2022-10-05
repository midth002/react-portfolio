
import './contactDivider.css';
import {
  Box,
  Button,
  Stack,
  Typography,
  Link,
  Tooltip,
  IconButton,
 
} from "@mui/material";

import {Link as LinkToTop} from 'react-scroll';

import { ArrowCircleUp } from "@mui/icons-material";


const Contact = () => {
  

  return (
    <>

    <Box className="shapedividers_com-6970" sx={{ backgroundColor: '#495670', height: 200}}>

    </Box>



    <Box
      sx={{ display: "flex", justifyContent: "center", pb: 3, backgroundColor: '#495670'}}
      id="contact-me"
      className="shapedividers_com-2111"
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
            color="#3bd3b0"
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

        <Button variant="outlined" sx={{ borderColor: '#3bd3b0'}}>
          <Link href="mailto: midthun23@gmail.com" underline="none" color="white">
            Say Hello
          </Link>
        </Button>
        <Box>
          <Typography variant="p">
            <Link
              href="https://github.com/midth002/react-portfolio"
              underline="hover"
              color="#3bd3b0"
            >
              Designed and Built by Andrew Midthun
            </Link>
          </Typography>

          
          <LinkToTop
            to="header"
            className="navbar-brand logos"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            delay={500}
          >
           <Tooltip title="Back to the top" placement="right" sx={{ ml: 1 }}>
            <IconButton>
              <ArrowCircleUp fontSize="large" sx={{ color: "#3bd3b0" }} />
            </IconButton>
          
            </Tooltip>
          </LinkToTop>
          
         
        </Box>
      </Stack>
    </Box>
   

   </>
  );
};

export default Contact;
