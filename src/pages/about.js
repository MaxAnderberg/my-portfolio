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
        Currently working as a backend GO developer at Lendo.
        <br></br>
        <br></br>
        My journey begins in 2014 when I got accepted to the bachelor program Computational Linguistics at Uppsala University.
        In September 2017 I landed my first job as a computational linguist, building and maintaining an information extraction system.
        <br></br>
        <br></br>
        I became a conversational AI Developer in early 2018 for a company that builds chatbots for enterprises.
        I was part of the Innovation & Community team, where I wrote how-to articles for new users, explored new technologies, and built community chatbots.
        <br></br>
        <br></br>
        Throughout my career as a computational linguist I've come into close contact with software development, a passion I didn't know I had. 
        So, in late 2020 I decided to apply to Salt to finally pursue my dream to switch fields and become a software developer. 
        Out of 1500 other applicants, I got accepted into the spring 2021 boot camp and graduated after three months in late July.
      </p>
      <section className='profile-image-container'>
        <StaticImage className='profile-image' alt="an image of me" src='../images/profile-image.png'/>
      </section>
      <section className='skills-container'>
        <h2 className='knowledge__category'>Frontend</h2>
        <div className='skills'>
          <div className='skill'>
            <StaticImage src="../images/javascript.png" alt="A javascript icon"  className='skill__image'/>
            <p className='skill__title'>Javascript</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/react.png' alt="A react icon" className='skill__image'/>
            <p className='skill__title'>React</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/gatsbyjs.png' alt="A gatsby js icon" className='skill__image'/>
            <p className='skill__title'>Gatsby</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/redux.png' alt="a redux icon" className='skill__image'/>
            <p className='skill__title'>Redux</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/html5.png' alt="a html5 icon" className='skill__image'/>
            <p className='skill__title'>HTML</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/css3.png' alt="a css3 icon" className='skill__image'/>
            <p className='skill__title'>CSS</p>
          </div>
        </div>
        <h2 className='knowledge__category'>Backend</h2>
        <div className='skills'>
          <div className='skill'>
            <StaticImage src='../images/gopher.png' alt="A gopher (GO mascot)" className='skill__image'/>
            <p className='skill__title'>GO</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/nodejs.png' alt="a node js icon" className='skill__image'/>
            <p className='skill__title'>NodeJS</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/mongodb.png' alt="a mongo db icon" className='skill__image'/>
            <p className='skill__title'>MongoDB</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/postgresql.png' alt="a postgres icon" className='skill__image'/>
            <p className='skill__title'>Postgres</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/graphql.png' alt="a graphql icon" className='skill__image'/>
            <p className='skill__title'>GraphQL</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/express.png' alt="an express icon" className='skill__image express-icon'/>
            <p className='skill__title'>Express</p>
          </div>
        </div>

        <h2 className='knowledge__category'>Tools</h2>
        <div className='skills'>
          <div className='skill'>
            <StaticImage src='../images/serverless.png' alt="a serverless icon" className='skill__image'/>
            <p className='skill__title'>Serverless</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/heroku.png' alt="a heroku icon" className='skill__image'/>
            <p className='skill__title'>Heroku</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/agile.png' alt="an agile icon" className='skill__image'/>
            <p className='skill__title'>Agile</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/TDD.png' alt="a tdd icon" className='skill__image'/>
            <p className='skil__title'>TDD</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/netlify.png' alt="a netlify icon" className='skill__image'/>
            <p className='skill__title'>Netlify</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/mocha.png' alt="a mocha icon" className='skill__image'/>
            <p className='skill__title'>Mocha</p>
          </div>
          <div className='skill'>
            <StaticImage src='../images/jest.png' alt="a jest icon" className='skill__image'/>
            <p className='skill__title'>Jest</p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
