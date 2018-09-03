import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  vertical-align: middle;
  flex-grow: 1;
  flex-basis: 0;
  height: ${theme.SPACING_500};

  ${p => p.left && css`
    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.middle && css`
    margin-left: -1px;
    z-index: 1;

    &:hover {
      z-index: 3;
    }
  `}

  ${p => p.right && css`
    margin-left: -1px;
    z-index: 0;

    &:hover {
      z-index: 3;
    }
  `}
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${theme.BLUE_500};
    box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    color: white;
    cursor: default;
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
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_200};
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  appearance: none;
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  color: ${theme.GRAY_600};
  cursor: pointer;
  flex-shrink: 0;
  justify-content: center;
  line-height: 1;
  outline: none;
  user-select: none;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  ${p => p.left && css`
    border-radius: ${theme.BORDERRADIUS_100} 0 0 ${theme.BORDERRADIUS_100};
  `}

  ${p => p.right && css`
    border-radius: 0 ${theme.BORDERRADIUS_100} ${theme.BORDERRADIUS_100} 0;
  `}
`;

const ToggleButton = (props) => {
  const { children, group, ...nonChildrenProps } = props;
  return (
    <Wrapper
      {...nonChildrenProps}
    >
      <Radio
        type="radio"
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

export default ToggleButton;
