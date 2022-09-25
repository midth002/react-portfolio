import React from 'react';
import './hamburger.scss';

const hamburger = ({ menuOpen, setMenuOpen }) => {
  return (
   
    <div className={'mobile ' + (menuOpen && 'active')}>

    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
    </div>
    </div>
   
  )
}

export default hamburger