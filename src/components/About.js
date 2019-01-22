import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import photo from '../img/professional_photo_small_bw_crop.png';
import SocialLinks from './SocialLinks';

const About = props => {
  return (
    <StyledAbout id="about">
      <Container>
        <div className="inner-container">
          <div className="about-left">
            <h2>About Me</h2>
            <p>
              My name is Ryan Walker and I am a full-stack developer from
              Youngstown, Ohio. I started my journey as a developer in the fall
              of 2017. Ever since starting my development journey, I have fallen
              more in love with the process. I am currently enrolled at Lambda
              School. I love JavaScript and learn more about it everyday. I also
              know: HTML, CSS, LESS, Python, and C. And like using frameworks
              like React and Django.{' '}
            </p>
            <p>
              Development is a pivot for me and I love the connection it has to
              everything. I graduated with a BA in Sociology and Psychology. I
              then served in in AmeriCorps and worked for non-profits before
              running off and joining a band. I also play music in a couple of
              musical projects: The Lighthouse and the Whaler and Poro.{' '}
            </p>
          </div>
          <div className="about-right">
            <img src={photo} alt="Ryan Walker" />
            <h4>Skills:</h4>
            <div className="skills-lists">
              <ol>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
              </ol>
              <ol>
                <li>Python</li>
                <li>Django</li>
                <li>C</li>
                <li>SQL</li>
              </ol>
            </div>
            <h4>Socials:</h4>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin: auto;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8vw), 0 100%);
  margin-bottom: -8vw;
  z-index: 10;
  background: #fff;
  @media (max-width: 768px) {
    background: #8fdfde;
    min-height: auto;
    padding: 50px 0;
  }
  .inner-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .about-left {
      background: #8fdfde;
      padding: 2rem;
      border-radius: 5px;
      @media (max-width: 768px) {
        border-radius: 0;
      }
      h2 {
        font-style: italic;
        font-size: 3.6rem;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 3rem;
        color: rgba(72, 84, 96, 1);
      }
      p:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
    .about-right {
      margin: 0 auto;
      padding: 2rem;
      @media (max-width: 768px) {
        margin: 0;
      }
      img {
        width: 100%;
        margin: auto 1rem;
        @media (max-width: 768px) {
          display: none;
        }
      }
      h4 {
        font-style: italic;
        font-size: 2.4rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 1rem 0;
      }
      .skills-lists {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        font-size: 1.6rem;
        margin-bottom: 3rem;
        li:before {
          content: '∞';
          padding-right: 5px;
          color: #8fdfde;

          @media (max-width: 768px) {
            color: #fff;
          }
        }
      }
    }
  }
`;
export default About;
