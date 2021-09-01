import React from 'react';
import NavLinks from './NavLinks';
import Hamburger from '../Hamburger/Hamburger';
const Navbar = () => {
  return (
    <nav>
      <Hamburger />
      <NavLinks />
    </nav>
  )
}

export default Navbar
