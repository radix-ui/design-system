import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Text } from './Text';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledLabel = styled(LabelPrimitive.Root, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});

type LabelCSSProp = Pick<StitchesProps<typeof StyledLabel>, 'css'>;
type LabelVariants = StitchesVariants<typeof Text>;
type LabelOwnProps = Polymorphic.OwnProps<typeof LabelPrimitive.Root> &
  LabelCSSProp &
  LabelVariants;

type LabelComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof LabelPrimitive.Root>,
  LabelOwnProps
>;

export const Label = React.forwardRef((props, forwardedRef) => {
  return <Text as={StyledLabel} {...props} ref={forwardedRef} />;
}) as LabelComponent;
