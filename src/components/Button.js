import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-family: 'Roboto', 'Spectral SC', sans-serif;
        font-size: 1.5rem;
        background-color: ${(props) => props.outline ? 'transparent' : 'var(--grey)'};
        color: ${(props) => props.outline ? 'var(--grey)' : 'var(--blue)'};
        padding: 1rem 2rem;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--grey);
        text-decoration: none;
        @media only screen and (max-width: 768px) {
            .button {
                font-size: 1.2rem;
            }
        }
`

// on IntroSection,
export default function Button({ btnText, btnLink, outline, docDl }) {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">
            <Link className="button" to={ btnLink } download={ docDl }> { btnText } </Link>
        </ButtonStyle>
    )
}
