import React from 'react';
import styled from 'styled-components';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { space, themeGet } from 'styled-system';
import { themeColor } from '../theme';
import { ToggleButton } from './ToggleButton';

export function RadioGroup({
  as: Component = 'div',
  children,
  value,
  onChange,
  name,
  ...props
}) {
  const isControlled = Boolean(value);

  return (
    <Component {...props}>
      {React.Children.map(children, radio => {
        const { type } = radio;
        if (type === 'input' || type === Radio || type === ToggleButton)
          return React.cloneElement(radio, {
            name,
            onChange,
            ...(isControlled ? { checked: value === radio.props.value } : {}),
          });
      })}
    </Component>
  );
}

const RadioWrapper = styled.label`
  position: relative;

  ${space}
`;

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
  opacity: 0;
  tap-highlight-color: rgba(0, 0, 0, 0);
`;

const TextWrapper = styled.span`
  line-height: ${themeGet('space.5')};
  font-family: ${themeGet('fonts.normal')};
  font-size: ${themeGet('fontSizes.2')};
  margin-left: ${themeGet('space.1')};
  margin-right: ${themeGet('space.3')};
  user-select: none;
  vertical-align: middle;
`;

const FakeRadio = styled.div`
  width: ${themeGet('space.4')};
  height: ${themeGet('space.4')};
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px ${themeColor('grays.3')};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 50%;
    height: 50%;
    color: inherit;
    border-radius: inherit;
    background-color: currentColor;
  }

  ${Input}:checked + & {
    color: ${themeColor('blues.4')};
  }

  ${Input}:hover + & {
    box-shadow: inset 0 0 0 1px ${themeColor('grays.4')};
  }

  ${Input}:focus + & {
    box-shadow: inset 0 0 0 1px ${themeColor('blues.4')};
  }
`;

// eslint-disable-next-line
const spacePropNames = Object.keys(space.propTypes);

export function Radio({ children, ...props }) {
  const spaceProps = pick(props, spacePropNames);
  const inputProps = omit(props, spacePropNames);

  return (
    <RadioWrapper {...spaceProps}>
      <Input type="radio" {...inputProps} />
      <FakeRadio />
      {children && <TextWrapper>{children}</TextWrapper>}
    </RadioWrapper>
  );
}
