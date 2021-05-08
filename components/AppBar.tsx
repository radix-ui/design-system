import { styled } from '../stitches.config';

export const AppBar = styled('div', {
  boxSizing: 'border-box',
  zIndex: '1',

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
    glass: {
      true: {
        backdropFilter: 'blur(12px) saturate(160%)',
      }
    },
    border: {
      true: {
        borderBottom: '1px solid',
      }
    },
    color: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      plain: {
        backgroundColor: '$gray100',
      },
      accent: {
        backgroundColor: '$blue800',
      }
    }
  },
  compoundVariants: [
    {
      glass: 'true',
      color: 'plain',
      css: {
        opacity: '.9',
      },
    },
    {
      glass: 'true',
      color: 'accent',
      css: {
        opacity: '.9',
      },
    },
    {
      glass: 'true',
      color: 'loContrast',
      css: {
        opacity: '.9',
      },
    },
    {
      border: 'true',
      color: 'plain',
      css: {
        borderColor: '$slate500',
      },
    },
    {
      border: 'true',
      color: 'accent',
      css: {
        borderColor: '$blue900',
      },
    },
    {
      border: 'true',
      color: 'loContrast',
      css: {
        borderColor: '$slate500',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    color: 'loContrast',
  }
});