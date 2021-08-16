import { styled } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';
import { StyledText } from './Text';

export const Label = styled(LabelPrimitive.Root, StyledText, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});
