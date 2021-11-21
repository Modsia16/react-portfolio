import React from 'react'
import PText from './PText'
import styled from 'styled-components'

const AboutInfoItemsStyled = styled.div`
    display: flex;;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin-top: 3rem;
    .title {
        font-size: 1.5rem;
        margin-right: 1rem;
    }
    .ed-subhead {
        margin-right: 3rem;
    }
    .items {
        display: flex;
        gap: 0.5rem;
    }
    .item {
        color: var(--white);
        background-color: var(--blue);
        border-radius: 1rem;
        padding: 0.5rem;
        .para {
            max-width: 100rem;
        }
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items {
            position: initial;
            gap: 1rem;
        }
        .title {
            font-size: 1.5rem;
        }
    }
`

export default function AboutInfoItems({
    title="this is an item",
    items=["HTML", "CSS", "JS", "React"]}) {    
    return (
        <AboutInfoItemsStyled>
        <div className="ed-subhead">
         <h1 className="title">{title}</h1>
         </div>   
         <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
        </div>
    </AboutInfoItemsStyled>
    )
}
