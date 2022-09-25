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
                 sx={{
                    // bgcolor: '#249c80',
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
