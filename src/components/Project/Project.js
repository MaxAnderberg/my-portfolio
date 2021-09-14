import React, { useState, useRef, useEffect} from 'react';
import './Project.scss';
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion"

const Project = ( props ) => {
  const {description, image, title, githubLink, deploymentLink} = props;
 
  const onHoverVariants = {
    hover: {
      scale:1.2,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
    jump: {
      type: 'spring',
      stiffness: 300,
      bounce: 0.75,

    }
  }

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    },
    { root: null, rootMargin: '0px', threshold: 0.3 }
    );
    observer.observe(domRef.current);
  }, []);

  return (
    
    <article className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <section className='card__image-container item-1'>
        <img className='card__image' src={image} alt=""/>
      </section>
      <section className='card__info-container item-2'>
        <section>
          <h1 className='card__title'>{title}</h1>
        </section>
        <p className='card__description'>{description}</p>
        <section className='card__link-container'>
        <motion.a variants={onHoverVariants} whileHover="hover" transition={{type: 'spring', stiffness:300, bounce: 0.75}} className='card__external-link' href={deploymentLink} > <StaticImage className='card__link-image' src='../../images/globe.png' alt="A globe icon"/>Demo</motion.a>
        <motion.a variants={onHoverVariants}  whileHover="hover" transition={{type: 'spring', stiffness:300, bounce: 0.75}} className='card__external-link' href={githubLink} ><StaticImage className='card__link-image' src='../../images/coding.png' alt="A coding icon"/> Code</motion.a>
        </section>
      </section>
    </article>
  )
}

export default Project;
