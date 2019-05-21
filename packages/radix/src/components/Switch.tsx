import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
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

const SwitchWrapper = styled('label')<SpaceProps>(
  css({
    position: 'relative',
    display: 'inline-block',
    width: 6,
    height: 3,
    boxSizing: 'content-box',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  }),
  space
);

const Input = styled('input')({
  appearance: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  outline: 'none',
  margin: 0,
  opacity: 0,
});

const FakeSwitch = styled('div')(props =>
  css({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    cursor: 'pointer',
    '&::before': {
      content: `''`,
      display: 'block',
      height: 1,
      width: '100%',
      backgroundColor: 'grays.3',
      borderRadius: 9999,
      transition: 'background-color 100ms ease-out',
    },
    '&::after': {
      content: `''`,
      position: 'absolute',
      width: 3,
      height: 3,
      top: 0,
      left: 0,
      borderRadius: 9999,
      backgroundColor: 'grays.4',
      transition: 'transform 100ms ease-out',
    },
    [`${Input}:checked + &`]: {
      '&::before': {
        backgroundColor: 'blues.3',
      },
      '&::after': {
        backgroundColor: 'blues.4',
        transform: `translateX(${themeGet('space.4')(props)})`,
      },
    },
    [`${Input}:disabled + &`]: {
      cursor: 'not-allowed',
      '&::before': {
        backgroundColor: 'grays.2',
      },
      '&::after': {
        backgroundColor: 'grays.3',
      },
    },
    [`${Input}:disabled:checked + &`]: {
      cursor: 'not-allowed',
      '&::before': {
        backgroundColor: 'blues.2',
      },
      '&::after': {
        backgroundColor: 'blues.3',
      },
    },
  })
);
