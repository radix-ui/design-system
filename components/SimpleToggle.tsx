import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import { ToggleButton, ToggleButtonProps } from '@interop-ui/react-toggle-button';

export type SimpleToggleProps = ToggleButtonProps & StitchesProps<typeof SimpleToggle>;
export type SimpleToggleVariants = StitchesVariants<typeof SimpleToggle>;

export const SimpleToggle = styled(ToggleButton, {
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

  height: '$5',
  width: '$5',
  transition: 'all 40ms linear',
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: '$gray200',
  },
  ':active': {
    backgroundColor: '$gray300',
  },
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',
    zIndex: 1,
  },

  '&[data-state="on"]': {
    backgroundColor: '$gray400',
    '&:hover': {
      backgroundColor: '$gray400',
    },
    '&:active': {
      backgroundColor: '$gray600',
    },
  },

  variants: {
    shape: {
      circle: {
        borderRadius: '$round',
      },
      square: {
        borderRadius: '$1',
      },
    },
  },
});
