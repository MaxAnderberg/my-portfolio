import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from './Navigation/Navbar';
import './Header.scss';
const Header = () => (
  <header className='header'>
    <div>
    <Navbar />
    </div>
  </header>
)

export default Header
