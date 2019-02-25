import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { animated } from 'react-spring';
import project_img_1 from '../img/suzies-scores-desktop.png';
import project_img_2 from '../img/treasure-hunt.png';
import project_img_3 from '../img/daily-pages.png';
import Carousel from './Carousel';

const pages = [
  style => (
    <animated.div className="img-container" style={{ ...style }}>
      <img src={project_img_1} alt="second" />
    </animated.div>
  ),
  style => (
    <animated.div className="img-container" style={{ ...style }}>
      <img src={project_img_2} alt="second" />
    </animated.div>
  ),
  style => (
    <animated.div className="img-container" style={{ ...style }}>
      <img src={project_img_3} alt="third" />
    </animated.div>
  )
];

class Project extends Component {
  state = { index: 0, reverse: false };

  toggle = e =>
    this.setState(prevState => ({
      index: prevState.index === 2 ? 0 : prevState.index + 1,
      reverse: false
    }));

  toggleReverse = e =>
    this.setState(prevState => ({
      index: prevState.index === 0 ? 2 : prevState.index - 1,
      reverse: true
    }));

  render() {
    const { reverse } = this.state;

    return (
      <StyledProject>
        <Carousel pages={pages} />
        <ProjectDescription>
          <ProjectBlurb>
            <ProjectHeading>Suzie's Scores</ProjectHeading>
            <p>
              Aside from coding, I spend a night of my week hosting a pub quiz
              at a local restaurant. After realizing that there is no good way
              to keep track of teams'.
            </p>
          </ProjectBlurb>
          <ProjectTech>
            <span>tech: </span>React, Redux, Express, Node, Postgres
          </ProjectTech>
          <ProjectLinks>
            <a href="https://github.com">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
          </ProjectLinks>
        </ProjectDescription>
      </StyledProject>
    );
  }
}

const ProjectDescription = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProjectBlurb = styled.div`
  margin-bottom: 3rem;
  width: 100%;
`;

const ProjectHeading = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectTech = styled.div`
  padding: 1rem 0;
  font-style: italic;
  font-size: 1.4rem;
  ${'' /* color: #fefefe; */}
  span {
    border-bottom: 3px solid #8fdfde;
    margin-right: 0.8rem;
  }
`;

const ProjectLinks = styled.div`
  a,
  a:visited {
    font-size: 2.5rem;
    color: #4b4b4b;
    transition: all 0.2s;
    &:hover {
      color: #8fdfde;
    }
    &:first-child {
      margin-right: 3rem;
    }
  }
`;

const StyledProject = styled.div`
  display: grid;
  grid-auto-rows: 1fr, 1fr;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-bottom: 5rem;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export default Project;
