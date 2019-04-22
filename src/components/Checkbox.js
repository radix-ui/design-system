import React from 'react';
import styled from 'styled-components';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { space, themeGet } from 'styled-system';
import { themeColor } from '../theme';

const CheckboxWrapper = styled.label`
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

const FakeCheckbox = styled.div`
  width: ${themeGet('space.3')};
  height: ${themeGet('space.3')};
  border-radius: ${themeGet('radii.1')};
  box-shadow: inset 0 0 0 1px ${themeColor('grays.3')};
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  color: transparent;

  ${Input}:hover + & {
    box-shadow: inset 0 0 0 1px ${themeColor('grays.4')};
  }

  ${Input}:focus + & {
    box-shadow: inset 0 0 0 1px ${themeColor('blues.4')};
  }

  ${Input}:checked + & {
    background-color: ${themeColor('blues.4')};
    box-shadow: inset 0 0 0 1px ${themeColor('blues.4')};
    color: ${themeColor('white')};
  }
`;

const CheckedIcon = styled.svg`
  display: block;
`;

// eslint-disable-next-line
const spacePropNames = Object.keys(space.propTypes);

export function Checkbox({ children, ...props }) {
  const spaceProps = pick(props, spacePropNames);
  const inputProps = omit(props, spacePropNames);

  return (
    <CheckboxWrapper {...spaceProps}>
      <Input type="checkbox" {...inputProps} />
      <FakeCheckbox>
        <CheckedIcon
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M11.5 3.5L6.5 11.5L3.5 8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </CheckedIcon>
      </FakeCheckbox>
      {children && <TextWrapper>{children}</TextWrapper>}
    </CheckboxWrapper>
  );
}
