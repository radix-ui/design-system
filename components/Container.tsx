import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type ContainerProps = StitchesProps<typeof Container>;
export type ContainerVariants = StitchesVariants<typeof Container>;

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
  },
});
