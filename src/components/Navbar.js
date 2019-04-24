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
    from: { transform: 'translate3d(-960px,0 ,0)' },
    enter: { transform: 'translate3d(0,0 ,0)' },
    leave: { transform: 'translate3d(-960px,0 ,0)' }
  });
  let windowWidth;

  if (typeof window !== `undefined`) {
    windowWidth = window.innerWidth;
  }

  const mobileToggle = () => {
    if (typeof window !== `undefined`) {
      windowWidth = window.innerWidth;
    }

    if (windowWidth < 960) {
      setToggle(false);
    }
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      windowWidth = window.innerWidth;
    }

    if (windowWidth >= 960) {
      setToggle(true);
    }
  }, []);

  return (
    <StyledNav>
      <NavContainer>
        <Link to="/">back</Link>
        {/* <Hamburger toggle={() => setToggle(!toggle)} />
        <>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <NavLinks style={props} key={key}>
                  <Link onClick={mobileToggle} to="/">
                    Home
                  </Link>
                  <Link onClick={mobileToggle} to="/#work">
                    Work
                  </Link>
                  <Link onClick={mobileToggle} to="/about">
                    About
                  </Link>
                  <Link onClick={mobileToggle} to="/#contact">
                    Contact
                  </Link>
                </NavLinks>
              )
          )}
        </>

        <img src={logo} alt="Ryan Walker Logo" /> */}
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
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12);
  ${above.lg`
    flex-direction: row;
    background: none;
    width: 100%;
    position: static;
    color: ${darkGrey}
    box-shadow: none;
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
`;

export default Navbar;
