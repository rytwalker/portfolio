import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

const Description = ({ show }) => {
  return (
    <Spring
      from={{ transform: show ? 'translateX(360px)' : 'translateX(0px)' }}
      to={{ transform: show ? 'translateX(0px)' : 'translateX(360px)' }}
    >
      {props => (
        <StyledDescription style={props}>
          <h3>Suzie's Scores</h3>
          <p>
            Aside from coding, I spend a night of my week hosting a pub quiz at
            a local restaurant. After realizing that there is no good way to
            keep track of teams' scores over a long period of time, I developed
            this simple score tracker that keeps statistics on hand for teams,
            as well as displays an all-time leader board.
          </p>
        </StyledDescription>
      )}
    </Spring>
  );
};

const StyledDescription = styled.div`
  position: absolute;
  top: 0%;
  right: 0;
  width: 50%;
  background: rgba(254,254,254, .85);
  height: 100%;
  overflow: hidden;
  }
  h3 {
    background: #3f3f3f;
    color: #fefefe;
    padding: 1rem;
    font-size: 2.8rem;
    text-align: center;
    ${'' /* text-transform: uppercase; */}
    font-weight: 400;
    ${'' /* font-style: italic; */}
  }
  p {
    color: #485460;
    padding: 2rem;
    border-radius: 2px;
    font-size: 1.8rem;
    margin-left: auto;
    .links {
      border-top: 5px solid #485460;
      padding-top: 1rem;
      margin-top: 1rem;
    }
  }
`;

export default Description;
