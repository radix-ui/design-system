import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  width: ${theme.SPACING_400};
  height: ${theme.SPACING_400};
  vertical-align: middle;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${theme.BLUE_500};
  }
`;

const Dummy = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${theme.SPACING_200};
  height: ${theme.SPACING_200};
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Radio = ({ group, onClick, onChange, ...otherProps }) => (
  <Wrapper>
    <Input
      {...otherProps}
      type="radio"
      name={group}
      onClick={onClick}
      onChange={onChange}
    />
    <Dummy {...otherProps}></Dummy>
  </Wrapper>
);

export default Radio;
