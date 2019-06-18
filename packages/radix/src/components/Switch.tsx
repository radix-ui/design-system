import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { margin, MarginProps } from '../system';
import themeGet from '@styled-system/theme-get';

type SwitchProps = MarginProps & ComponentProps<'input'>;

const marginPropNames = margin.propNames;

export const Switch: FC<SwitchProps> = ({ children, ...props }) => {
  const marginProps = pick(props, marginPropNames);
  const inputProps = omit(props, marginPropNames);

  return (
    <SwitchWrapper {...marginProps}>
      <Input type="checkbox" {...inputProps} />
      <FakeSwitch />
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled('label')<MarginProps>(
  css({
    position: 'relative',
    display: 'inline-block',
    width: 6,
    height: 3,
    boxSizing: 'content-box',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  }),
  margin
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
