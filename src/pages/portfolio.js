import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = () => (
  <Layout>
    <Seo title="Portfolio" />
    <h1>Hi from the Portfolio page</h1>
    <p>Here all my projects will be displayed through a headless CMS</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
