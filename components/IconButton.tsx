import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type IconButtonProps = StitchesProps<typeof IconButton>;
export type IconButtonVariants = StitchesVariants<typeof IconButton>;

export const IconButton = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  border: '1px solid $gray600',
  borderRadius: '$2',
  height: '$5',
  width: '$5',
  transition: 'all 40ms linear',
  ':hover': {
    borderColor: '$gray700',
  },
  ':active': {
    backgroundColor: '$gray100',
  },
  ':focus': {
    borderColor: '$gray700',
    boxShadow: '0 0 0 1px $gray700',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$gray500',
  },

  variants: {
    size: {
      large: {
        height: '$6',
        width: '$6',
      },
      xl: {
        height: '$7',
        width: '$7',
      },
      xxl: {
        height: '$8',
        width: '$8',
      },
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        ':hover': {
          backgroundColor: '$gray200',
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
        },
        ':active': {
          backgroundColor: '$gray300',
        },
      },
      raised: {
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        ':hover': {
          boxShadow:
            '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },
        ':focus': {
          borderColor: '$gray700',
          boxShadow:
            '0 0 0 1px $gray700, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },
        ':active': {
          backgroundColor: '$gray300',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: '$gray300',
        },
      },
      waiting: {
        backgroundColor: '$gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: '$gray300',
        },
      },
    },
  },
});
