import React from "react";
import styled, { css } from "styled-components";
import { themeGet } from "styled-system";
import { theme, themeColor } from "../theme";

const Wrapper = styled.label`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  height: ${themeGet("space.5")};
  min-width: ${themeGet("space.5")};
  position: relative;

  ${p =>
    p.left &&
    css`
      &:hover {
        z-index: 3;
      }
    `}

  ${p =>
    p.middle &&
    css`
      margin-left: -1px;
      z-index: 1;

      &:hover {
        z-index: 3;
      }
    `}

  ${p =>
    p.right &&
    css`
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
    background-color: ${themeColor("blues.0")};
    box-shadow: inset 0 0 0 1px ${themeColor("blues.2")};
    color: ${themeColor("blues.5")};
    cursor: default;
    z-index: 3;
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
  font-family: ${themeGet("fonts.normal")};
  font-size: ${themeGet("fontSizes.3")};
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  appearance: none;
  box-shadow: inset 0 0 0 1px ${themeColor("grays.3")};
  border: none;
  color: ${themeColor("grays.5")};
  cursor: pointer;
  flex-shrink: 0;
  justify-content: center;
  outline: none;
  user-select: none;

  &:hover {
    box-shadow: inset 0 0 0 1px ${themeColor("grays.4")};
  }

  ${p =>
    p.left &&
    css`
      border-top-left-radius: ${themeGet("radii.1")};
      border-bottom-left-radius: ${themeGet("radii.1")};
    `}

  ${p =>
    p.right &&
    css`
      border-top-right-radius: ${themeGet("radii.1")};
      border-bottom-right-radius: ${themeGet("radii.1")};
    `}
`;

export const ToggleButton = ({ children, group, onClick, onChange, ...otherProps }) => (
  <Wrapper {...otherProps}>
    <Radio {...otherProps} type="radio" name={group} onClick={onClick} onChange={onChange} />
    <Dummy {...otherProps}>{children}</Dummy>
  </Wrapper>
);

ToggleButton.defaultProps = { theme };
