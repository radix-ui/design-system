import { styled, StitchesProps } from '../stitches.config';

export type ImageProps = StitchesProps<typeof Image>;

export const Image = styled('img', {
  // Reset
  verticalAlign: 'middle',
  maxWidth: '100%',
});
