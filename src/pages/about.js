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
          <StaticImage src='../images/javascript.png' className='image'/>
        </section>
        <section>
          <h2>Backend</h2>
        </section>
        <section>
          <h2>Tools</h2>
        </section>
      </section>

    </div>

  </Layout>
)

export default About
