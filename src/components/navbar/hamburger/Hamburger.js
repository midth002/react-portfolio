import React from 'react';
import './hamburger.scss';
import { Box } from '@mui/material'

const hamburger = ({ menuOpen, setMenuOpen }) => {
  return (
   
    <Box sx={{ display: 'flex', justifyContent: 'end'}} className={'mobile ' + (menuOpen && 'active' )}>

   

    <Box 
    className="hamburger"  
    onClick={() => setMenuOpen(!menuOpen)} >
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
    </Box>

    </Box>
   
   
  )
}

export default hamburger