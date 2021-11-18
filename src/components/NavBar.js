import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

//nav bar style and function from, root folder in GlobalStyle.js
const NavBarStyle = styled.div`
    background: var(--blue);
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    position: fixed;
     .logo {
        color: var(--white);
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        font-family: 'Roboto', sans-serif;
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
            color: var(--blue);
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
    const[showNav, setShowNav] = React.useState(false);
    return(
        <NavBarStyle>
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
                    <NavLink to="/" exact onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/resume"onClick={() => 
                    setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0} >Resume</NavLink>
                </li>
            </ul>
        </NavBarStyle>
    )
}