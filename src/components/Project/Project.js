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
    });
    observer.observe(domRef.current);
    return () => observer.disconnect(domRef.current);
  }, []);

  return (
    <div className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <section className='card__image-container'>
        <img className='card__image' src={image}/>
      </section>
      <section className='card__info-container'>
        <section>
          <h1 className='card__title'>{title}</h1>
        </section>
        <p className='card__description'>{description}</p>
        <section className='card__tags-info'>
        <section>
          <section className='card__tags-container'>
            {parsedTags.map(item => (<span className='tag'>{item}</span>))}
          </section>
        </section>
      </section>
        <section className='link-container'>
        <a className='link__project' href={deploymentLink} > <StaticImage className='link__image' src='../../images/globe.png'/>Demo</a>
        <a className='link__project' href={githubLink} ><StaticImage className='link__image' src='../../images/coding.png'/> Code</a>
      </section>
      </section>


    </div>
  )
}

export default Project;
