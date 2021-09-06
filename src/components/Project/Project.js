import React from 'react';
import './Project.scss';

const Project = ( props ) => {
  const {description, image, title, tags, githubLink, deploymentLink} = props;
  const parsedTags = tags.split(' ').filter(i => i);
  return (
    <article className='card'>
      <section>
        <h1 className='card__title'>{title}</h1>
      </section>
      <section className='card__info-container'>
        <img className='card__image' src={image}/>
        <p className='card__description'>{description}</p>
      </section>
      <section className='card__tags-info'>
        <section>
          <p className='card__created-title'>Created with</p>
          <section className='card__tags-container'>
            {parsedTags.map(item => (<span className='tags'>{item}</span>))}
          </section>
        </section>
      </section>
      <section className='link-container'>
        <a className='link__project' href={deploymentLink} >Demo</a>
        <a className='link__project' href={githubLink} >Code</a>
      </section>
    </article>
  )
}

export default Project;
