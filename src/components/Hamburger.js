import React from 'react';
import styled from 'styled-components';
import { above } from '../utilities';

const Hamburger = ({ toggle }) => {
  return (
    <HamburgerContainer onClick={toggle}>
      <StyledHamburger />
    </HamburgerContainer>
  );
};

const HamburgerContainer = styled.div`
  cursor: pointer;
  height: 3rem;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  ${above.lg`
    display: none;
  `}
`;

const StyledHamburger = styled.span`
  width: 3rem;
  height: 3px;
  display: block;
  background: #485460;
  color: #485460;
  border-radius: 5px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3rem;
    height: 3px;
    display: block;
    background: #485460;
    color: #485460;
    border-radius: 5px;
  }
  &::before {
    bottom: 8px;
  }

  &::after {
    top: 8px;
  }
`;

export default Hamburger;
