import React from 'react';

const Project = ( {description, image, title} ) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image}/>
      <p>{description}</p>
    </div>
  )
}

export default Project;
