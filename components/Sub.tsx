import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'sub';

export const StyledSub = styled(DEFAULT_TAG, {
  fontFeatureSettings: '"subs"',
  fontSize: '100%',
  lineHeight: '1',
  verticalAlign: 'baseline',
});

type SubCSSProp = { css?: CSS };
type SubVariants = StitchesVariants<typeof StyledSub>;
type SubOwnProps = SubCSSProp & SubVariants;

type SubComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SubOwnProps>;

export const Sub = React.forwardRef((props, forwardedRef) => {
  return <StyledSub {...props} ref={forwardedRef} />;
}) as SubComponent;

Sub.toString = () => `.${StyledSub.className}`;
