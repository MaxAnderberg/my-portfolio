import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from '../components/Hamburger/Hamburger';
import Layout from "../components/layout"
import Seo from "../components/seo"
import './index.scss';

const IndexPage = () => (
  <Layout>
    <div className='test'>
      <StaticImage src='../images/IMG_4101.jpeg' className='image' imgClassName='zoom-in-zoom-out'/>
      <div className='bio-intro'>
        <h3 className='bio-intro__greeting'>Hi, I'm</h3>
        <h2 className='bio-intro__name'>Max Anderberg</h2>
        <h4 className='bio-intro__title'>Fullstack JavaScript Developer</h4>
        <div className='bio-intro__icons-container'>
          <a href="https://github.com/MaxAnderberg"><StaticImage className='icon' src='../icons/github-128.png'/></a>
          <a href="https://linkedin.com/in/maxanderberg"><StaticImage className='icon' src='../icons/linkedin-128.png'/></a>
        </div>
      </div>
    <div className='diagonal-box'></div>
    </div>
    <Seo title="Home" />
  </Layout>

)

export default IndexPage
