import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './Container';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

class Contact extends Component {
  state = {};
  render() {
    return (
      <StyledContact id="contact">
        <Container>
          <h2>Contact Me</h2>
          {/* <div className="grid"> */}
          <ContactForm />
          {/* <p>
              Thanks for sticking around this long. Get a hold of me if you need
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
  background: #4b4b4b;
  color: #fefefe;
  min-height: 100vh;
  padding-top: 80px;

  h2 {
    font-style: italic;
    font-size: 3.6rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: #fefefe;
    padding: 1rem 0;
  }

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
