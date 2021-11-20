import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import PText from './PText';

const ResumeSectionStyled = styled.div`
background-color: var(--white);
color: var(--blue);
padding: 2rem;
font-family: 'Roboto', 'Spectral SC', sans-serif;
.resume__wrapper {
    background-color: var(--blue);
    color: var(--white);
    border-radius: 5px;
    padding: 4rem 0; 
    text-align: center;
}
.resume__heading {
    font-size: 2.5rem;
    margin-bottom: 4rem;
}
@media screen only screen and (max-width: 768px) {
    .resume__heading {
        font-size: 1.5rem;
    }
`

export default function ResumeSection() {
    return (
        <ResumeSectionStyled>
        <div className="container">
            <div className="resume__wrapper">
                <PText>
                    See my 
                </PText>
                <h3 className="resume__heading">Resume and CV</h3>
            <Button btnText="Resume and CV" btnLink="/Resume" />
            </div>
        </div>
    </ResumeSectionStyled>      
    )
}
