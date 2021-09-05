import React from 'react';

const Project = ( props ) => {
  const {description, image, title} = props;
  return (
    <div>
      <h1>{title}</h1>
      <img src={image}/>
      <p>{description}</p>
    </div>
  )
}

export default Project;
