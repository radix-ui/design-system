import React, { FC, ComponentProps, ReactNode } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { space, SpaceProps } from 'styled-system';
import propTypes from '@styled-system/prop-types';

type CheckboxButton = SpaceProps &
  ComponentProps<'input'> & { children: ReactNode };

const spacePropNames = Object.keys(propTypes.space);

export const CheckboxButton: FC<CheckboxButton> = ({ children, ...props }) => {
  const spaceProps = pick(props, spacePropNames);
  const inputProps = omit(props, spacePropNames);

  return (
    <CheckboxWrapper {...spaceProps}>
      <Input type="checkbox" {...inputProps} />
      <FakeCheckbox>{children}</FakeCheckbox>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled('label')<SpaceProps>(
  {
    position: 'relative',
  },
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
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:hover': {
    cursor: 'pointer',
  },
});

const FakeCheckbox = styled('div')(
  css({
    display: 'inline-flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grays.5',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    [`${Input}:focus + &`]: {
      color: 'grays.6',
    },
    [`${Input}:checked + &`]: {
      color: 'blues.4',
    },
  })
);
