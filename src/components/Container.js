import React from 'react';
import styled from 'styled-components';
import { above } from '../utilities';

const Container = ({ children }) => {
  return <StyledContainter>{children}</StyledContainter>;
};

const StyledContainter = styled.div`
  width: 95%;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  ${above.sm`
    width: 100%;
  `}
`;

export default Container;
