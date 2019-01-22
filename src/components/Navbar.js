import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Navbar = ({ open, toggle }) => {
  return (
    <StyledNav>
      <Container>
        <h2>RW</h2>
        <nav style={{ transform: open ? 'scale(1, 1)' : 'scale(1, 0)' }}>
          <a style={{ opacity: open ? 1 : null }} href="#home">
            Home
          </a>
          <a style={{ opacity: open ? 1 : null }} href="#work">
            Work
          </a>
          <a style={{ opacity: open ? 1 : null }} href="#about">
            About
          </a>
          <a style={{ opacity: open ? 1 : null }} href="#contact">
            Contact
          </a>
        </nav>
        <div onClick={toggle} className="hamburger-container">
          <span className="hamburger" />
        </div>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  height: 50px;
  position: fixed;
  background: #fefefe;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;
  left: 0;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    h2 {
      font-size: 2.4rem;
    }
    nav {
      @media (max-width: 768px) {
        position: absolute;
        width: calc(100vh + 10%);
        top: 100%;
        left: -5%;
        text-align: left;
        display: flex;
        flex-direction: column;
        background: #485460;
        transform-origin: top;
        transition: transform 300ms ease-out;
      }
      a,
      a:visited {
        color: #485460;
        margin-left: 3rem;
        text-decoration: none;
        padding: 0 0.5rem;
        transition: all 0.2s;
        &:hover {
          background: #8fdfde;
          border-bottom: 5px solid #8fdfde;
          border-top: 5px solid #8fdfde;
          color: #fefefe;
        }
        @media (max-width: 768px) {
          color: #fff;
          margin-left: 0;
          padding: 2rem 3rem;
          opacity: 0;
          transition: opacity 250ms ease-in-out 250ms;

          &:hover {
            border-bottom: none;
            border-top: none;
          }
        }
      }
    }

    .hamburger-container {
      cursor: pointer;
      height: 3rem;
      padding: 1rem;
      position: relative;
      display: flex;
      align-items: center;
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
      width: 3rem;
      height: 3px;
      display: block;
      background: #485460;
      color: #485460;
      border-radius: 5px;
      position: relative;
    }
    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
    }

    .hamburger::before {
      bottom: 8px;
    }

    .hamburger::after {
      top: 8px;
    }
  }
`;

export default Navbar;
