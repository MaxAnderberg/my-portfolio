import * as React from "react"
import './styles/about.scss';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className='about-container'>
      <h1>Hello there!</h1>
      <p> My journey starts In 2014 when I started the bachelor programme Computational linguistics at Uppsala University. I started programming in python, and during my last year I pursued more programming courses like: 
			  Java, Database design, interface programming and a theory course called Human Computer Interactions. 
        I got my first job in September 2017 at Baltic Spot as a computational Linguistic, and they were a software company in the maritime business.
      </p>
      <section>
        <h2>Skills</h2>
        <section>
          <h2>Frontend</h2>
          <div className='skills'>
            <div className='item'>
              <StaticImage src='../images/javascript.png' className='image'/>
              <p>Javascript</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/react.png' className='image'/>
              <p>React</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/gatsbyjs.png' className='image'/>
              <p>Gatsby</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/redux.png' className='image'/>
              <p>Redux</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/html5.png' className='image'/>
              <p>HTML</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/css3.png' className='image'/>
              <p>CSS</p>
            </div>
          </div>

        </section>
        <section>
          <h2>Backend</h2>
          <div className='skills'>
            <div className='item'>
              <StaticImage src='../images/nodejs.png' className='image'/>
              <p>NodeJS</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/mongodb.png' className='image'/>
              <p>MongoDB</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/postgresql.png' className='image'/>
              <p>Postgres</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/graphql.png' className='image'/>
              <p>GraphQL</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/graphql.png' className='image'/>
              <p>Express</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Tools</h2>
          <div className='skills'>
            <div className='item'>
              <StaticImage src='../images/serverless.png' className='image'/>
              <p>Serverless</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/heroku.png' className='image'/>
              <p>Serverless</p>
            </div>
        
            <div className='item'>
              <StaticImage src='../images/agile.png' className='image'/>
              <p>Agile</p>
            </div>
          </div>
        </section>
      </section>

    </div>

  </Layout>
)

export default About
