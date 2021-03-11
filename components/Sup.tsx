import React from 'react';
import { styled, CSS, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'sup';

export const StyledSup = styled(DEFAULT_TAG, {
  fontFeatureSettings: '"sups"',
  fontSize: '100%',
  lineHeight: '1',
  verticalAlign: 'baseline',
});

type SupCSSProp = { css?: CSS };
// TODO: Remove omit fix when this is merged https://github.com/modulz/stitches/issues/421
type SupVariants = Omit<StitchesVariants<typeof StyledSup>, 'size'>;
type SupOwnProps = SupCSSProp & SupVariants & { size?: any };

type SupComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, SupOwnProps>;

export const Sup = React.forwardRef((props, forwardedRef) => {
  return <StyledSup {...props} ref={forwardedRef} />;
}) as SupComponent;

Sup.toString = () => `.${StyledSup.className}`;