import React from 'react';
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './NavLinks.scss';

const NavLinks = () => {
  return (
    <div className='navlinks-container'>
      <AniLink swipe direction="left" duration={0.5} to="/" activeClassName='active' className='navlink as'>Home</AniLink>
      <AniLink swipe direction="left" duration={1} to="/about" activeClassName='active' className='navlink'>About</AniLink>
      <AniLink swipe direction="left" duration={1} to="/portfolio" activeClassName='active' className='navlink'>Portfolio</AniLink> 
    </div>
  )
}

export default NavLinks
