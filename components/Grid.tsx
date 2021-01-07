import { styled, StitchesProps } from '../stitches.config';

export type GridProps = StitchesProps<typeof Grid>;

export const Grid = styled('div', {
  // Reset
  boxSizing: 'border-box',

  // Custom
  display: 'grid',
});
