import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type LinkProps = StitchesProps<typeof Link>;
export type LinkVariants = StitchesVariants<typeof Link>;

export const Link = styled('a', {
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$gray300',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  ':hover': {
    textDecorationLine: 'underline',
  },
  ':focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  variants: {
    variant: {
      blue: {
        color: '$blue900',
        textDecorationColor: '$blue300',
        ':focus': {
          outlineColor: '$blue700',
        },
      },
      subtle: {
        color: '$gray900',
        textDecorationColor: '$gray300',
        ':focus': {
          outlineColor: '$gray700',
        },
      },
      contrast: {
        color: 'inherit',
        textDecoration: 'underline',
        textDecorationColor: '$gray300',
        ':hover': {
          textDecorationColor: '$gray600',
        },
        ':focus': {
          outlineColor: '$gray700',
        },
      },
    },
  },
});
