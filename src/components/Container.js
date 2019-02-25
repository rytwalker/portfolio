import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainter>{children}</StyledContainter>;
};

const StyledContainter = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default Container;
