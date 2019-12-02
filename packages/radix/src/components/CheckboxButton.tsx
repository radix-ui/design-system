import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { margin, MarginProps } from '@modulz/radix-system';

type CheckboxButtonProps = MarginProps &
  React.ComponentPropsWithRef<'input'> & { children: React.ReactNode };

const marginPropNames = margin.propNames;

export const CheckboxButton = React.forwardRef<HTMLLabelElement, CheckboxButtonProps>(
  ({ children, ...props }, ref) => {
    const marginProps = pick(props, marginPropNames);
    const inputProps = omit(props, marginPropNames);

    return (
      <CheckboxWrapper {...marginProps} ref={ref}>
        <Input type="checkbox" {...inputProps} />
        <FakeCheckbox>{children}</FakeCheckbox>
      </CheckboxWrapper>
    );
  }
);

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
    color: 'gray700',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    [`${Input}:focus + &`]: {
      color: 'gray800',
    },
    [`${Input}:checked + &`]: {
      color: 'blue600',
    },
  })
);
