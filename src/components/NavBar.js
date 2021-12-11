import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

//nav bar style and function from, root folder in GlobalStyle.js
const NavBarStyle = styled.div`
    background: var(--blue);
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    padding: 5px 0 0 0;
    position: fixed;
     .logo {
        color: var(--white);
        padding: 0 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-align: Left;
        font-family: 'Roboto', sans-serif;
        display: inline-block;
    }
    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        display: inline-block;
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
}
    .mobile-menu-icon {
        position: absolute;
        right: 0rem;
        top: 1rem;
        width: 3rem;
        cursor: pointer;
        display: none;
        outline: none;
        * {
            pointer-events: none;
        }
    }
    .closeNavIcon {
        display: none;
    }
    @media only screen and (max-width: 768px) {
        padding: 0;
        .hide-item {
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon {
            display: block;
            color: var(--white);
        }
        .navItems {
            --top: 1rem;
            transition: 0.3s transform ease-in-out;
            background: var(--blue);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                color: var(--white);
                * {
                    pointer-events: none;
                }
            }
                li {
                    display: block;
                    margin-bottom: 1rem;
                }
            }
        }
`;

//NavLink from react router dom to create a link that is active when the user is on that page
export default function NavBar() {
    //add mobile screen function to the navbar to toggle, tab for key down event and hide items after clicked
    const [showNav, setShowNav] = useState(false);
    return (
   <NavBarStyle>
            <h1 className="logo">
                <p>CarilyWebDev</p>
            </h1>
            <div className="mobile-menu-icon" onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}>
                <MdMenu />
            </div>
            <ul className={!showNav ? "navItems hide-item" : "navItems"}>
                <div className="closeNavIcon" onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}>
                    <MdClose />
                </div>
                <li>
                    <Link to="/" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>About Me</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>Contact</Link>
                </li>
                <li>
                    <Link to="/resume"onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0} >Resume</Link>
                </li>
            </ul>
        </NavBarStyle>
    )
}