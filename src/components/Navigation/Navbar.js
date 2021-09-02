import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import Hamburger from '../Hamburger/Hamburger';
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <Hamburger isOpen={isOpen} setOpen={setOpen}/>
      <DropdownMenu isOpen={isOpen}/>
    </nav>
  )
}

export default Navbar
