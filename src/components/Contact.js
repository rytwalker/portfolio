import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './Container';
import ContactForm from './ContactForm';
import { Heading } from '../elements';
import { above, darkGrey, white } from '../utilities';

class Contact extends Component {
  state = {};
  render() {
    return (
      <StyledContact id="contact">
        <Container>
          <Heading>Contact</Heading>
          <ContactForm />
        </Container>
      </StyledContact>
    );
  }
}

const StyledContact = styled.div`
  background: ${darkGrey};
  color: ${white};
  padding: 7rem 0;
  ${above.lg`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  `}

  p {
    margin-bottom: 3rem;
  }
`;

export default Contact;
