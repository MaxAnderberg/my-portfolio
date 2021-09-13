import React from 'react';
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './NavLinks.scss';

const NavLinks = () => {
  const color = "#FFF";
  return (
    <div className='navlinks-container'>
      <AniLink cover bg={color} direction="down" to="/" activeClassName='active' className='navlink as'>Home</AniLink>
      <AniLink cover bg={color} direction="down" to="/about" activeClassName='active' className='navlink'>About</AniLink>
      <AniLink cover bg={color} direction="down" to="/portfolio" activeClassName='active' className='navlink'>Portfolio</AniLink> 
    </div>
  )
}

export default NavLinks
