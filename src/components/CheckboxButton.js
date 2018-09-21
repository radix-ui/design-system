import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  vertical-align: middle;
  height: ${theme.SPACING_300};
  width: ${theme.SPACING_300};
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    color: ${theme.BLUE_500};
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
  display: inline-flex;
  line-height: 1;
  color: ${theme.GRAY_600};
  cursor: pointer;
  flex-shrink: 0;
  justify-content: center;
`;

const CheckboxButton = (props) => {
  const { children, group, ...nonChildrenProps } = props;
  return (
    <Wrapper
      {...nonChildrenProps}
    >
      <Checkbox
        type="checkbox"
        name={group}
        {...nonChildrenProps}
      />
      <Dummy
        {...nonChildrenProps}
      >
        {children}
      </Dummy>
    </Wrapper>
  );
};

export default CheckboxButton;
