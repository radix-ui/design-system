import React, { FC, ComponentProps, ReactNode } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { margin, MarginProps } from '@modulz/radix-system';

type CheckboxButton = MarginProps & ComponentProps<'input'> & { children: ReactNode };

const marginPropNames = margin.propNames;

export const CheckboxButton: FC<CheckboxButton> = ({ children, ...props }) => {
  const marginProps = pick(props, marginPropNames);
  const inputProps = omit(props, marginPropNames);

  return (
    <CheckboxWrapper {...marginProps}>
      <Input type="checkbox" {...inputProps} />
      <FakeCheckbox>{children}</FakeCheckbox>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled('label')<MarginProps>(
  {
    position: 'relative',
  },
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
