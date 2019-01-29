import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

const Banner = props => {
  return (
    <StyledBanner>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <h1 style={props}>
            <span className="intro">Hello it's me,</span>
            <span className="first">Ryan</span>
            <span className="last">Walker</span>
          </h1>
        )}
      </Spring>
      <p className="tag">
        I am a full stack web developer based out of youngstown, ohio Here is a
        second line that says more!
      </p>
      <a href="#work">View My Work</a>{' '}
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding-top: 50px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
  h1 {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    .intro {
      font-weight: 18px;
      font-style: italic;
    }
    .first,
    .last {
      text-transform: uppercase;
      font-size: 6.8rem;
      line-height: 1;

      @media (max-width: 600px) {
        font-size: 6.2rem;
      }
    }
    .last {
      color: #8fdfde;
    }
  }
  .tag {
    margin-bottom: 3rem;
    font-size: 1.8rem;
    font-style: italic;
  }
  a {
    font-size: 1.6rem;
    color: #fff;
    background: #485460;
    width: 30%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.2s all;
    text-align: center;
    text-decoration: none;
    &:hover {
      color: #485460;
      background: transparent;
      border: 1px solid #485460;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export default Banner;
