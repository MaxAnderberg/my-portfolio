import React from 'react';
import { Link } from "gatsby";
import './NavLinks.scss';

const NavLinks = () => {
  return (
    <div className='navlinks-container'>
      <Link to="/" activeClassName='active' className='navlink as'>Home</Link>
      <Link to="/about" activeClassName='active' className='navlink'>About</Link>
      <Link to="/portfolio" activeClassName='active' className='navlink'>Portfolio</Link> 
    </div>
  )
}

export default NavLinks
