import React, { Component } from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import Footer from '../components/Footer';

class App extends Component {
  state = { navOpen: false };

  componentDidMount() {
    if (window.innerWidth > 768) {
      this.setState({ navOpen: true });
    }
  }

  // componentDidUpdate(prevState) {
  //   const { navOpen } = this.state;
  //   if (window.innerWidth <= 768 && prevState.navOpen !== navOpen) {
  //     this.setState({ navOpen: false });
  //   }
  // }

  toggleNav = () => this.setState({ navOpen: !this.state.navOpen });

  render() {
    const { navOpen } = this.state;
    return (
      <div style={{ scrollBehavior: 'smooth' }}>
        <Layout>
          <Container>
            <Navbar open={navOpen} toggle={this.toggleNav} />
            <Banner />
            <Work />
          </Container>
          <About />
          <Contact />

          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
