import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = (props) => (
  <Container
    style={{
      backgroundImage: `url(${props.src})`
    }}>
  </Container>
);

export default BackgroundImage;
