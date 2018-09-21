import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Container = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;

  ${props => props.ratio_169 && css`
    padding-bottom: 56.25%;
  `}
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AspectRatio = (props) => (
  <Container {...props}>
    <Content {...props}>
      {props.children}
    </Content>
  </Container>
);

export default AspectRatio;
