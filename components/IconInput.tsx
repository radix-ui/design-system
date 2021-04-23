import React from 'react';
import { styled, CSS } from '../stitches.config';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { Input } from './Input';

const DEFAULT_TAG = 'div';

const IconSlot = styled('div', {
  zIndex: 1,
  position: 'absolute',
  lineHeight: 0,
  width: '$3',
  height: '$3',
  left: '$1',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$gray800',
});

const Wrapper = styled(DEFAULT_TAG, {
  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,

  [`& ${Input}`]: {
    zIndex: 1,
    paddingLeft: 'calc($1 + $5)',
  },
  variants: {
    variant: {
      ghost: {
        '@hover': {
          [`& ${IconSlot}:hover + ${Input}:not(:focus)`]: {
            boxShadow: 'inset 0 0 0 1px $colors$slate600',
          },
        },
      },
    },
    disabled: {
      true: {
        [`& ${IconSlot}`]: {
          color: '$slate700',
        },
      },
    },
  },
});

type IconInputProps = React.ComponentProps<typeof Input> & {
  icon: React.ReactNode;
  iconCss?: CSS;
  wrapperCss?: CSS;
};

type IconInputComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, IconInputProps>;

export const IconInput = React.forwardRef(
  ({ icon, iconCss, disabled, variant, wrapperCss, ...inputProps }, forwardedRef) => {
    return (
      <Wrapper css={wrapperCss} disabled={disabled} variant={variant}>
        <IconSlot css={iconCss}>{icon}</IconSlot>
        <Input disabled={disabled} ref={forwardedRef} variant={variant} {...inputProps}></Input>
      </Wrapper>
    );
  }
) as IconInputComponent;

IconInput.toString = () => `.${Wrapper.className}`;
