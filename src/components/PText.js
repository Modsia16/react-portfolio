import React from 'react'
import styled from 'styled-components'

//styles for the text
const PStyles = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 1.3rem;
    @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`
//children of p text component
export default function PText({ children }) {
    return (
    <PStyles>       
        <div>
            <p>{children}</p>
        </div>
    </PStyles>
    )
}
