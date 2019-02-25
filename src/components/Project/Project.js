import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { animated, Transition } from 'react-spring';
import project_img_1 from '../../img/suzies-scores-desktop.png';
import project_img_2 from '../../img/treasure-hunt.png';
import project_img_3 from '../../img/daily-pages.png';
import Icon from '../../utilities/Icon';

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
        <div className="project">
          <div className="arrow" onClick={this.toggle}>
            <Icon name="arrowRight" color="rgba(0,0,0, 0.6)" />
          </div>
          <div className="arrow left" onClick={this.toggleReverse}>
            <Icon name="arrowLeft" color="rgba(0,0,0, 0.6)" />
          </div>
          <Transition
            native
            reset
            unique
            items={this.state.index}
            from={{
              opacity: 0,
              transform: `translate3d(${reverse ? '-100%' : '100%'},0,0)`
            }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{
              opacity: 0,
              transform: `translate3d(${reverse ? '50%' : '-50%'},0,0)`
            }}
          >
            {index => pages[index]}
          </Transition>
        </div>
        <div className="bottom">
          <div className="description">
            <h3>Suzie's Scores</h3>
            <p>
              Aside from coding, I spend a night of my week hosting a pub quiz
              at a local restaurant. After realizing that there is no good way
              to keep track of teams'.
            </p>
          </div>
          <div className="tech">
            <span>tech: </span>React, Redux, Express, Node, Postgres
          </div>
          <div className="links">
            <a href="https://github.com">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
          </div>
        </div>
      </StyledProject>
    );
  }
}

const StyledProject = styled.div`
  display: grid;
  grid-auto-rows: 1fr, 1fr;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-bottom: 5rem;
  border-radius: 2px;
  /* overflow: hidden; */
  overflow: hidden;
  position: relative;
  .project {
    position: relative;
    height: 558px;
    display: block;
    border-radius: 2.5px;
    background: #e4e4e4;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.7);
    .arrow {
      width: 100px;
      position: absolute;
      right: 0;
      top: 50%;
      cursor: pointer;
      z-index: 1001;
    }
    .left {
      left: 0;
    }
    .img-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;

      img {
        transition: all 0.2s;
        width: 100%;
        height: auto;
        margin: 0 auto;
        display: block;
      }
    }
  }
  .left-links {
    margin-top: 100rem;
    position: absolute;
    bottom: 0;
    display: flex;
    .link {
      position: absolute;
      top: 0%;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      height: 100%;

      a,
      a:visited {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 3rem;
        width: 60%;
        padding: 1rem;
        color: #3f3f3f;
        background: rgba(143, 223, 222, 0.6);
        text-transform: uppercase;
        margin-bottom: 3rem;
        text-decoration: none;
        border-radius: 5px;
        transition: all 0.2s;

        &:hover {
          background: rgba(143, 223, 222, 1);
          ${'' /* box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.7); */}
        }
      }
    }
  }
  .bottom {
    ${'' /* background: #4b4b4b; */}
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .description {
      margin-bottom: 3rem;
      width: 100%;
      h3 {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 3rem;
        text-align: center;
      }
    }
    .tech {
      padding: 1rem 0;
      font-style: italic;
      font-size: 1.4rem;
      ${'' /* color: #fefefe; */}
      span {
        border-bottom: 3px solid #8fdfde;
        margin-right: 0.8rem;
      }
    }
    .links {
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
    }
  }
`;

export default Project;
