import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'code';

type CodeCSSProp = Pick<StitchesProps<typeof StyledCode>, 'css'>;
type CodeVariants = StitchesVariants<typeof StyledCode>;
type CodeOwnProps = CodeCSSProp & CodeVariants;

const StyledCode = styled(DEFAULT_TAG, {
  backgroundColor: '$violet200',
  color: '$violet900',
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray200',
        color: '$gray900',
      },
      violet: {
        backgroundColor: '$violet200',
        color: '$violet900',
      },
    },
  },
});

type CodeComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, CodeOwnProps>;

export const Code = React.forwardRef((props, forwardedRef) => {
  return <StyledCode {...props} ref={forwardedRef} />;
}) as CodeComponent;
