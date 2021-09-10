import * as React from "react"
import './styles/about.scss';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className='about-container'>
      <h1>My journey</h1>
      <p className='bio'> 
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        <br></br>
        <br></br>
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        <br></br>
        <br></br>
        Placeholder text Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
        Placeholder textPlaceholder textPlaceholder textPlaceholder textPlaceholder text
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
