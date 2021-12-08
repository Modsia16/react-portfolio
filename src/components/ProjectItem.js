import React from 'react'
import { Link } from 'react-router-dom'
import projectImg from '../assets/images/quiz.png'
import styled from 'styled-components'

const ProjectItemStyles = styled.div`
a {
  text-decoration: none;
  color: var(--light-blue);
}
.projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 4px solid var(--blue);
    img {
      height: 100%;
    }
  }
  .projectItem__text {
    margin-top: 1rem;
    background-color: var(--white);
    padding: 1rem;
    border-radius: 12px;
    font-family: 'Roboto', 'Spectral SC', sans-serif;
  }
  .projectItem__title {
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    color: var(--blue);
    font-size: 2.2rem;
  }
  .projectItem__desc {
    color: var(--blue);
    font-size: 1.6rem;
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;


//make button links later
export default function ProjectItem( {
    img = projectImg,
    title = 'Project Name',
    desc = 'Lorem ipsum dolor sit amet',
    link = '#',
    dep = 'View Project',
    
    }) {
    return (
        <ProjectItemStyles>
          <Link to="/projects" className='projectItem__img' >
              <img src={ img } alt="project img" /> </Link>  
              <div className='projectItem__text'>
                <Link to="#" className="projectItem__info">
                    <h3 src={ link } className="projectItem__title" >{ title }</h3>
                </Link>
                <p className="projectItem_desc">{desc}</p>
                <p><a href={ link } target="_blank" rel="noreferrer">GitHub code</a></p>
                <p><a href={ dep } target="_blank" rel="noreferrer">See project</a></p>
            </div>
        </ProjectItemStyles>
    )
}
