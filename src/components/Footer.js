import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = props => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2rem 0',
        margin: '0 auto',
        background: '#3F3F3F',
        color: '#fefefe'
      }}
    >
      <div className="container" style={{ width: '50%', margin: '0 auto' }}>
        <SocialLinks contact />
        <p style={{ padding: '1rem 0', fontSize: '1.2rem' }}>
          © 2019 by Ryan Walker
        </p>
      </div>
    </footer>
  );
};

export default Footer;
