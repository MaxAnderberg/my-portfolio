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
        My developer journey begins in 2014 when I started studying Computational Linguistics at Uppsala University. It’s during these years that I really come into contact with coding, but it wasn’t love at first sight. 
        However, by the end of my studies, I gravitated towards coding more, and started taking more technical courses. But I wasn’t sure if I wanted to become a developer. September 2017, I landed my first job as a computational linguist, building and maintaining an information extraction system in the maritime business.
        <br></br>
        <br></br>
        In early 2018, I transitioned into a role as a conversational AI Developer for a company that builds enterprise chatbots. 
        I was part of the Innovation & Community team where I had a large spread of responsibilities, like writing how-to articles for new users, explored new technologies, did videos and built community chatbots. 
        <br></br>
        <br></br>
        As a conversational AI Developer, I came into close contact with software development, since I wrote programmatic logic for the chatbots, discuss with the developers, etc. 
        Soon I found myself that I was teaching myself how to build web applications by doing courses online.
        <br></br>
        Essentially, developing grew into a passion.
        <br></br>
        <br></br>
        December 2020, I applied to Salt. A JavaScript full stack bootcamp to pursue my dream, and become a software developer.

        Out of 1500 applicants, I got accepted into the spring 2021 bootcamp and graduated after three months in late July.
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
