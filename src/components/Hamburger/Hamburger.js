import React, { useState } from 'react';
import './hamburger.css';

const Hamburger = ({ isOpen, setOpen}) => {
  const handleOpenBurgerMenu = () => isOpen ? setOpen(false) : setOpen(true);
  
  return (
    <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={() => handleOpenBurgerMenu()}>
      <div className="menu-btn__hamburger">
      </div>
    </div>
  )
}

export default Hamburger
