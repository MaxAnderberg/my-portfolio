import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Hamburger from '../Hamburger/Hamburger';
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <Hamburger isOpen={isOpen} setOpen={setOpen}/>
      {isOpen ? <NavLinks /> : ''}
    </nav>
  )
}

export default Navbar
