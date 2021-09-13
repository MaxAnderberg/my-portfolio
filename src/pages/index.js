import React, { useRef, useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/index.scss';
import { motion } from "framer-motion"
import WavingHand from '../components/WavingHand';

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
      <div className='introduction'>
    
          <h3 className='introduction__greeting'>Hi<WavingHand />, I'm</h3>
          <h2 className='introduction__name'>Max Anderberg</h2>
          <h4 className='introduction__title'>Fullstack Developer</h4>
      </div>
      <div className="item-a">
        <div className="slideshow-container">
          <div className="slideshow-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
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
    </div>
    <Seo title="Home" />
  </Layout>
)
}

export default IndexPage
