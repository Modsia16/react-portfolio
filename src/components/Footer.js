import React from 'react'
import styled from 'styled-components'
import FooterCols from './FooterCols'
import PText from './PText'

const FooterStyle = styled.div`
width: 100%;
background: var(--blue);
color: var(--white);
padding: 2rem;
.container {
    display: flex;
    gap: 2rem;
}
.footer-col1 {
    flex: 2;
}
.footer-col2, 
.footer-col3, 
.footer-col4 {
    flex: 1;
}
.footer-col1-int {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}
.copyright {
    font-size: 0.5rem;
    text-align: center;
    padding: 0.5rem 0;
}
@media screen only screen and (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 0rem;
        & > * {
            margin-top: 2rem;
        }
    }
    .footer-col1 .para {
        max-width: 100%;
    }
    .copyright {
        .container {
            margin-top: 0rem;
        }
    }
}
`

export default function Footer() {
    return (
        <FooterStyle>
        <div>
            <div className="container">
                <div className="footer-col1">
                    <h1 className="footer-col1-int">CarilyWebDev by Carina Diaz</h1>
                    <PText>
                    Junior Web Developer from Northern California with a passion for learning and building.
                    </PText>
                </div>
                <div className="footer-col2">
                    <FooterCols
                    heading="Nav Links"
                    links={[
                        {
                        title:"Home",
                        path:"/",
                        type:"Link"
                        },
                        {
                        type:"Link",
                        title:"About",
                        path:"/about",
                        },
                        {
                        type:"Link",
                        title:"Portfolio",
                        path:"/projects",
                        },
                        {
                        type:"Link",
                        title:"Contact",
                        path:"/contact",
                        },
                    ]}
                />
                </div>
                <div className="footer-col3">
                    <FooterCols
                    heading="Contact info" 
                    links={
                        [
                            {
                                title:"carilywebdev@gmail.com",
                                path:"mailto:carilywebdev@gmail.com"
                            },
                            {
                                title:"Phone",
                                path:"Number"
                            },
                            {
                                title:"Mail",
                                path:"Mail"
                            },
                        ]
                    }/>
                </div>
                <div className="footer-col4">
                    <FooterCols
                        heading="Network" 
                        links={
                            [
                            {
                                title:"GitHub",
                                path:"https://github.com/Modsia16"
                            },
                            {
                                title:"Linkedin",
                                path:"https://www.linkedin.com/in/carina-diaz-a22009199/"
                            },
                            {
                                title:"Instagram",
                                path:"https://www.instagram.com/lynnecarina/"
                            },
                        ]
                    }
                    />
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <PText>@ 2021 - Designed by Carina Diaz</PText>
            </div>
        </div>
        </FooterStyle>
    )
}
