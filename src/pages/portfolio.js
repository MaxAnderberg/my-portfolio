import * as React from "react"
import { graphql, Link } from "gatsby"
import Project from '../components/Project'
import Layout from "../components/layout"
import Seo from "../components/seo"


const Portfolio = ({data}) => {
  const nodes = data.allContentfulProject.edges
  return (
    <Layout>
      <Seo title="Portfolio" />
      <h1>Hi from the Portfolio page</h1>
      <p>Here all my projects will be displayed through a headless CMS</p>
      {nodes.map(item => <Project description={item.node.description.description}/>)}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql `
  query PortfolioPageQuery {
    allContentfulProject {
    edges {
      node {
        id
        image {
          id
          fluid {
            src
          }
        }
        slug
        description {
          description
        }
      }
    }
  }
}
`

export default Portfolio
