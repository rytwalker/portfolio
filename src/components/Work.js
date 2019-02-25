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
      'Aside from coding, I spend a night of my week hosting a pub quiz at a local restaurant. After realizing that there is no good way to keep track of teams.',
    images: [`${project_img_1}, ${project_img_2}`],
    techStack: ['React', 'Redux', 'Postgres', 'Node', 'Express'],
    links: ['https://github.com', 'https://netlify.com']
  },
  {
    title: 'Lambda Treasure Hunt',
    description:
      'This project was a week-long MUD treasure hunt where we competed against each other to collect the most gold. We were tasked with writing traversal algorithms to discover nodes on the map and search algorithms to find specific paths.',
    images: [`${project_img_2}`],
    techStack: ['React', 'Context API', 'Graphs'],
    links: ['https://github.com', 'https://netlify.com']
  },
  {
    title: 'Daily Pages',
    description:
      'This is a note taking app that utililzes a morning pages routine. In each draft there is a timer to countdown... etc. etc.',
    images: [`${project_img_3}, ${project_img_2}, ${project_img_1}`],
    techStack: ['React', 'Redux', 'Postgres', 'Node', 'Express'],
    links: ['https://github.com', 'https://netlify.com']
  }
];

class Work extends Component {
  render() {
    return (
      <StyledWork id="work">
        <h2>
          Work<span>(hover)</span>
        </h2>
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
