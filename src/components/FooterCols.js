import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterColStyles = styled.div`
.heading {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
li {
    margin-bottom: 1rem;
}

a {
    font-size: 1.25rem;
    text-decoration: none;
    color: var(--white);

}
`

export default function FooterCols(
    {
        heading= "col heading", 
        links=[
        {
            type:"Link",
            title:"Home",
            path:"/",
        },
        {
            type:"Link",
            title:"About",
            path:"/about",
        },
        ],
    })
     {
        return (
            <FooterColStyles>
              <h2 className="heading">{heading}</h2>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    {item.type === 'Link' ? (
                      <Link to={item.path}>{item.title}</Link>
                    ) : (
                      <a href={item.path} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </FooterColStyles>
          );
        }
