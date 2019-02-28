import React, { Component } from 'react';
// import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Work from '../components/Work';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div style={{ scrollBehavior: 'smosoth' }}>
        <Layout>
          <Container>
            <Banner />
            <Work />
          </Container>
          {/* <About /> */}
          <Contact />

          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
