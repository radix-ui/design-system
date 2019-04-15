import React from "react";
import styled from "styled-components";
import { space, themeGet } from "styled-system";
import { theme, themeColor } from "../theme";

export function RadioGroup({ as: Component = "div", children, value, onChange, name, ...props }) {
  const isControlled = Boolean(value);

  return (
    <Component {...props}>
      {React.Children.map(children, radio =>
        React.cloneElement(radio, {
          name,
          onChange,
          ...(isControlled ? { checked: value === radio.props.value } : {}),
        })
      )}
    </Component>
  );
}

const RadioWrapper = styled.label`
  position: relative;

  ${space}
`;

RadioWrapper.defaultProps = { theme };

const Input = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  outline: none;
  margin: 0;
`;

const TextWrapper = styled.span`
  line-height: ${themeGet("space.5")};
  font-family: ${themeGet("fonts.normal")};
  font-size: ${themeGet("fontSizes.2")};
  margin-left: ${themeGet("space.1")};
  margin-right: ${themeGet("space.3")};
`;

TextWrapper.defaultProps = { theme };

const FakeRadio = styled.div`
  width: ${themeGet("space.4")};
  height: ${themeGet("space.4")};
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px ${themeColor("grays.3")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: transparent;

  &::before {
    content: "";
    width: 50%;
    height: 50%;
    color: inherit;
    border-radius: inherit;
    background-color: currentColor;
  }

  input:checked + & {
    color: ${themeColor("blues.4")};
  }

  input:hover + & {
    box-shadow: inset 0 0 0 1px ${themeColor("grays.4")};
  }

  input:focus + & {
    box-shadow: inset 0 0 0 1px ${themeColor("blues.4")};
  }
`;

FakeRadio.defaultProps = { theme };

export function Radio({ children, value, defaultChecked, checked, onChange, name, ...props }) {
  return (
    <RadioWrapper {...props}>
      <Input
        type="radio"
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        checked={checked}
        name={name}
      />
      <FakeRadio />
      {children && <TextWrapper>{children}</TextWrapper>}
    </RadioWrapper>
  );
}

Radio.defaultProps = { theme };
