import React from 'react';
import IntroImg from '../assets/images/intro-img.png'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

// Intro styles in addition to the default styles
const IntroStyles = styled.div`
.intro { 
    height: 100vh;
    min-height: 1000px; 
    width: 100%;
    text-align: center;  
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    color: var(--blue);
}
.intro__heading {
    font-size: 3rem;
    margin-bottom: 4rem;
    position: relative;
    span {
        display: inline-block;
        width: 100%;
}
.intro_name {
 font-size: 4rem;
}
.intro__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 5px solid var(--blue);
  }
  .intro__text {
      margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
      .intro {
          min-height: 750px;
      }
      .intro__heading {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            .intro_name {
                font-size: 4rem;
            }
        }
        .intro__img {
            height: 400px;
        }
        .intro__text {
            margin-top: 1rem;
        }
    }   
`
// IntroSection component in the home page of the site
export default function IntroSection() {
    return (
        <IntroStyles>
        <div className='intro'>
            <div className = 'container'>
                <h1 className = 'intro__heading'>  
                    <span>Hello, this is</span>
                    <span className="intro_name"> CarilyWebDev</span>
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
