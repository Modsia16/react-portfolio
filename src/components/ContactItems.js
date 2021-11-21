import React from 'react'
import PText from './PText'
import styled from 'styled-components'
import { MdLocalPhone } from 'react-icons/md';

const ContactItemStyle = styled.div`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 5rem;
    margin-bottom: 2rem;
    .info {
        background-color: var(--blue);
        color : var(--white);
        padding: 1rem 2rem;
        border-radius: 5px;
    }
    `
export default function ContactItems({
    icon=<MdLocalPhone />,
    text = 'I need to text',
}) {
    return (
        <ContactItemStyle>
        <div>
        <div className="icon">{icon}</div>
            <div className="info"><PText>{text}</PText></div>
        </div>
        </ContactItemStyle>
    )
}
