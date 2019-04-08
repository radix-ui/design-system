import React from "react";
import styled from "styled-components";

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

export const BaseRadio = styled.input``;

export function Radio({ children, ...props }) {
  return (
    <label>
      <BaseRadio {...props} type="radio" />
      {children}
    </label>
  );
}
