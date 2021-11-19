import React from 'react'
import styled from 'styled-components'

const StyleTitle = styled.div`
text-align: center;
p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
}
h2 {
    font-family: 'Roboto', sans-serif, bold;
    font-size: 2rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
}
@media only screen and (max-width: 768px) {
    p {
        font-size: 1.5rem;
    }
    h2 { 
        font-size: 3.6rem;
    }
}
`

export default function SectionTitle({subheading = 'this is a subheading',
heading= 'this is a heading'}) {
    return (
        <StyleTitle>
        <div>
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </div>
        </StyleTitle>
    )
}

