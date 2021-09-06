import React, { useRef, useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/index.scss';

const IndexPage = () => {
  
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(0);
  const delay = 2500;

  useEffect(() => {
    setImages(document.getElementsByClassName('slide').length)
  },[]) 

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevImage) =>
          prevImage === images - 1 ? 0 : prevImage + 1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
  <Layout>
    <div className="homepage-container">
      <div className='bio-intro'>
          <h3 className='bio-intro__greeting'>Hi, I'm</h3>
          <h2 className='bio-intro__name'>Max Anderberg</h2>
          <h4 className='bio-intro__title'>Fullstack Developer</h4>
        </div>
        <div className="item-c">
        <div className="slideshow ">
          <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            <StaticImage className='slide' src="../images/javascript.png" alt=""/>
            <StaticImage className='slide' src="../images/react.png" alt=""/>
            <StaticImage className='slide' src="../images/nodejs.png" alt=""/>
            <StaticImage className='slide' src="../images/gatsbyjs.png" alt=""/>
            <StaticImage className='slide' src="../images/html5.png" alt=""/>
            <StaticImage className='slide' src="../images/css3.png" alt=""/>
            <StaticImage className='slide' src="../images/mongodb.png" alt=""/>
            <StaticImage className='slide' src="../images/mocha.png" alt=""/>
          </div>
        </div>
        </div>

        <div className='bio-intro__icons-container item-d'>
          <a href="https://github.com/MaxAnderberg"><StaticImage className='icon' src='../icons/github-128.png'/></a>
          <a href="https://linkedin.com/in/maxanderberg"><StaticImage className='icon' src='../icons/linkedin-128.png'/></a>
        </div>
    </div>
    <Seo title="Home" />
  </Layout>
)
}

export default IndexPage
