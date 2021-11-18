import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavBarStyle = styled.div`
    background: var(--blue);
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    position: fixed;
    h1 {
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
    }
    li {
        display: inline-block;
        border-right: 8px solid var(--blue);
        transition: 0.3s ease-in-out;
        list-style: none;
        &:hover {
            background: var(--light-blue);
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
`;

//NavLink from react router dom to create a link that is active when the user is on that page
export default function NavBar() {
    return(
        <NavBarStyle>
            <h1>CarilyWebDev</h1>
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/resume">Resume</NavLink>
                </li>
            </ul>
        </NavBarStyle>
    )
}