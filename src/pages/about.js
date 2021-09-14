import * as React from "react"
import './styles/about.scss';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className='about-container'>
      <h1 className='title'>My journey</h1>
      <p className='bio'> 
        Currently working as fullstack JavaScript developer at Salt.
        <br></br>
        <br></br>
        My journey begins in 2014 when I got accepted to the bachelor program Computational Linguistics at Uppsala University. 
        In September 2017 I landed my first job as a computational linguistic building and maintaining an information extraction system.
        <br></br>
        <br></br>
        I became a conversational AI Developer in early 2018 for a company that builds chatbots for enterprises. 
        I was part of the Innovation & Community team where I wrote how-to articles for new users, explored new technologies, and built community chatbots.
        <br></br>
        <br></br>
        Throughout my career as a computational linguist I've come into close contact with software development, a passion I didn't know I had. 
        But in late 2020 I decided to apply to salt to finally pursue my dream to switch fields and become a software developer.
        Out of <strong>1500</strong> other applicants, I got accepted into the spring 2021 boot camp class and graduated three months later at the end of July.
      </p>
      <section className='profile-image-container'>
        <StaticImage className='profile-image' src='../images/profile-image.png'/>
      </section>
      <section className='skills-container'>
        <h2 className='knowledge__category'>Frontend</h2>
        <div className='skills'>
          <div className='skill'>
            <StaticImage src='../images/javascript.png' className='skill__image'/>
            <p className='skill__title'>Javascript</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/react.png' className='skill__image'/>
            <p className='skill__title'>React</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/gatsbyjs.png' className='skill__image'/>
            <p className='skill__title'>Gatsby</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/redux.png' className='skill__image'/>
            <p className='skill__title'>Redux</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/html5.png' className='skill__image'/>
            <p className='skill__title'>HTML</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/css3.png' className='skill__image'/>
            <p className='skill__title'>CSS</p>
          </div>
        </div>
        <h2 className='knowledge__category'>Backend</h2>
        <div className='skills'>
          <div className='skill'>
            <StaticImage src='../images/nodejs.png' className='skill__image'/>
            <p className='skill__title'>NodeJS</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/mongodb.png' className='skill__image'/>
            <p className='skill__title'>MongoDB</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/postgresql.png' className='skill__image'/>
            <p className='skill__title'>Postgres</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/graphql.png' className='skill__image'/>
            <p className='skill__title'>GraphQL</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/express.png' className='skill__image express-icon'/>
            <p className='skill__title'>Express</p>
          </div>
        </div>

        <h2 className='knowledge__category'>Tools</h2>
        <div className='skills'>
          <div className='skill'>
            <StaticImage src='../images/serverless.png' className='skill__image'/>
            <p className='skill__title'>Serverless</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/heroku.png' className='skill__image'/>
            <p className='skill__title'>Heroku</p>
          </div>
      
          <div className='skill'>
            <StaticImage src='../images/agile.png' className='skill__image'/>
            <p className='skill__title'>Agile</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/TDD.png' className='skill__image'/>
            <p className='skil__title'>TDD</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/netlify.png' className='skill__image'/>
            <p className='skill__title'>Netlify</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/mocha.png' className='skill__image'/>
            <p className='skill__title'>Mocha</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/jest.png' className='skill__image'/>
            <p className='skill__title'>Jest</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
