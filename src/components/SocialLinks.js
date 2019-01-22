import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ninvoke } from 'q';

const SocialLinks = ({ contact }) => {
  return (
    <StyledSocialLinks contact={contact}>
      <a href="https://github.com">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="https://github.com">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    </StyledSocialLinks>
  );
};

const StyledSocialLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a,
  a:visited {
    font-size: 2rem;
    color: ${props => (props.contact ? '#fefefe' : '#485460')};
    transition: all 0.2s;

    &:hover {
      color: #8fdfde;
    }
    @media (max-width: 768px) {
      font-size: 2.8rem;

      &:hover {
        color: #fefefe;
      }
    }
  }
`;

export default SocialLinks;
