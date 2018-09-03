import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const BackgroundImage = (props) => (
  <Container
    style={{
      backgroundImage: `url(${props.src})`
    }}>
  </Container>
);

export default BackgroundImage;
