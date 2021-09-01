import React from 'react';
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <div>
      <Link to="/" activeStyle>Home</Link>
      <Link to="/about" activeStyle>About</Link>
      <Link to="/portfolio" activeStyle>Portfolio</Link> 
    </div>
  )
}

export default NavLinks
