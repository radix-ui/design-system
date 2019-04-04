import React from "react";
import styled from "styled-components";

export function RadioGroup({ children, value, onChange, name, ...props }) {
  const isControlled = Boolean(value);

  return (
    <div {...props}>
      {React.Children.map(children, radio =>
        React.cloneElement(radio, {
          name,
          onChange,
          ...(isControlled ? { checked: value === radio.props.value } : {}),
        })
      )}
    </div>
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
