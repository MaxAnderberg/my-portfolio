import React from 'react';
import { Link } from "gatsby";
import './NavLinks.scss';

const NavLinks = () => {
  return (
    <div className='navlinks-container'>
      <Link to="/" activeStyle className='navlink'>Home</Link>
      <Link to="/about" activeStyle className='navlink'>About</Link>
      <Link to="/portfolio" activeStyle className='navlink'>Portfolio</Link> 
    </div>
  )
}

export default NavLinks
