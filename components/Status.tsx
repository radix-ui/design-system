import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type StatusProps = StitchesProps<typeof Status>;
export type StatusVariants = StitchesVariants<typeof Status>;

export const Status = styled.div({
  borderRadius: '50%',

  variants: {
    size: {
      '1': {
        width: '5px',
        height: '5px',
      },
      '2': {
        width: 9,
        height: 9,
      },
    },
    color: {
      gray: {
        backgroundColor: '$gray900',
      },
      blue: {
        backgroundColor: '$blue800',
      },
      green: {
        backgroundColor: '$green800',
      },
      yellow: {
        backgroundColor: '$yellow800',
      },
      red: {
        backgroundColor: '$red800',
      },
    },
  },
});
