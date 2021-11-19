import React from 'react'
import styled from 'styled-components'
import PText from './PText'
import Button from './Button';
import SectionTitle from './SectionTitle'
import AboutImg from '../assets/images/big-basin.png'
//import SelfImg from '../assets/images/lights-self.png'

const AboutSectionStyled = styled.div`
    background-color: var(--blue);
    padding: 5rem 0;
    color: var(--white);
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right {
        flex: 1;
    }
    .aboutSection__title {
        text-align: left;
    }
    .para {
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection-buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: flex-start;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;
        }
        .aboutSection__left, .aboutSection__right {
            width: 100%;
        }
        .aboutSection___right {
            margin-top: 2rem;
        }
        .aboutSection-title {
            text-align: center;
        }
        .para {
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection-buttons {
            flex-direction: column;
            gap: 0rem;
            .button-wrapper, a {
                width: 100%;
                text-align: center;
            }
        }
    }
`

export default function AboutSection() {
    return (
        <AboutSectionStyled>
            < div className="container">
                <div className="aboutSection__left">
                    <SectionTitle 
                    className="aboutSection__title"
                    subheading="Hello my name is Carina Diaz"
                    heading="About me"
                    />
                    <PText>
                        I have experience using an array of web development systems. 
                        Including HTML, CSS, JavaScript, MERN stack, progressive web apps and more!
                        With a strong work ethic and meticulous attention to detail I am confident 
                        I can create a unique design for your website!
                    </PText>
                <div className="aboutSection-buttons">
                    <Button btnLink="/projects" btnText="Works" />
                    <Button btnLink="/about" btnText="Read More" outline/>
                </div>
                </div>
                <div className="aboutSection__right">
                    <img className="aboutImg" src={AboutImg} alt="" />
                </div>
                </div>
        </AboutSectionStyled>
    )
}
