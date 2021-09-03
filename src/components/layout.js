import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"
import "./main.scss"
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <Helmet title='Max Anderberg' />
        <main className='main'>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
