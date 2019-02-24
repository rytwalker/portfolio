import React from 'react';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Navbar />
        <h1>About us</h1>
        <p>
          My name is Ryan Walker and I am a full-stack developer from
          Youngstown, Ohio. I started my journey as a developer in the fall of
          2017. Ever since starting my development journey, I have fallen more
          in love with the process. I am currently enrolled at Lambda School. I
          love JavaScript and learn more about it everyday. I also know: HTML,
          CSS, LESS, Python, and C. And like using frameworks like React and
          Django.{' '}
        </p>
        <p>
          Development is a pivot for me and I love the connection it has to
          everything. I graduated with a BA in Sociology and Psychology. I then
          served in in AmeriCorps and worked for non-profits before running off
          and joining a band. I also play music in a couple of musical projects:
          The Lighthouse and the Whaler and Poro.{' '}
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
