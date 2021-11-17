import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavBarStyle = styled.div`
    background-color: var(--dark-slate-grey);
    z-index: 100;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    display: inline-block;
`;

//NavLink from react router dom to create a link that is active when the user is on that page
export default function NavBar() {
    return(
        <NavBarStyle>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavBarStyle>
    )
}