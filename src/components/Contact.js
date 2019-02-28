import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './Container';
import ContactForm from './ContactForm';
import { Heading } from '../elements';
import { darkGrey } from '../utilities';
// import SocialLinks from './SocialLinks';

class Contact extends Component {
  state = {};
  render() {
    return (
      <StyledContact id="contact">
        <Container>
          <Heading>Contact</Heading>
          {/* <div className="grid"> */}
          <ContactForm />
          {/* <p>
              Thanks for sticking around xthis long. Get a hold of me if you need
              anything! I'm currently looking for freelance opportunities and
              remote work. If you have any leads or just want to chat about
              something get a hold of me!
              <SocialLinks contact />
            </p>
          </div> */}
        </Container>
      </StyledContact>
    );
  }
}

const StyledContact = styled.div`
  background: ${darkGrey};
  color: #fefefe;
  min-height: 100vh;
  padding-top: 20px;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    @media (max-width: 760px) {
      width: 90%;
      margin: 0 auto;
      grid-template-columns: 1fr;
    }
  }

  p {
    margin-bottom: 3rem;
  }
`;

export default Contact;
