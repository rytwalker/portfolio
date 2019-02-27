import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { above } from '../utilities';

const Banner = props => {
  return (
    <StyledBanner>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <h1 style={props}>
            <span className="name">Ryan Walker</span>
            <span className="tag">Is a Developer</span>
          </h1>
        )}
      </Spring>
      <a href="#work">View My Work</a>{' '}
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    height: 210px;
    max-width: 547px;
    margin: 0 auto 5rem;
    position: relative;
    ${above.sm`
      height: 317px;
    `}

    &::before {
      content: '';
      height: 100%;
      width: 60%;
      background: rgba(209, 52, 91, 0.8);
      border-radius: 50%;
      position: absolute;
      z-index: 5;
    }
    &::after {
      content: '';
      height: 100%;
      width: 60%;
      background: #8fdfde;
      border-radius: 50%;
      position: absolute;
      right: 0;
    }
    .name,
    .tag {
      text-transform: uppercase;
      line-height: 1;
      z-index: 100;
      font-size: 3.6rem;
      color: #070707;
      padding: 0 2.5rem;
      font-weight: 900;
      ${above.sm`
        font-size: 5.6rem;
      `}
    }
    .tag {
      color: #efefef;
      font-size: 2.8rem;
      font-weight: 400;
      ${above.sm`
        font-size: 3.8rem;
      `}
    }
  }
  a {
    font-size: 1.8rem;
    color: #fff;
    background: #485460;
    font-weight: 400;
    /* width: 75%; */
    max-width: 320px;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.2s all;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    ${above.sm`
        width: 100%;
      `}
    &:hover {
      color: #485460;
      background: transparent;
      border: 1px solid #485460;
    }
  }
`;

export default Banner;
