import React, { Component } from 'react';
import styled from 'styled-components';
import Project from './Project';
import project_img_1 from '../img/suzies-scores-desktop.png';
import project_img_2 from '../img/treasure-hunt.png';
import project_img_3 from '../img/daily-pages.png';

const projects = [
  {
    title: "Suzie's Scores",
    description:
      'Aside from coding, I spend a night of my week hosting a pub quiz at a local restaurant. After realizing that there is no good way to keep track of teams, I decided to make my own! This little app gives teams the ability to see the overall leaders in pub quiz history. It also gives stats for individual teams. It uses React on the front-end and a Django REST-API on the back-end.',
    images: [`${project_img_1}`],
    techStack: ['React', 'Redux', 'Postgres', 'Django'],
    links: [
      'https://github.com/rytwalker/scores-client',
      'https://app.netlify.com/sites/sharp-mccarthy-8025d0/overview'
    ]
  },
  {
    title: 'Lambda Treasure Hunt',
    description:
      'This project was part of a week-long MUD challenge at Lambda School. This app used different graph traversal algorithms in order to navigate the map.',
    images: [`${project_img_2}`],
    techStack: ['React', 'Context API', 'Graphs'],
    links: ['https://github.com/rytwalker/treasure-hunt', 'https://netlify.com']
  },
  {
    title: 'Daily Pages',
    description:
      "This is a note taking app build with a React and Redux front-end. It utilizes a Node/Express back end with a postgres database. Originally made for a Lambda School project, I've redsigned some aspects of it and included new features.",
    images: [`${project_img_3}`],
    techStack: ['React', 'Redux', 'Postgres', 'Node', 'Express'],
    links: [
      'https://github.com/rytwalker/daily-pages-frontend/tree/master/src',
      'https://app.netlify.com/sites/practical-austin-03969b/overview'
    ]
  }
];

class Work extends Component {
  render() {
    return (
      <StyledWork id="work">
        <h2>Work</h2>
        {projects.map(project => (
          <Project project={project} key={project.title} />
        ))}
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
    /* font-style: italic; */
    text-transform: uppercase;
    font-size: 3.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    span {
      font-size: 1.2rem;
      font-weight: 700;
      color: #8fdfde;
    }
  }
`;

export default Work;
