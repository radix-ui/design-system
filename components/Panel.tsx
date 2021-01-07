import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type PanelProps = StitchesProps<typeof Panel>;
export type PanelVariants = StitchesVariants<typeof Panel>;

export const Panel = styled('div', {
  backgroundColor: '$panel',
  borderRadius: '$2',
  boxShadow: '$shadowLight 0px 10px 38px -10px, $shadowDark 0px 10px 20px -15px',
});
