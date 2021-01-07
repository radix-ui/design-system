import { styled, StitchesProps } from '../stitches.config';

export type KbdProps = StitchesProps<typeof Kbd>;

export const Kbd = styled('kbd', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$loContrast',
  borderRadius: '$1',
  color: '$hiContrast',
  userSelect: 'none',
  cursor: 'default',
  whiteSpace: 'nowrap',
  boxShadow: `
    inset 0 0.5px rgba(255, 255, 255, 0.1),
    inset 0 1px 5px $gray100,
    0px 0px 0px 0.5px $gray700,
    0px 2px 1px -1px $gray700,
    0 1px $gray700`,
  textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',

  fontFamily: 'inherit',
  fontWeight: 400,
  lineHeight: '1.5',
  mx: '2px',

  // Size 2
  px: '0.5em',
  height: '$5',
  minWidth: '2em',
  fontSize: '$2',

  variants: {
    size: {
      '1': {
        px: '0.3em',
        height: '$3',
        minWidth: '1.6em',
        fontSize: '10px',
      },
    },
    width: {
      shift: {
        width: '4em',
        justifyContent: 'flex-start',
      },
      command: {
        width: '3em',
        justifyContent: 'flex-end',
      },
      space: {
        width: '8em',
      },
    },
  },
});

Kbd.compoundVariant(
  {
    size: '1',
    width: 'shift',
  },
  {
    width: '3em',
  }
);

Kbd.compoundVariant(
  {
    size: '1',
    width: 'command',
  },
  {
    width: '2.5em',
  }
);

Kbd.compoundVariant(
  {
    size: '1',
    width: 'space',
  },
  {
    width: '5em',
  }
);
