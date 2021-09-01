import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi Folks</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      <Link to="/about">Go to About page</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
