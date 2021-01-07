import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type TreeItemProps = StitchesProps<typeof TreeItem>;
export type TreeItemVariants = StitchesVariants<typeof TreeItem>;

export const TreeItem = styled('div', {
  // Reset
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  lineHeight: '1',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  ':disabled': {
    pointerEvents: 'none',
  },
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  height: '29px',
  px: '$2',
  fontSize: '$1',
  color: '$hiContrast',

  variants: {
    variant: {
      gray: {
        backgroundColor: '$gray200',
        ':hover': {
          backgroundColor: '$gray300',
        },
        ':active': {
          backgroundColor: '$gray400',
        },
      },
      red: {
        backgroundColor: '$red200',
        ':hover': {
          backgroundColor: '$red300',
        },
        ':active': {
          backgroundColor: '$red400',
        },
      },
      crimson: {
        backgroundColor: '$crimson200',
        ':hover': {
          backgroundColor: '$crimson300',
        },
        ':active': {
          backgroundColor: '$crimson400',
        },
      },
      pink: {
        backgroundColor: '$pink200',
        ':hover': {
          backgroundColor: '$pink300',
        },
        ':active': {
          backgroundColor: '$pink400',
        },
      },
      purple: {
        backgroundColor: '$purple200',
        ':hover': {
          backgroundColor: '$purple300',
        },
        ':active': {
          backgroundColor: '$purple400',
        },
      },
      violet: {
        backgroundColor: '$violet200',
        ':hover': {
          backgroundColor: '$violet300',
        },
        ':active': {
          backgroundColor: '$violet400',
        },
      },
      indigo: {
        backgroundColor: '$indigo200',
        ':hover': {
          backgroundColor: '$indigo300',
        },
        ':active': {
          backgroundColor: '$indigo400',
        },
      },
      blue: {
        backgroundColor: '$blue200',
        ':hover': {
          backgroundColor: '$blue300',
        },
        ':active': {
          backgroundColor: '$blue400',
        },
      },
      turquoise: {
        backgroundColor: '$turquoise200',
        ':hover': {
          backgroundColor: '$turquoise300',
        },
        ':active': {
          backgroundColor: '$turquoise400',
        },
      },
      teal: {
        backgroundColor: '$teal200',
        ':hover': {
          backgroundColor: '$teal300',
        },
        ':active': {
          backgroundColor: '$teal400',
        },
      },
      green: {
        backgroundColor: '$green200',
        ':hover': {
          backgroundColor: '$green300',
        },
        ':active': {
          backgroundColor: '$green400',
        },
      },
      lime: {
        backgroundColor: '$lime200',
        ':hover': {
          backgroundColor: '$lime300',
        },
        ':active': {
          backgroundColor: '$lime400',
        },
      },
      yellow: {
        backgroundColor: '$yellow200',
        ':hover': {
          backgroundColor: '$yellow300',
        },
        ':active': {
          backgroundColor: '$yellow400',
        },
      },
      orange: {
        backgroundColor: '$orange200',
        ':hover': {
          backgroundColor: '$orange300',
        },
        ':active': {
          backgroundColor: '$orange400',
        },
      },
      gold: {
        backgroundColor: '$gold200',
        ':hover': {
          backgroundColor: '$gold300',
        },
        ':active': {
          backgroundColor: '$gold400',
        },
      },
      brown: {
        backgroundColor: '$brown200',
        ':hover': {
          backgroundColor: '$brown300',
        },
        ':active': {
          backgroundColor: '$brown400',
        },
      },
      bronze: {
        backgroundColor: '$bronze200',
        ':hover': {
          backgroundColor: '$bronze300',
        },
        ':active': {
          backgroundColor: '$bronze400',
        },
      },
    },
  },
});
