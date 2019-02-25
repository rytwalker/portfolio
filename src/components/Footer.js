import React from 'react';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';
import { lightGrey, grey } from '../utilities';

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${lightGrey};
  font-weight: 700;
  text-transform: uppercase;
  color: ${grey};
`;

const Footer = props => {
  return (
    <StyledFooter>
      {/* <SocialLinks contact /> */}
      <p style={{ padding: '1rem 0', fontSize: '1.2rem' }}>
        © 2019 by Ryan Walker
      </p>
    </StyledFooter>
  );
};

export default Footer;
