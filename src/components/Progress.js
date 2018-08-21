import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Outer = styled.div`
  background-color: ${theme.GRAY_300};
  width: 100%;
  border-radius: 9999px;
  overflow: hidden;

  ${p => p.size1 && css`
    height: ${theme.SPACING_100};
  `}

  ${p => p.size2 && css`
    height: ${theme.SPACING_200};
  `}

  ${p => p.size3 && css`
    height: ${theme.SPACING_500};
  `}
`;

const Inner = styled.div`
  background-color: ${theme.GRAY_400};
  transition-property: width;
  transition-duration: 300ms;
  transition-timing-function: ease;
  height: 100%;

  @keyframes stripes {
    100% {
      transform: translateX(${theme.SPACING_300});
    }
  }

  ${p => p.blue && css`
    position: relative;
    background-color: ${theme.BLUE_500};
    overflow: hidden;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: -100%;
      width: 200%;
      height: 100%;
      background-image: linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, .08) 33%,
        rgba(0,0, 0, .08) 66%,
        transparent 66%
      );
      background-size: ${theme.SPACING_300} ${theme.SPACING_200};
      animation: stripes 500ms linear infinite;
    }
  `}
`;

const Progress = (props) => (
  <Outer {...props}>
    <Inner
      {...props}
      role="progressbar"
      aria-valuenow={props.currentValue}
      aria-valuemin={props.minValue}
      aria-valuemax={props.maxValue}
      style={{
        width: `${props.currentValue}%`
      }}
    ></Inner>
  </Outer>
);

Progress.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2'
  ])
}

Progress.defaultProps = {
  size: 'size2',
  currentValue: '0',
  minValue: '0',
  maxValue: '100',
};

export default Progress;
