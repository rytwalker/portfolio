import React, { Component } from 'react';
import styled from 'styled-components';
import Project from './Project/Project';
import project_img_1 from '../img/suzies_scores_border.png';
import project_img_2 from '../img/treasure-hunt.png';
import project_img_3 from '../img/sj-arch.png';

class Work extends Component {
  render() {
    return (
      <StyledWork id="work">
        <h2>
          Work<span>(hover)</span>
        </h2>
        <Project image={project_img_1} />
        <Project image={project_img_2} />
        <Project image={project_img_3} />
      </StyledWork>
    );
  }
}

const StyledWork = styled.div`
  min-height: 100vh;
  padding-top: 50px;
  h2 {
    margin-bottom: 3rem;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
    font-size: 3.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.2rem;
      font-weight: 700;
      color: #8fdfde;
    }
  }
`;

export default Work;
