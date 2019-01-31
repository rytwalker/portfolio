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
            This is an app that does stuff and things check out the site here
            and check out the repo on gittub it uses react, redux, postgres,
            node, express backend. It has a full API backend that performs CRUD
            thingys.
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
    color: #fff;
    padding: 1rem;
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
  }
  p {
    color: #485460;
    padding: 1rem;
    border-radius: 2px;
    font-size: 1.4rem;
    margin-left: auto;
    .links {
      border-top: 5px solid #485460;
      padding-top: 1rem;
      margin-top: 1rem;
    }
  }
`;

export default Description;
