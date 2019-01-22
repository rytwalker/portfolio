import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Description from './Description';

class Project extends Component {
  state = { show: false };

  toggleOn = () => this.setState({ show: true });
  toggleOff = () => this.setState({ show: false });

  render() {
    const { show } = this.state;
    const { image } = this.props;
    return (
      <StyledProject>
        <div
          className="project"
          onMouseEnter={this.toggleOn}
          onMouseLeave={this.toggleOff}
        >
          <img
            style={{ opacity: show ? 0.4 : 1 }}
            src={image}
            alt="Project B"
          />
          <Description show={show} />
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
      </StyledProject>
    );
  }
}

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  grid-gap: 20px;
  width: 100%;
  margin-bottom: 10rem;
  .project {
    position: relative;
    grid-column-start: span 3;
    overflow: hidden;
    background: #8fdfde;
    img {
      transition: all 0.2s;
      width: 100%;
      display: block;
    }
  }
  .tech {
    padding: 1rem 0;
    font-style: italic;
    font-size: 1.4rem;
    span {
      border-bottom: 3px solid #8fdfde;
      margin-right: 0.8rem;
    }
  }
  .links {
    a,
    a:visited {
      font-size: 2.5rem;
      color: #485460;
      transition: all 0.2s;
      &:hover {
        color: #8fdfde;
      }
      &:first-child {
        margin-right: 3rem;
      }
    }
  }
`;

export default Project;
