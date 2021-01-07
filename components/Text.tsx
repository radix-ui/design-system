import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type TextProps = StitchesProps<typeof Text>;
export type TextVariants = StitchesVariants<typeof Text>;

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  // Custom
  color: '$hiContrast',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    color: {
      red: {
        color: '$red900',
      },
      crimson: {
        color: '$crimson900',
      },
      pink: {
        color: '$pink900',
      },
      purple: {
        color: '$purple900',
      },
      violet: {
        color: '$violet900',
      },
      indigo: {
        color: '$indigo900',
      },
      blue: {
        color: '$blue900',
      },
      turquoise: {
        color: '$turquoise900',
      },
      teal: {
        color: '$teal900',
      },
      green: {
        color: '$green900',
      },
      lime: {
        color: '$lime900',
      },
      yellow: {
        color: '$yellow900',
      },
      orange: {
        color: '$orange900',
      },
      gold: {
        color: '$gold900',
      },
      bronze: {
        color: '$bronze900',
      },
      gray: {
        color: '$gray900',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
  },
});
