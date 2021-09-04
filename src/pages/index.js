import React, { useRef, useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/index.scss';

const IndexPage = () => {
  
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const images = [
    "https://photos.google.com/search/_tra_/photo/AF1QipNT-irFVwOiIdffUqI2avCnMk29gPtcOcfiO0dO",
    "https://photos.google.com/search/_tra_/photo/AF1QipN01Ud8d2vl2HfsD632WGQ9PSHHR6xRmbJ99y1P"
   , "https://photos.google.com/search/_tra_/photo/AF1QipN01Ud8d2vl2HfsD632WGQ9PSHHR6xRmbJ99y1P"
  ];
  const [index, setIndex] = React.useState(0);
  const delay = 2500;

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
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
            <StaticImage className='slide' src="../images/html5.png" alt=""/>
            <StaticImage className='slide' src="../images/css3.png" alt=""/>
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
