import React from 'react'
import { Link } from 'react-router-dom'
import projectImg from '../assets/images/Nutrition-app.png'
import styled from 'styled-components'

const ProjectItemStyles = styled.div`
 .projectItem__img {
    width: 33%;
    height: 400px;
    overflow: hidden;
    border-radius: 5px;
    display:block;
    border: 1px solid var(--grey);
    img {
        height: 100%;
    }
}
.projectItem__info {
    margin-top: 1rem;
    background-color: var(--blue);
    padding: 1rem;
    border-radius: 5px;
}
.projectItem__title {
    font-size: 2.0rem; 
    font-family: 'Roboto', 'Spectral SC', sans-serif;
}
.projectItem_desc {
    font-size: 1.2rem;
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    margin-top: 1rem;
}
@media only screen and (max-width: 600px) {
    .projectItem__img {
        height: 200px;
    }

`


export default function ProjectItem() {
    return (
        <ProjectItemStyles>
        <div>
          <Link to="/projects" className='projectItem__img' >
              <img src={ projectImg } alt=" project img"/> </Link>  
              <div className='projectItem__text'>
                <Link to="#" class>
                    <h3 className="projectItem__title" >Project 1</h3>
                </Link>
                <p className="projectItem_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
        </div>
        </ProjectItemStyles>
    )
}
