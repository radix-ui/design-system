import { StitchesProps, StitchesVariants, styled } from '../stitches.config';

export type ButtonProps = StitchesProps<typeof Button>;
export type ButtonVariants = StitchesVariants<typeof Button>;

export const Button = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  border: 'none',
  boxShadow: 'inset 0 0 0 1px $gray600',
  borderRadius: '$2',
  color: '$hiContrast',
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  ':hover': {
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  ':active': {
    backgroundColor: '$gray100',
    boxShadow: 'inset 0 0 0 1px $gray700',
  },
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
  },
  ':disabled': {
    backgroundColor: '$gray100',
    boxShadow: 'inset 0 0 0 1px $gray600',
    color: '$gray700',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '2': {
        height: '$6',
        px: '$3',
        fontSize: '$3',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue100',
        boxShadow: 'inset 0 0 0 1px $blue600',
        color: '$blue900',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px $blue700',
        },
        ':active': {
          backgroundColor: '$blue200',
          boxShadow: 'inset 0 0 0 1px $blue700',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $blue700, 0 0 0 1px $blue700',
        },
      },
      green: {
        backgroundColor: '$green100',
        boxShadow: 'inset 0 0 0 1px $green600',
        color: '$green900',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px $green700',
        },
        ':active': {
          backgroundColor: '$green200',
          boxShadow: 'inset 0 0 0 1px $green700',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $green700, 0 0 0 1px $green700',
        },
      },
      red: {
        color: '$red900',
        ':hover': {
          backgroundColor: '$red100',
          boxShadow: 'inset 0 0 0 1px $red700',
        },
        ':active': {
          backgroundColor: '$red200',
          boxShadow: 'inset 0 0 0 1px $red700',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $red700, 0 0 0 1px $red700',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontWeight: 400,
        ':hover': {
          backgroundColor: '$gray200',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: '$gray300',
          boxShadow: 'none',
        },
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        boxShadow: 'none',
        color: 'white',
        ':hover': {
          backgroundColor: 'hsla(0,100%,100%,.25)',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
          boxShadow: 'none',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        boxShadow: 'none',
        color: 'black',
        ':hover': {
          backgroundColor: 'hsla(0,0%,0%,.25)',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
          boxShadow: 'none',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px $gray700',
        color: '$gray900',
        ':hover': {
          backgroundColor: '$gray400',
          boxShadow: 'inset 0 0 0 1px $gray700',
        },
        ':active': {
          backgroundColor: '$gray400',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
        },
      },
      waiting: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px $gray700',
        color: 'transparent',
        pointerEvents: 'none',
        ':hover': {
          backgroundColor: '$gray400',
          boxShadow: 'inset 0 0 0 1px $gray700',
        },
        ':active': {
          backgroundColor: '$gray400',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $gray700',
        },
      },
    },
  },
});
