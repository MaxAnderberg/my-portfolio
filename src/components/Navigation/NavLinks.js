import React from 'react';
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './NavLinks.scss';

const NavLinks = () => {
  
  const coverProperties = `
    #FE4880
`;

  return (
    <div className='navlinks-container'>
      <AniLink cover direction="down" bg={coverProperties} duration={0.8} to="/" activeClassName='active' className='navlink as'>Home</AniLink>
      <AniLink paintDrip direction="down" bottom='exit' hex="#FE4880" duration={0.6} to="/about" activeClassName='active' className='navlink'>About</AniLink>
      <AniLink cover direction="down" bg={coverProperties} duration={0.6} to="/portfolio" activeClassName='active' className='navlink'>Portfolio</AniLink> 
    </div>
  )
}

export default NavLinks
