import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  Checkbox as CheckboxPrimitive,
  CheckboxProps as CheckboxPrimitiveProps,
} from '@interop-ui/react-checkbox';
import { CheckIcon } from '@modulz/radix-icons';

export type CheckboxProps = CheckboxPrimitiveProps &
  StitchesProps<typeof StyledCheckbox> &
  CheckboxVariants;
export type CheckboxVariants = StitchesVariants<typeof StyledCheckbox>;

const StyledCheckbox = styled(CheckboxPrimitive, {
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $gray600',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red600',
    boxShadow: 'inset 0 0 0 1px $blue800, 0 0 0 1px $blue800',
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
});
const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export function Checkbox({ size = '1', ...props }: CheckboxProps) {
  return (
    <StyledCheckbox {...props} size={size}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  );
}
