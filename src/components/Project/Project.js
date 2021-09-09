import React, { useState, useRef, useEffect} from 'react';
import './Project.scss';
import { StaticImage } from "gatsby-plugin-image";

const Project = ( props ) => {
  const {description, image, title, tags, githubLink, deploymentLink} = props;
  const parsedTags = tags.split(' ').filter(i => i);
 
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    },
    { root: null, rootMargin: '200px', threshold: 0.5 }
    );
    observer.observe(domRef.current);
  }, []);

  return (
    <article className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>

      <section className='card__image-container'>
        <img className='card__image' src={image} alt=""/>
      </section>
      <section className='card__info-container'>
        <section>
          <h1 className='card__title'>{title}</h1>
        </section>
        <p className='card__description'>{description}</p>
        <section className='card__tags-info'>
        <section>
          <section className='card__tags-container'>
            {parsedTags.map(item => (<span className='card__tag'>{item}</span>))}
          </section>
        </section>
        
      </section>
        <section className='card__link-container'>
        <a className='card__external-link' href={deploymentLink} > <StaticImage className='card__link-image' src='../../images/globe.png' alt="A globe icon"/>Demo</a>
        <a className='card__external-link' href={githubLink} ><StaticImage className='card__link-image' src='../../images/coding.png' alt="A coding icon"/> Code</a>
        </section>
      </section>

    </article>
  )
}

export default Project;
