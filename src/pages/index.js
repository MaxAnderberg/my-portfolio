import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from '../components/Hamburger/Hamburger';
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi Folks</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
