import React from 'react';
import './Project.scss';

const Project = ( props ) => {
  const {description, image, title, tags, githubLink, deploymentLink} = props;
  const parsedTags = tags.split(' ');
  return (
    <article className='card'>
      <section className='card__title'>
        <h1>{title}</h1>
      </section>
      <section className='card__info-container'>
        <img className='card__image' src={image}/>
        <p className='card__description'>{description}</p>
      </section>
      <section className='card__tags'>
        <p>{parsedTags.map(item => (<span className='tags'>{item}</span>))}</p>
      </section>
      <section className='link-container'>
        <a className='link__project' href={deploymentLink} >Live Code</a>
        <a className='link__project' href={githubLink} >GitHub</a>
      </section>
    </article>
  )
}

export default Project;
