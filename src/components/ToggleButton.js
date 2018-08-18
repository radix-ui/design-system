import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  height: ${theme.SPACING_500};
  vertical-align: middle;
  flex-grow: 1;
  flex-basis: 0;
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${theme.GRAY_300};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    color: ${theme.GRAY_900};
    cursor: default;
    z-index: 3 !important;
  }
`;

const Dummy = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  appearance: none;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  border-radius: ${theme.BORDERRADIUS_100};
  color: ${theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  line-height: 1;
  outline: none;
  user-select: none;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }
`;

const ToggleButton = (props) => (
  <Wrapper>
    <Radio
      {...props}
      type="radio"
      name="{props.group}"
    />
    <Dummy>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
        <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 4)"/>
        <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
      </svg>
    </Dummy>
  </Wrapper>
);

export default ToggleButton;
