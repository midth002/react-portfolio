import { useState, useEffect } from 'react';
import { Fab, Stack, Box, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const FabLinks = () => {


    const [fab, setFab] = useState(false);
    const [width, setWidth] = useState(false);

    const getScreenSize = () => {
        setWidth(window.innerWidth);
      };




      useEffect(() => {
    
        // Call handler right away so state gets updated with initial window size
        window.addEventListener("resize", getScreenSize);
      }, []);

     
      console.log(width)



  return (
    <>

    { width > 982 && 

        <Box
        sx={{
            position: "fixed",
            top: '35%',
            width: '6%',
            pl: 2
        }}>
      <Stack spacing={2}>
        <Tooltip title="Github Profile" placement="right">
            <Fab 
                color="primary"
                size="medium"
                href="https://github.com/midth002"
                target="_blank"
                sx={{
                    bgcolor: '#233554', 
                    '&:hover': {
                        bgcolor: '#3bd3b0'
                    }

                }}
            >
                <GitHub />
            </Fab>
        </Tooltip>

        <Tooltip title="LinkedIn Profile" placement="right">
            <Fab  
            color="primary"
            size="medium"
            href="https://www.linkedin.com/in/andrew-midthun/"
            target="_blank"
                 sx={{
                    bgcolor: '#233554', 
                    '&:hover': {
                        bgcolor: '#3bd3b0'
                    }

                }}
            >
                <LinkedIn />
            </Fab>
        </Tooltip>
       
       <Tooltip title="Email Me" placement="right">
             <Fab 
             color="primary"
             size="medium"
             href={`mailto:midthun23@gmail.com`}
                 sx={{
                    bgcolor: '#233554', 
                    '&:hover': {
                        bgcolor: '#3bd3b0'
                    }


                }}
             >
                <Email />
            </Fab>
        </Tooltip>
      </Stack>
    </Box>





    }
  
    </>
  );
};

export default FabLinks;
