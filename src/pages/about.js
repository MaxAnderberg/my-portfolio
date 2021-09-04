import * as React from "react"
import './styles/about.scss';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className='about-container'>
    <StaticImage className='profile-image' src='../images/profile-image.png'/>

      <h1>Hello There!</h1>
      <p> <span className='dropcap'>M</span>y journey starts In 2014 when I started the bachelor programme Computational linguistics at Uppsala University. I started programming in python, and during my last year I pursued more programming courses like: 
			  Java, Database design, interface programming and a theory course called Human Computer Interactions. 
        I got my first job in September 2017 at Baltic Spot as a computational Linguistic, and they were a software company in the maritime business.
      </p>
      <section>
      <StaticImage className='profile-image' src='../images/profile-image.png'/>
      </section>
      <section>
        <h2 className='knowledge'>Skills</h2>
        <section>
          <h2 className='knowledge__category'>Frontend</h2>
          <div className='skills'>
            <div className='item'>
              <StaticImage src='../images/javascript.png' className='image'/>
              <p className='item__title'>Javascript</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/react.png' className='image'/>
              <p className='item__title'>React</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/gatsbyjs.png' className='image'/>
              <p className='item__title'>Gatsby</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/redux.png' className='image'/>
              <p className='item__title'>Redux</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/html5.png' className='image'/>
              <p className='item__title'>HTML</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/css3.png' className='image'/>
              <p className='item__title'>CSS</p>
            </div>
          </div>

        </section>
        <section>
          <h2 className='knowledge__category'>Backend</h2>
          <div className='skills'>
            <div className='item'>
              <StaticImage src='../images/nodejs.png' className='image'/>
              <p className='item__title'>NodeJS</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/mongodb.png' className='image'/>
              <p className='item__title'>MongoDB</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/postgresql.png' className='image'/>
              <p className='item__title'>Postgres</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/graphql.png' className='image'/>
              <p className='item__title'>GraphQL</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/express.png' className='image express-icon'/>
              <p className='item__title'>Express</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className='knowledge__category'>Tools</h2>
          <div className='skills'>
            <div className='item'>
              <StaticImage src='../images/serverless.png' className='image'/>
              <p className='item__title'>Serverless</p>
            </div>
            <div className='item'>
              <StaticImage src='../images/heroku.png' className='image'/>
              <p className='item__title'>Serverless</p>
            </div>
        
            <div className='item'>
              <StaticImage src='../images/agile.png' className='image'/>
              <p className='item__title'>Agile</p>
            </div>
          </div>
        </section>
      </section>

    </div>

  </Layout>
)

export default About
