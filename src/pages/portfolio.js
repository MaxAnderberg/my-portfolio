import React from 'react';
import { graphql } from "gatsby"
import Project from '../components/Project/Project'
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/portfolio.scss';

const Portfolio = ({ data }) => {
  const nodes = data.allContentfulProject.edges
      
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className='portfolio-container'>
        <section className='portfolio__text'>
          <h1 className='portfolio__title'>RECENT WORK</h1>
        </section>

        {nodes.map(item => 
          <Project 
            description={item.node.description.description} 
            image={item.node.image.fluid.src} 
            title={item.node.title}
            githubLink={item.node.githubLink} 
            deploymentLink={item.node.deploymentLink}
          />
        )}  
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
        githubLink
        deploymentLink
      }
    }
  }
}
`

export default Portfolio
