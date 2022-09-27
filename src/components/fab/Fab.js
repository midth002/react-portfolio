import React from "react";
import "./fab.scss"
import { Fab, Stack, Box, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const FabLinks = () => {
  return (
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
                    // bgcolor: '#249c80',
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
                    // bgcolor: '#249c80',
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
  );
};

export default FabLinks;
