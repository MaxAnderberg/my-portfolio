import React from 'react';
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './NavLinks.scss';

const NavLinks = () => {
  const color =`
  url(https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80)
  center / cover   /* position / size */
  no-repeat        /* repeat */
  fixed            /* attachment */
  padding-box      /* origin */
  content-box      /* clip */
  #FFF /* color */
  `;
  return (
    <div className='navlinks-container'>
      <AniLink cover bg={color} direction="down" duration={1} to="/" activeClassName='active' className='navlink as'>Home</AniLink>
      <AniLink cover bg={color} direction="down" duration={1} to="/about" activeClassName='active' className='navlink'>About</AniLink>
      <AniLink cover bg={color} direction="down" duration={1} to="/portfolio" activeClassName='active' className='navlink'>Portfolio</AniLink> 
    </div>
  )
}

export default NavLinks
