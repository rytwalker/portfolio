import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = props => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2rem 0',
        width: '50%',
        margin: '0 auto'
      }}
    >
      <SocialLinks />© 2019 by Ryan Walker
    </footer>
  );
};

export default Footer;
