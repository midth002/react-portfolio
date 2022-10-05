import "./header.scss";
import "./divider.css";
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box id="header" className="jumbotron shapedividers_com-9923"
   
    >
      <Box className="title ">
        <p>Hello, my name is</p>
        <h2 id="name">Andrew Midthun.</h2>
        <h2 className="details-me">I'm a full stack developer.</h2>
      </Box>
      
    </Box>
  );
};

export default Header;
