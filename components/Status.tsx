import { styled } from '../stitches.config';

export const Status = styled('div', {
  borderRadius: '50%',
  width: '5px',
  height: '5px',

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
