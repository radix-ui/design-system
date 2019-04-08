import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { theme, themeColor } from "../theme";
import { Flex } from "./Flex";
import { RadioGroup } from "./RadioGroup";

const Wrapper = styled.label`
  display: inline-flex;
  position: relative;
  flex-basis: 0;
  flex-grow: 1;

  z-index: ${props => props.checked && `1`};

  & + & {
    margin-left: -1px;
  }
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

const FakeRadio = styled.span`
  height: ${themeGet("space.5")};
  width: 100%;
  min-width: ${themeGet("space.5")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${themeGet("fonts.normal")};
  font-size: ${themeGet("fontSizes.2")};
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;

  box-shadow: inset 0 0 0 1px ${themeColor("grays.3")};
  color: ${themeColor("grays.5")};

  ${Wrapper}:first-child & {
    border-top-left-radius: ${themeGet("radii.1")};
    border-bottom-left-radius: ${themeGet("radii.1")};
  }

  ${Wrapper}:last-child & {
    border-top-right-radius: ${themeGet("radii.1")};
    border-bottom-right-radius: ${themeGet("radii.1")};
  }

  ${Radio}:checked + & {
    background-color: ${themeColor("blues.0")};
    box-shadow: inset 0 0 0 1px ${themeColor("blues.2")};
    color: ${themeColor("blues.5")};
    z-index: 1;
  }

  &:hover {
    box-shadow: inset 0 0 0 1px ${themeColor("grays.4")};
    z-index: 1;
  }
`;

FakeRadio.defaultProps = { theme };

export function ToggleButtonGroup(props) {
  return <RadioGroup as={Flex} {...props} />;
}

export const ToggleButton = ({ children, ...props }) => (
  <Wrapper>
    <Radio {...props} type="radio" />
    <FakeRadio>{children}</FakeRadio>
  </Wrapper>
);
