import React from 'react';
import './Project.scss';
import { StaticImage } from "gatsby-plugin-image";

const Project = ( props ) => {
  const {description, image, title, tags, githubLink, deploymentLink} = props;
  const parsedTags = tags.split(' ').filter(i => i);
  return (
    <article className='card'>
 
      <section className='card__info-container'>
        <img className='card__image' src={image}/>
        <section>
          <h1 className='card__title'>{title}</h1>
        </section>
        <p className='card__description'>{description}</p>
      </section>
      <section className='card__tags-info'>
        <section>
          <section className='card__tags-container'>
            {parsedTags.map(item => (<span className='tags'>{item}</span>))}
          </section>
        </section>
      </section>
      <section className='link-container'>
        <a className='link__project' href={deploymentLink} > <StaticImage className='link__image' src='../../images/globe.png'/>Demo</a>
        <a className='link__project' href={githubLink} ><StaticImage className='link__image' src='../../images/coding.png'/> Code</a>
      </section>
    </article>
  )
}

export default Project;
