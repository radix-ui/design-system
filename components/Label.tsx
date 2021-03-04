import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';
import { StyledText } from './Text';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const StyledLabel = styled(LabelPrimitive.Root, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});

type LabelCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type LabelVariants = Omit<StitchesVariants<typeof StyledText>, 'size'>;
type LabelOwnProps = Polymorphic.OwnProps<typeof LabelPrimitive.Root> &
  LabelCSSProp &
  LabelVariants & { size?: any };

type LabelComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof LabelPrimitive.Root>,
  LabelOwnProps
>;

export const Label = React.forwardRef((props, forwardedRef) => {
  return <StyledText as={StyledLabel} {...props} ref={forwardedRef} />;
}) as LabelComponent;
