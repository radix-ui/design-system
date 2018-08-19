import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Outer = styled.div`
  background-color: ${theme.GRAY_300};
  width: 100%;
  height: ${theme.SPACING_200};
  border-radius: 9999px;
  overflow: hidden;
`;

const Inner = styled.div`
  background-color: ${theme.GRAY_400};
  transition-property: width;
  transition-duration: 300ms;
  transition-timing-function: ease;
  height: 100%;
`;

const Progress = () => (
  <Outer>
    <Inner></Inner>
  </Outer>
);

Progress.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2'
  ])
}

Progress.defaultProps = {
  size: 'size2'
};

export default Progress;
