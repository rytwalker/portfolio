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
            style={{ opacity: show ? 0.2 : 1 }}
            src={image}
            alt="Project B"
          />
          <div className="links">
            <div className="link" style={{ opacity: show ? 1 : 0 }}>
              <a href="http://github.com">Github</a>
              <a href="http://github.com">Set3</a>
            </div>

            <Description show={show} />
          </div>
        </div>
        <div className="bottom">
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
  align-items: center;
  grid-gap: 20px;
  width: 100%;
  margin-bottom: 10rem;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 20px 40px -10px rgba(0, 0, 0, 0.5);
  .project {
    position: relative;
    overflow: hidden;
    background: #8fdfde;
    img {
      transition: all 0.2s;
      width: 100%;
      display: block;
    }
  }
  .links {
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

      a {
        font-size: 3rem;
        padding: 2rem 0;
      }
    }
  }
  .bottom {
    background: #4b4b4b;
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    .tech {
      padding: 1rem 0;
      font-style: italic;
      font-size: 1.4rem;
      color: #fefefe;
      span {
        border-bottom: 3px solid #8fdfde;
        margin-right: 0.8rem;
      }
    }
    .links {
      a,
      a:visited {
        font-size: 2.5rem;
        color: #fefefe;
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
