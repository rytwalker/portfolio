import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Work from '../components/Work';
import Footer from '../components/Footer';

const App = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <animated.div style={props}>
      <Layout>
        <Container>
          <Banner />
          <Work />
        </Container>
        <Contact />
        <Footer />
      </Layout>
    </animated.div>
  );
};

export default App;
