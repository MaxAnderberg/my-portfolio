import React from 'react';

const Project = ( props ) => {
  const {description, image, title, tags, githubLink, deploymentLink} = props;
  return (
    <div>
      <h1>{title}</h1>
      <img src={image}/>
      <p>{description}</p>
      <p>{tags}</p>
      <p>{githubLink}</p>
      <p>{deploymentLink}</p>
    </div>
  )
}

export default Project;
