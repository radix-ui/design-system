import { styled } from '../stitches.config';

export const AppBar = styled('div', {
  boxSizing: 'border-box',

  variants: {
    size: {
      1: {
        py: '$1',
      },
      2: {
        py: '$2',
      },
      3: {
        py: '$3',
      },
    },
    sticky: {
      true: {
        position: 'fixed',
        width: '100%',
      }
    },
    color: {
      plain: {
        backgroundColor: '$panel',
      },
      accent: {
        backgroundColor: '$blue800',
      }
    }
  },
  defaultVariants: {
    size: '1',
    color: 'plain',
  }
});