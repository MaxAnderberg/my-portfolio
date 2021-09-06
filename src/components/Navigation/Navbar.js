import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import Hamburger from '../Hamburger/Hamburger';
import './Navbar.scss';
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='navbar-container'>
      <Hamburger isOpen={isOpen} setOpen={setOpen}/>
      <DropdownMenu isOpen={isOpen}/>
    </nav>
  )
}

export default Navbar
