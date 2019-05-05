import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { space, SpaceProps, themeGet } from 'styled-system';

type SwitchProps = SpaceProps & ComponentProps<'input'>;

// TODO: Styled System is missing some spacing props in `propTypes`
// https://github.com/styled-system/styled-system/issues/466
const spacePropNames = [
  ...Object.keys(space.propTypes || {}),
  'mx',
  'my',
  'px',
  'py',
];

export const Switch: FC<SwitchProps> = ({ children, ...props }) => {
  const spaceProps = pick(props, spacePropNames);
  const inputProps = omit(props, spacePropNames);

  return (
    <SwitchWrapper {...spaceProps}>
      <Input type="checkbox" {...inputProps} />
      <FakeSwitch />
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.label<SpaceProps>`
  position: relative;
  display: inline-block;
  width: ${themeGet('space.6')};
  height: ${themeGet('space.3')};
  box-sizing: content-box;

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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const FakeSwitch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    height: ${themeGet('space.1')};
    width: 100%;
    background-color: ${themeGet('colors.grays.3')};
    border-radius: 9999px;
    transition: background-color 100ms ease-out;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${themeGet('space.3')};
    height: ${themeGet('space.3')};
    top: 0;
    left: 0;
    border-radius: 9999px;
    background-color: ${themeGet('colors.grays.4')};
    transition: transform 100ms ease-out;
  }

  ${Input}:checked + & {
    &::before {
      background-color: ${themeGet('colors.blues.3')};
    }

    &::after {
      background-color: ${themeGet('colors.blues.4')};
      transform: translateX(${themeGet('space.4')});
    }
  }

  ${Input}:disabled + & {
    cursor: not-allowed;

    &::before {
      background-color: ${themeGet('colors.grays.2')};
    }

    &::after {
      background-color: ${themeGet('colors.grays.3')};
    }
  }

  ${Input}:disabled:checked + & {
    cursor: not-allowed;

    &::before {
      background-color: ${themeGet('colors.blues.2')};
    }

    &::after {
      background-color: ${themeGet('colors.blues.3')};
    }
  }
`;
