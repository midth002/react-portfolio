import React from 'react';
import './hamburger.scss';

const hamburger = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
    <div className={'mobile ' + (menuOpen && 'active')}>

    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
    </div>
    </div>
    </>
  )
}

export default hamburger