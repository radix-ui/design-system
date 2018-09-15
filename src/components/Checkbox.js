import React from 'react';
import styled from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  width: ${theme.SPACING_400};
  height: ${theme.SPACING_400};
  vertical-align: middle;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  & + div {
    color: transparent;
  }

  &:checked + div {
    background-color: ${theme.BLUE_500};
    color: white;
    box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
  }
`;

const Dummy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-flex;
  border-radius: ${theme.BORDERRADIUS_100};
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }
`;

const Checkbox = (props) => (
  <Wrapper>
    <Input
      {...props}
      type="checkbox"
      name={props.group}
    />
    <Dummy {...props}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path d="M11.5 3.5L6.5 11.5L3.5 8.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Dummy>
  </Wrapper>
);

export default Checkbox;
