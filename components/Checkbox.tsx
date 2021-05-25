import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  overflow: 'hidden',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8',
    },
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red7',
    boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9',
  },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
        borderRadius: '$1',
      },
      '2': {
        width: '$5',
        height: '$5',
        borderRadius: '$2',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

type CheckboxCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type CheckboxVariants = Omit<StitchesVariants<typeof StyledCheckbox>, 'size'>;
type CheckboxOwnProps = Polymorphic.OwnProps<typeof CheckboxPrimitive.Root> &
  CheckboxCSSProp &
  CheckboxVariants & { size?: any };

type CheckboxComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof CheckboxPrimitive.Root>,
  CheckboxOwnProps
>;

export const Checkbox = React.forwardRef((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <StyledIndicator>
      <CheckIcon />
    </StyledIndicator>
  </StyledCheckbox>
)) as CheckboxComponent;
