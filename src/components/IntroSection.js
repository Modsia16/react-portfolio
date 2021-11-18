import React from 'react';
import IntroImg from '../assets/images/intro-img.png'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

// Intro styles in addition to the default styles
const IntroStyles = styled.div`
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    color: var(--blue);
.intro__img {
    width: 100%;
    height: auto;
  }
`
// IntroSection component in the home page of the site
export default function IntroSection() {
    return (
        <IntroStyles>
        <div className='intro'>
            <div className = 'container'>
                <h1 className = 'intro__heading'>  
                    <span>Welcome to CarilyWebDev </span>
                    <span> my name is Carina Diaz.</span>
                </h1>
                <div className='intro__img'>          
                    <img src={IntroImg} alt=''/>
                </div>
                <div className='intro__text'>
                    <PText>I am a junior web developer based 
                        in Northern California. 
                        I love to code and have fun.
                        </PText>
                        <Button btnText='See my work' btnLink='/projects' outline={false}/>
                </div>
            </div>
        </div>
        </IntroStyles>
    )
}
