import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type TextareaProps = StitchesProps<typeof Textarea>;
export type TextareaVariants = StitchesVariants<typeof Textarea>;

export const Textarea = styled('textarea', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '$1',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $gray600',
  borderRadius: '$2',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',
  position: 'relative',
  minHeight: 80,
  resize: 'vertical',

  ':focus': {
    boxShadow: 'inset 0px 0px 0px 1px $blue700, 0px 0px 0px 1px $blue700',
    zIndex: '1',
  },
  '::placeholder': {
    color: '$gray800',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray700',
    cursor: 'not-allowed',
    resize: 'none',
    '::placeholder': {
      color: '$gray600',
    },
  },
  ':read-only': {
    backgroundColor: '$gray100',
    ':focus': {
      boxShadow: 'inset 0px 0px 0px 1px $gray600',
    },
  },

  variants: {
    size: {
      '1': {
        fontSize: '$1',
        lineHeight: '16px',
        px: '$1',
      },
      '2': {
        fontSize: '$2',
        lineHeight: '20px',
        px: '$1',
      },
      '3': {
        fontSize: '$3',
        lineHeight: '23px',
        px: '$2',
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
