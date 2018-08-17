import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const ToggleButtonGroup = styled.div`
  display: inline-flex;

  ${Wrapper}:first-child {
    background: purple;
  }

  ${Wrapper}:last-child {
    background: orange;
  }
`;

const Wrapper = styled.label`
  position: relative;
  display: block;
  padding: 0 ${theme.SPACING_200};
  min-width: ${theme.SPACING_500};
  height: ${theme.SPACING_500};

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
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_200};
  font-weight: 400;
  justify-content: center;
  line-height: 1;
  outline: none;
  pointer-events: auto;
  text-align: center;
  text-decoration: none;
  transition-property: all;
  transition-duration: 80ms;
  transition-timing-function: ease;
  user-select: none;
  white-space: nowrap;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${theme.GRAY_300};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_300};
    color: ${theme.BLUE_500};
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
`;

const ToggleButtons = (props) => (
  <ToggleButtonGroup>
    <Wrapper>
      <Radio
        {...props}
        type="radio"
        name="group"
      />
      <Dummy>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0H0" transform="translate(4.5 4.5)" stroke-linecap="round"/>
          <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 4)"/>
          <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
        </svg>
      </Dummy>
    </Wrapper>
    <Wrapper>
      <Radio
        {...props}
        type="radio"
        name="group"
      />
      <Dummy>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0H0" transform="translate(4.5 12.5)" stroke-linecap="round"/>
          <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 8)"/>
          <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
        </svg>
      </Dummy>
    </Wrapper>
    <Wrapper>
      <Radio
        {...props}
        type="radio"
        name="group"
      />
      <Dummy>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0H0" transform="translate(4.5 20.5)" stroke-linecap="round"/>
          <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 12)"/>
          <rect x="0.5" y="0.5" width="8" height="4" transform="translate(8 16)"/>
        </svg>
      </Dummy>
    </Wrapper>
  </ToggleButtonGroup>
);

export default ToggleButtons;
