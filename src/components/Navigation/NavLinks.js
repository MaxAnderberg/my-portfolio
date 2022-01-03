import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './NavLinks.scss';

const NavLinks = () => {
  
  const coverProperties = `
    #212121
`;

  return (
    <div className='navlinks-container'>
      <AniLink cover direction="left" bg={coverProperties} duration={0.7} to="/" activeClassName='active' className='navlink as'>Home</AniLink>
      <AniLink cover direction="left" bg={coverProperties} duration={0.7} to="/about" activeClassName='active' className='navlink'>About</AniLink>
      <AniLink cover direction="left" bg={coverProperties} duration={0.7} to="/portfolio" activeClassName='active' className='navlink'>Portfolio</AniLink> 
      <AniLink cover direction="left" bg={coverProperties} duration={0.7} to="/contact" activeClassName='active' className='navlink'>Contact</AniLink> 
      <AniLink cover direction="left" bg={coverProperties} duration={0.7} to="" activeClassName='active' className='navlink'>Blog</AniLink> 
    </div>
  )
}

export default NavLinks
