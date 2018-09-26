import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Container = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;

  ${props => props.ratio_169 && css`
    padding-bottom: 56.25%;
  `}
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const AspectRatio = (props) => (
  <Container {...props}>
    <Content {...props}>
      {props.children}
    </Content>
  </Container>
);

export default AspectRatio;
