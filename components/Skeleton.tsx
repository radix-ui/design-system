import { StitchesProps, StitchesVariants, styled, css } from '../stitches.config';

export type SkeletonProps = StitchesProps<typeof Skeleton>;
export type SkeletonVariants = StitchesVariants<typeof Skeleton>;

const pulse = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' },
});

export const Skeleton = styled('div', {
  backgroundColor: '$gray300',
  position: 'relative',
  overflow: 'hidden',

  '::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$gray500',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      avatar1: {
        borderRadius: '$round',
        height: '$3',
        width: '$3',
      },
      avatar2: {
        borderRadius: '$round',
        height: '$5',
        width: '$5',
      },
      avatar3: {
        borderRadius: '$round',
        height: '$6',
        width: '$6',
      },
      avatar4: {
        borderRadius: '$round',
        height: '$7',
        width: '$7',
      },
      avatar5: {
        borderRadius: '$round',
        height: '$8',
        width: '$8',
      },
      avatar6: {
        borderRadius: '$round',
        height: '$9',
        width: '$9',
      },
      text: {
        height: '$1',
      },
      title: {
        height: '$5',
      },
      heading: {
        height: '$3',
      },
      button: {
        borderRadius: '$2',
        height: '$5',
        width: '$8',
      },
    },
  },
});
