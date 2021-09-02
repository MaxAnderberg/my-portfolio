import React, { useState } from 'react';
import DrowdownMenu from './DropdownMenu/DropdownMenu';
import Hamburger from '../Hamburger/Hamburger';
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <Hamburger isOpen={isOpen} setOpen={setOpen}/>
      {isOpen ? <DrowdownMenu /> : ''}
    </nav>
  )
}

export default Navbar
