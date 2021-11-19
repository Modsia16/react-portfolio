import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
background: var(--blue);
padding-top: 5rem;
width: 100%;
color: var(--white);
p {
    font-size: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
}
ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
li {
    display: inline-block;
    border-right: 8px solid var(--blue);
    transition: 0.3s ease-in-out;
    list-style: none;
    &:hover {
        background: var(--light-blue);
    }
}
a {
    color: var(--yellow);
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    font-family: 'Roboto', 'Spectral SC', sans-serif;
}
.active {
    color: var(--white);
}

`

export default function Footer() {
    return (
        <FooterStyle>
        <div>
            <div className="footer-text">
                <p>Follow me</p>
            </div>
            <div className="social_media_text">
                <ul>
                    <li>
                        <a href="https://github.com/Modsia16" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/carina-diaz-a22009199/" target="_blank" rel="noreferrer">
                            linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </FooterStyle>
    )
}
