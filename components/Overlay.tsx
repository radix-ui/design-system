import { styled, StitchesProps } from '../stitches.config';

export type OverlayProps = StitchesProps<typeof Overlay>;

export const Overlay = styled('div', {
  backgroundColor: 'rgba(0, 0, 0, .15)',
});
