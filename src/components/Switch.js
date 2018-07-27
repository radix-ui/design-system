import React from 'react';
import styled from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  display: block;
  width:  ${theme.SPACING_600};
  height: ${theme.SPACING_100};
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${theme.BLUE_400};
  }

  &:checked + div::before {
    transform: translateX(${theme.SPACING_400});
    background-color: ${theme.BLUE_500};
  }
`;

const Dummy = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.GRAY_400};
  border-radius: 9999px;
  transition: background-color 100ms ease;

  &::before {
    position: absolute;
    content: "";
    height: ${theme.SPACING_300};
    width: ${theme.SPACING_300};
    left: 0;
    bottom: -5px;
    background-color: ${theme.GRAY_500};
    transition: transform 100ms ease;
    border-radius: 50%;
  }
`;

const Switch = (props) => (
  <Wrapper>
    <Checkbox
      {...props}
      type="checkbox"
    />
    <Dummy />
  </Wrapper>
);

export default Switch;
