import React from 'react';
import { styled, CSS } from '../stitches.config';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { Input } from './Input';

const DEFAULT_TAG = 'div';

const IconSlot = styled('div', {
  boxSizing: 'border-box',
  position: 'absolute',
  width: '$3',
  height: '$3',
  left: '$$iconLeft',
  top: '50%',
  zIndex: 1,
  transform: 'translateY(-50%)',
  color: '$slate800',
  lineHeight: 0,
});

const Wrapper = styled(DEFAULT_TAG, {
  boxSizing: 'border-box',

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,

  [`& ${Input}`]: {
    zIndex: 1,
    paddingLeft: 'calc($$iconLeft + $5)',
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
    size: {
      '1': {
        $$iconLeft: '$space$1',
      },
      '2': {
        $$iconLeft: '$space$1',
      },
      '3': {
        $$iconLeft: '$space$2',
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
  defaultVariants: {
    size: '1',
  },
});

type IconInputProps = React.ComponentProps<typeof Input> & {
  icon: React.ReactNode;
  iconCss?: CSS;
  wrapperCss?: CSS;
};

type IconInputComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, IconInputProps>;

export const IconInput = React.forwardRef(
  ({ size, icon, iconCss, disabled, variant, wrapperCss, ...inputProps }, forwardedRef) => {
    return (
      <Wrapper size={size} variant={variant} disabled={disabled} css={wrapperCss}>
        <IconSlot css={iconCss}>{icon}</IconSlot>
        <Input
          ref={forwardedRef}
          size={size}
          variant={variant}
          disabled={disabled}
          {...inputProps}
        ></Input>
      </Wrapper>
    );
  }
) as IconInputComponent;

IconInput.toString = () => `.${Wrapper.className}`;
