import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type InputProps = StitchesProps<typeof Input>;
export type InputVariants = StitchesVariants<typeof Input>;

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $gray600',
  borderRadius: '$2',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',

  ':focus': {
    boxShadow: 'inset 0px 0px 0px 1px $blue700, 0px 0px 0px 1px $blue700',
  },
  '::placeholder': {
    color: '$gray800',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray700',
    cursor: 'not-allowed',
    '::placeholder': {
      color: '$gray600',
    },
  },
  ':read-only': {
    backgroundColor: '$gray100',
    // color: '$gray900',
    ':focus': {
      boxShadow: 'inset 0px 0px 0px 1px $gray600',
    },
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        fontSize: '$1',
        px: '$1',
      },
      '2': {
        height: '$5',
        fontSize: '$2',
        px: '$1',
      },
      '3': {
        height: '$6',
        fontSize: '$3',
        px: '$2',
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px $gray600',
        },
        ':focus': {
          boxShadow: 'inset 0px 0px 0px 1px $blue700, 0px 0px 0px 1px $blue700',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $red600',
        ':focus': {
          boxShadow: 'inset 0px 0px 0px 1px $red700, 0px 0px 0px 1px $red700',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $green600',
        ':focus': {
          boxShadow: 'inset 0px 0px 0px 1px $green700, 0px 0px 0px 1px $green700',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        ':focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
});
