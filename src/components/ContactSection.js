import React from 'react'
import Button from './Button'
import PText from './PText'
import styled from 'styled-components'

const ContactSectionStyled = styled.div`
background-color: var(--blue);
color: var(--white);
padding: 2rem;
font-family: 'Roboto', 'Spectral SC', sans-serif;
.contact__wrapper {
    background-color: var(--white);
    color: var(--blue);
    border-radius: 5px;
    padding: 4rem 0; 
    text-align: center;
}
.contact__heading {
    font-size: 2.5rem;
    margin-bottom: 4rem;
}
@media screen only screen and (max-width: 768px) {
    .contact__heading {
        font-size: 1.5rem;
    }
`

export default function ContactSection() {
    return (
        <ContactSectionStyled>
        <div className="container">
            <div className="contact__wrapper">
                <PText>
                    Contact me
                </PText>
                <h3 className="contact__heading">Let's work together</h3>
            <Button btnText="Contact Now" btnLink="/contact" />
            </div>
        </div>
        </ContactSectionStyled>
    )
}

