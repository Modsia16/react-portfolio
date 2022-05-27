import React from 'react';
import IntroImg from '../assets/images/intro-img.png'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

// Intro styles in addition to the default styles
const IntroStyles = styled.div`
.intro { 
    background-color: var(--dark-slate-grey);
    height: 100vh;
    min-height: 1000px; 
    width: 100%;
    text-align: center;  
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--yellow);
}
.intro__heading {
    margin-top: 5rem;
    font-size: 3rem;
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
                    <PText>Junior web developer based in Northern California. I have a passion for creating clean, responsive, and user-friendly websites. 
                        I have always been draw to to the innovative and analyitcal aspects of web development. When I am not coding I enjoy spending time in nature.
                        If you are looking for a developer to join your team, I would love to hear from you!
                        </PText>
                        <Button btnText='See my work' btnLink='/projects' outline={false}/>
                </div>
            </div>
        </div>
        </IntroStyles>
    )
}
