import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { Link } from 'gatsby';
import above, { Toggle, darkGrey, white } from '../utilities';
import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <StyledNav>
      <NavContainer>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Hamburger toggle={toggle} />

              {on && (
                <NavLinks>
                  <Link to="/">Home</Link>
                  <a href="#work">Work</a>
                  <Link to="/about/">About</Link>
                  <a href="#contact">Contact</a>
                </NavLinks>
              )}
              <img src={logo} alt="Ryan Walker Logo" />
            </>
          )}
        </Toggle>
      </NavContainer>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: ${white};
  margin: 0 auto 50px;
  box-shadow: 0 1px 3px -3px rgba(0, 0, 0, 0.3);
  z-index: 2000;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 95%;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;

const NavLinks = styled.nav`
  position: absolute;
  width: calc(100vw + 10%);
  top: 100%;
  left: -5%;
  text-align: left;
  display: flex;
  flex-direction: column;
  background: ${darkGrey};
  transform-origin: top;
  transition: transform 300ms ease-out;
  a,
  a:visited {
    color: ${white};
    padding: 2rem 3rem;
    text-decoration: none;
    font-size: 1.8rem;
    transition: all 0.2s;
    &:hover {
      background: ${white};
      color: ${darkGrey};
    }
  }
  /* a,
  a:vistied {
    color: #fff;
    margin-left: 0;
    padding: 2rem 3rem;
    opacity: 0;
    font-size: 3rem;
    transition: opacity 250ms ease-in-out 250ms;
  } */
  /* &:hover {
    border-bottom: none;
    border-top: none;
  } */
`;

export default Navbar;
