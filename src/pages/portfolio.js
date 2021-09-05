import * as React from "react"
import { graphql, Link } from "gatsby"
import Project from '../components/Project'
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/portfolio.scss';

const Portfolio = ({data}) => {
  const nodes = data.allContentfulProject.edges
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className='portfolio-container'>
        <h1>Hi from the Portfolio page</h1>
        <p>Here all my projects will be displayed through a headless CMS</p>
        {nodes.map(item => <Project description={item.node.description.description} image={item.node.image.fluid.src} title={item.node.title}/>)}  
      </div>
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
        title
      }
    }
  }
}
`

export default Portfolio
