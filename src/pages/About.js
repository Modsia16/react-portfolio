import React from 'react'
import PText from '../components/PText'
import Button from '../components/Button'
import styled from 'styled-components'
import SelfT from '../assets/images/self2.png'
import AboutInfoItems from '../components/AboutInfoItems'

const AboutStyles = styled.div`
color: var(--blue);
padding: 15rem 0 10rem 0;
font-family: 'Roboto', 'Spectral SC', sans-serif;
.top-section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.left {
    flex: 3;
}
.right {
    flex: 2;
}
.about__subheading {
    font-size: 2rem;
    margin-bottom: 2rem;
    span {
        font-size: 1.5rem;
        background: var(--blue);
        color: var(--grey);
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }
}
.about__heading {
    font-size: 3rem;
    margin-bottom: 3rem;
}
.about__desc {
    margin-bottom: 4rem;
    .para {
        max-width: 100%;    
    }
}
.right {
    img {
        width: 300px;
        height: 450px;
        border: 1px solid var(--grey);
    }
}
.about-info-items {
    margin-top: 5rem;
}
.about-info-item {
    margin-bottom: 5rem;
}
.ed-heading {
    font-size: 2rem;
}

`

export default function About() {
    return (
        <>
        <AboutStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hello, I am <span>Carina Diaz</span>
                        </p>
                        <h2 className="about__heading">A junior web developer</h2>
                        <div className="about__desc">
                            <PText>
                                I am from the central valley in California. Since I was young I have always had knack for problem solving and 
                                Since I was young I always had a passion for learning and creating new things. 
                                Currently I am enrolled in a coding boot camp hosted at UC Davis and I hope to be 
                                junior web developer after completing the program.
                                <br /><br />
                                I started learning web development in ernest in 2019 and have been working growing my skill since then. I find 
                                coding to be a creative outlet and I am always looking for a new challeng.
                                <br /><br />
                                I would love to work with you and learn more about your projects.
                                My goal is to be a part of a team that will help you to build something great.
                            </PText>
                        </div>
                        <Button btnLink="/resume" btnText="Download Resume" />
                        </div>
                        <div className="right">
                        <img src={SelfT} alt="" />
                        </div>
                </div>
            <div className="about-info-items">
                <div className="about-info-item">
                    <h1 className="ed-heading">
                    Education
                    </h1>
                    <AboutInfoItems
                    title="Certs"
                    items={["UC Davis, Davis, CA - Full Stack Web Development"]}
                    />
                    <AboutInfoItems 
                    title="College"
                    items={["CSU Stainslaus, Turlock, CA - BS Health Sciences", "SJDC, Stockton, CA - AS Mathematics and Science"]}
                    />
                </div>
                    <h1 className="ed-heading">Skills</h1>
                <div className="about-info-item">
                    <AboutInfoItems
                    title="Browser Based Technologies"
                    items={["HTML/CSS", "JavaScript/jQuery", "Bootstrap", "Handlebars"]}
                    addlitems={["Local storage", "Session Storage", "IndexDB"]}
                    />
                    <AboutInfoItems
                    title=" Databases and SSDs"
                    items={["User Authentication", "PWAs", "MERN Stack", "MySQL"]}
                    />
                    <AboutInfoItems
                    title="API Interaction"
                    items={["API", "JSON", "AJAX"]}
                    />
                    <AboutInfoItems
                    title="CS applied to JavaScript"
                    items={["Algorithms", "Efficiency", "Time Complexity", "Big O Notation", "Data Structures"]}
                    />
                    </div>
                <h1 className="ed-heading">Experience</h1>
                    <div className="about-info-item">
                    <AboutInfoItems
                    title="Projects"
                    items={["Timed quiz", "Fitness Tracker", "Fullstack applications", "Personal website"]}
                    />
                </div>
            </div>
        </div>
        </AboutStyles>
        </>
    )
}
