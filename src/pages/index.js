import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from '../components/Hamburger/Hamburger';
import Layout from "../components/layout"
import Seo from "../components/seo"
import './index.scss';

const IndexPage = () => (
  <Layout>
    <div className='test'>
      <StaticImage src='../images/IMG_4101.jpeg' className='image'/>
      <div className='bio-intro'>
        <h3 className='bio-intro__greeting'>Hi, I'm</h3>
        <h2 className='bio-intro__name'>Max Anderberg</h2>
        <h4 className='bio-intro__title'>Fullstack JavaScript Developer</h4>
      </div>
    <div className='diagonal-box'></div>
    </div>
    <Seo title="Home" />
  </Layout>

)

export default IndexPage
