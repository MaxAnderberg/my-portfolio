import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import Hamburger from '../Hamburger/Hamburger';
import NavLinks from './NavLinks';
import './Navbar.scss';
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='navbar-container'>
      <span className='logo'>
        &lt;max/&gt;
      </span>
      <div>
      </div>
      <div className='desktop'>
        <NavLinks />
      </div>
      <div className='mobile'>
        <Hamburger isOpen={isOpen} setOpen={setOpen}/>
        <DropdownMenu isOpen={isOpen}/>
      </div>

    </nav>
  )
}

export default Navbar
