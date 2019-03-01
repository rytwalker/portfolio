import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { Link } from 'gatsby';
import { above, darkGrey, white, primary } from '../utilities';
import logo from '../img/logo.svg';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  let windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth >= 960) {
      setToggle(true);
    }
  }, []);
  return (
    <StyledNav>
      <NavContainer>
        <Hamburger toggle={() => setToggle(!toggle)} />
        <>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <NavLinks style={props} key={key}>
                  <Link to="/">Home</Link>
                  <Link to="/#work">Work</Link>
                  <Link to="/about/">About</Link>
                  <Link to="/#contact">Contact</Link>
                </NavLinks>
              )
          )}
        </>

        <img src={logo} alt="Ryan Walker Logo" />
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

const NavLinks = styled(animated.nav)`
  position: absolute;
  width: calc(100vw + 10%);
  top: 100%;
  left: -5%;
  text-align: left;
  display: flex;
  flex-direction: column;
  background: ${darkGrey};
  transform-origin: top;
  transition: all 300ms ease-out;
  ${above.lg`
    flex-direction: row;
    background: none;
    width: 100%;
    position: static;
    color: ${darkGrey}
  `}
  a,
  a:visited {
    color: ${white};
    padding: 2rem 3rem;
    text-decoration: none;
    font-size: 1.8rem;
    transition: all 0.2s;
    ${above.lg`
      color: ${darkGrey}
      padding: 0;
      margin: 0 3rem;
    `}
    &:hover {
      background: ${white};
      color: ${darkGrey};
      ${above.lg`
        color: ${white}
        background: ${primary};
      `}
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
