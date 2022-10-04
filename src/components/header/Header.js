import "./header.scss";
import { Box } from '@mui/material';
import headerImg from '../../assets/images/mountain-background.webp'

const Header = () => {
  return (
    <Box id="header" className="jumbotron"
   
    >
      <Box class="title">
        <p>Hello, my name is</p>
        <h2 id="name">Andrew Midthun.</h2>
        <h2 className="details-me">I'm a full stack developer.</h2>
      </Box>
    </Box>
  );
};

export default Header;
