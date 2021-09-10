import React, { useState } from 'react';
import { graphql, Link, StaticImage } from "gatsby"
import Project from '../components/Project/Project'
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/portfolio.scss';

const Portfolio = ({ data }) => {
  const nodes = data.allContentfulProject.edges
    
  const [flip, setFlip] = useState(false);

  const handleFlip = () => flip ? setFlip(false) : setFlip(true); 
  
  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className='portfolio-container'>
        <h1 className='portfolio__title'>Projects</h1>

        <div className='kard'>
          <div className={`kard__inner ${flip ? 'is-flipped' : ''}`} onClick={handleFlip}>
            <div className='kard__face kard__face--front'>
              <h2>Devolper Kard</h2>  
            </div>   
            <div className='kard__face kard__face--back'>
                <div className='kard__content'>
                  <div className='kard__header'>
                    <img></img>
                    <h2>Max Anderberg</h2>
                  </div>
                  <div className='kard__body'>
                    <h3>Portfolio name</h3>
                    <p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p>
                  </div>
                  </div>
                </div>
              <div >
            </div>            
          </div>
        </div>
        {nodes.map(item => 
          <Project 
            description={item.node.description.description} 
            image={item.node.image.fluid.src} 
            title={item.node.title}
            tags={item.node.tags} 
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
        tags
        githubLink
        deploymentLink
      }
    }
  }
}
`

export default Portfolio
