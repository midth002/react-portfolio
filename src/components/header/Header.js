import "./header.scss";
import "./divider.css";
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box id="header" className="jumbotron shapedividers_com-9923"
   
    >
      <Box className="title" sx={{justifyContent: 'left'}}>
        <Typography variant="p"  sx={{color: '#cbd0e4'}}>Hello, my name is</Typography>
        <h2 id="name">Andrew Midthun.</h2>
        <h2 className="details-me">I'm a full stack developer.</h2>
      </Box>
      
    </Box>
  );
};

export default Header;
