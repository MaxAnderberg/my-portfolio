import React, { useState } from 'react';
import { motion } from "framer-motion"
import DropdownMenu from './DropdownMenu/DropdownMenu';
import Hamburger from '../Hamburger/Hamburger';
import NavLinks from './NavLinks';
import './Navbar.scss';
const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className='navbar-container'>
      <motion.div 
        whileHover={{scale: 1.2, originX: 0, color: '#f8e112'}}
        transition={{type: 'spring', stiffness:400}}
        className='logo'>
          &lt;max/&gt;
      </motion.div>
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
